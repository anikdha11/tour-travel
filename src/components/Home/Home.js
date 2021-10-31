import React from 'react';
import TopBanner from '../Header/HeaderNav/TopBanner/TopBanner';
import Packages from '../Packages/Packages';
import "./Home.css"

const Home = () => {
    
    return (
        <div>
            <TopBanner></TopBanner>
            <Packages></Packages>
        </div>
    );
};

export default Home;