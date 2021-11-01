import React from 'react';
import ContactUs from '../contactus/ContactUs';
import TopBanner from '../Header/HeaderNav/TopBanner/TopBanner';
import Packages from '../Packages/Packages';
import TourReviwe from '../tourReviwe/TourReviwe';
import "./Home.css"

const Home = () => {

    return (
        <div>
            <TopBanner></TopBanner>
            <Packages></Packages>
            <TourReviwe></TourReviwe>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;