import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
   
   
    return (
        <div className=' '>
            <h2 className='text-7xl ms-96'>404</h2>
            <h3 className='text-6xl ms-96'>Page Not Found</h3>
            <button className='bg-green-400 p-4 rounded-lg ms-96 mt-4'><Link to="/">Home Page</Link></button>           
            
        </div>
    );
};

export default NotFoundPage;