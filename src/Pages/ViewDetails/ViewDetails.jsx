import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/Authpovider';

const ViewDetails = () => {
    const {user} = useContext(AuthContext)
    const [toy, setToy] = useState([])

    const url = `https://baby-server.vercel.app/addtoy?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToy(data))
    }, [])
    return (
        <>
        {
            toy.map(t=>console.log(t))
           
        }
        <div>
            <h1 className='text-3xl text-center'>View Details Page Here</h1>
        </div>
        </>
    );
};

export default ViewDetails;