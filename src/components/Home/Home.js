import React from 'react';
import ContactUs from '../contactus/ContactUs';
import TopBanner from '../Header/HeaderNav/TopBanner/TopBanner';
import Packages from '../Packages/Packages';
import "./Home.css"

const Home = () => {
    
    return (
        <div>
            <TopBanner></TopBanner>
            <Packages></Packages>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;