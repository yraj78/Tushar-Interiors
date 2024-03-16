import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const HomeComponent = () => {
    return (
        <>
            <Navbar/>
            <h1 id='title' className='float-from-left'>
                <i>We decorate your dreams
                </i>
            </h1>
            <div className='homebg'>
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default HomeComponent;