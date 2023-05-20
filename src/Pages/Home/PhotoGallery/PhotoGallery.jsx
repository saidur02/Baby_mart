import React from 'react';
import img1 from  '../../../assets/img/1.jpg'
import img2 from  '../../../assets/img/2.webp'
import img3 from  '../../../assets/img/4.jpg'
import img4 from  '../../../assets/img/5.jpg'
import img5 from  '../../../assets/img/6.jpg'
import img6 from  '../../../assets/img/7.jpg'
import img7 from  '../../../assets/img/8.jpg'
import img8 from  '../../../assets/img/9.jpg'
import img9 from  '../../../assets/img/10.jpg'
import img10 from  '../../../assets/img/11.jpg'


const PhotoGallery = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
            <img src={img7} alt="" />
            <img src={img8} alt="" />
            <img src={img9} alt="" />
            <img src={img10} alt="" />
        </div>
    );
};

export default PhotoGallery;