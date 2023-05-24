import React, { useContext, useEffect, useState } from 'react';
import AllMyToys from '../../MyToys/AllMyToys';
import { AuthContext } from '../../../Providers/Authpovider';


const ShopBy = () => {
  

    const [categoryToy, setCategory] = useState([])
   

    const url = `https://baby-server.vercel.app/alltoy`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
   
   
    return (
        <>
        
        
        <div className='grid grid-cols-3 gap-8 mt-8'>
          
           {
            categoryToy.map(toy => <AllMyToys
            key={toy._id}
            toy={toy}
            ></AllMyToys>)
           }
        </div>
        </>
    );
};

export default ShopBy;