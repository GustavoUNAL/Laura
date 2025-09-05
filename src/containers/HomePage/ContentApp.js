import React from 'react';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import MainLayout from '../../components/MainLayout/MainLayout';
import HomeAbout from '../../components/HomeAbout/HomeAbout';

import '../../home-layout.css';
import '../../layout-styles.css';

function ContentApp() {
    return (
        <>
            <Navbar />
            <MainLayout>
                <HomeAbout />
            </MainLayout>

            <Footer />
        </>
    );
}

export default ContentApp;
