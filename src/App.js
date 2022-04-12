import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import HomePage from './Pages/HomePages/HomePage/HomePage';
import ExplorePage from './Pages/ExplorePage/ExplorePage/ExplorePage';
import SignUp from './Pages/AuthenticationPage/SingUpPage/SignUp';
import SignIn from './Pages/AuthenticationPage/SignIn/SignIn';
import AboutPage from './Pages/AboutPage/AboutPage';
import PrivateRoute from './PrivateRoutes/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/DashBoardPage/DashBoard/DashBoard';
import DashBoardHome from './Pages/DashBoardPage/DashBoardHome/DashBoardhome';
import GiveReview from './Pages/DashBoardPage/GiveReview/GiveReview';
import MyCart from './Pages/DashBoardPage/MyCart/MyCart';
import AddProducts from './Pages/DashBoardPage/AddProducts/AddProducts';
import ManageOrder from './Pages/DashBoardPage/ManageOrder/ManageOrder';
import MakeAdmin from './Pages/DashBoardPage/MakeAdmin/MakeAdmin';
import UpdateProduct from './Pages/DashBoardPage/UpdateProduct/UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <AuthProvider > */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="explore" element={<ExplorePage />} />
          {/* <Route path="singlePackageDetails/:id" element={<PrivateRoute > <SinglePackageDetails /></PrivateRoute >} /> */}




          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>

            <Route exact path="/dashboard" element={<PrivateRoute><DashBoardHome /></PrivateRoute>}></Route>
            <Route path={"/dashboard/giveReview"} element={<PrivateRoute><GiveReview /></PrivateRoute>}></Route>
            <Route path={"/dashboard/myCart"} element={<PrivateRoute><MyCart /></PrivateRoute>}></Route>
            <Route path={"/dashboard/addProducts"} element={<PrivateRoute><AddProducts /></PrivateRoute>}></Route>
            <Route path={"/dashboard/manageOrder"} element={<PrivateRoute><ManageOrder /></PrivateRoute>}> </Route>
            <Route path={"/dashboard/makeAdmin"} element={<PrivateRoute><MakeAdmin /></PrivateRoute>}></Route>
            <Route path={"/dashboard/updateProduct"} element={<PrivateRoute><UpdateProduct /></PrivateRoute>}></Route>

          </Route>




          {/* <Route path="/popular_destinations" element={<PopularDestination />} /> */}
          {/* <Route path="/singleDestination/:id" element={<SingleDetails />} /> */}
          <Route path="signUp" element={<SignUp />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer ></Footer>
        {/* </AuthProvider> */}
      </BrowserRouter>


    </div>
  );
}

export default App;

