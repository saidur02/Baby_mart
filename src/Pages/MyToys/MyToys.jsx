import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/Authpovider';

const MyToys = () => {

    const {user} = useContext(AuthContext);

    const [myToy,setMyToy] = useState([])

    const url = `http://localhost:5000/addtoy?email=${user?.email}`

    useEffect(() =>{
        fetch(url)
        .then(res =>res.json())
        .then(data =>console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default MyToys;