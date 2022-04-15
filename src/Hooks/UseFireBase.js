import { useEffect, useState } from "react";

import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import InitializeAuthentication from "../FireBase/FireBaseinit";

// initialize firebase app
InitializeAuthentication()

const UseFireBase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    let navigate = useNavigate();

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // This is for sign in with Google
    const signUsingGoogle = (location) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                if (location?.state === null) {
                    console.log('still working');
                    navigate(location?.pathname)
                }
                const destination = location?.state?.from || '';
                navigate(destination)
                setAuthError('');
                const user = result.user
                setUser(user);
                saveUser(user.email, user.displayName, 'PUT')
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // Email Pass log In and Reg

    const registerUser = (email, password, name, location) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const newUser = { email, displayName: name }
                setUser(newUser);
                //save user to the database 
                saveUser(email, name, 'POST');
                //send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    if (location?.state === null) {
                        navigate(location?.pathname)
                    }
                    const destination = location?.state?.from || '';
                    console.log(location);
                    navigate(destination)

                }).catch((error) => {
                });
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    const loginUser = (email, password, location,) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                if (location?.state === null) {
                    navigate(location?.pathname)
                }

                const destination = location?.state?.from || '';
                console.log(destination);
                navigate(destination)
                setAuthError('');
            })
            .catch((error) => {
                // setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    useEffect(() => {
        fetch(`https://sheltered-depths-49982.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])


    console.log(admin);

    // this is using for Log Out
    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch((error) => {
                setAuthError(error);
            }).finally(() => setIsLoading(false));
    }


    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://sheltered-depths-49982.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }


    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    return {
        user,
        signUsingGoogle,
        registerUser,
        admin,
        logout,
        loginUser,
        isLoading,
        authError
    }
};

export default UseFireBase;