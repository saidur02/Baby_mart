import React, { useEffect, useState } from 'react';
import SingleToyTable from './SingleToyTable';

const AllToys = () => {
    const [allToy, setAllToy] = useState([])
    const [search, setSearch] = useState('')


    const url = `https://baby-server.vercel.app/alltoy`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllToy(data))
    }, [])

    const handleSearch = () => {
        fetch(`https://baby-server.vercel.app/toysearch${search}`)
        .then(res => res.json()
        .then(data =>{
           setSearch(data)
        }))
    }
    return (
        <div>
            <input className='w-48 h-12 m-8 border border-slate-700 p-4 rounded-lg' type="search" name="search" placeholder='Search' />
            <input onClick={handleSearch} className='btn btn-primary' type="submit" value="Search" />
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                   
                    <thead>
                        <tr>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            
                           
                        </tr>
                    </thead>
                    <tbody>
                       
                    {
                allToy.map(singleToy =><SingleToyTable
                key={singleToy._id}
                singleToy={singleToy}
                ></SingleToyTable> )
            }
                        
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default AllToys;