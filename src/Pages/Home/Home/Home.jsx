import React from 'react';
import Banner from '../Banner/Banner';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import ShopBy from '../ShopBy/ShopBy';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <PhotoGallery></PhotoGallery> */}
            <ShopBy></ShopBy>
        </div>
    );
};

export default Home;