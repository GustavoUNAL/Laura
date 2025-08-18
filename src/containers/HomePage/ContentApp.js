import React from 'react';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import MainLayout from '../../components/MainLayout/MainLayout';
import HomeAbout from '../../components/HomeAbout/HomeAbout';
import FeaturedProjects from '../../components/FeaturedProjects/FeaturedProjects';
import Background from '../../components/Background/Background';

function ContentApp() {
    return (
        <>
            <Navbar />
            <MainLayout>
                <HomeAbout />
                <FeaturedProjects />
                <Background />
            </MainLayout>
            <Footer />
        </>
    );
}

export default ContentApp;