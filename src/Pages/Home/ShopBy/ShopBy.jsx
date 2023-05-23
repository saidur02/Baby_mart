import React, { useEffect, useState } from 'react';
import AllMyToys from '../../MyToys/AllMyToys';


const ShopBy = () => {

    const [allToy, setAllToy] = useState([])


    const url = `https://baby-server.vercel.app/addtoy`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllToy(data))
    }, [])
    return (
        <>
         <h2 className='text-5xl text-center mt-8'>All Toys</h2>
        
        <div className='grid grid-cols-2 gap-8 mt-8'>
          
           {
            allToy.map(toy => <AllMyToys
            key={toy._id}
            toy={toy}
            ></AllMyToys>)
           }
        </div>
        </>
    );
};

export default ShopBy;