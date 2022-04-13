import React from 'react';
import Blogs4HomePage from '../Blogs4HomePage/Blogs4HomePage/Blogs4HomePage';
import Header from '../Header/Header';
import Products4Sale from '../Products4Sale/Products4Sale/Products4Sale';
import Reviews from '../Reviews/Reviews/Reviews';
import SpacialEdition from '../SpacialEdition/SpacialEdition';

const HomePage = () => {
    return (
        <div>
            <Header></Header>
            <Products4Sale></Products4Sale>
            <Reviews></Reviews>
            <SpacialEdition></SpacialEdition>
            <Blogs4HomePage></Blogs4HomePage>
        </div>
    );
};

export default HomePage;