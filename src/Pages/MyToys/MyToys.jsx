import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/Authpovider';
import MyToyTable from './MyToyTable';

const MyToys = () => {

    const { user } = useContext(AuthContext);

    const [myToy, setMyToy] = useState([])

    const url = `https://baby-server.vercel.app/addtoy?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToy(data))
    }, [])
    return (
        <div>
            <h1>My Toy : {myToy.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Picture      Category</th>
                            <th>Seller Name</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        {
                            myToy.map(toy=><MyToyTable
                            key={user._id}
                            toy={toy}
                            ></MyToyTable>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;