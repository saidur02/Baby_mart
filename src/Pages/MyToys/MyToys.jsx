import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/Authpovider';
import MyToyTable from './MyToyTable';

const MyToys = () => {

    const { user } = useContext(AuthContext);

    const [myToy, setMyToy] = useState([])

    const url = `https://baby-server.vercel.app/alltoy`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToy(data))
    }, [])
    const handleDelate = id =>{
        const proceed =  confirm('Are You Sure')
        if(proceed){
            fetch(`https://baby-server.vercel.app/alltoy/${id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0 ){
                    alert('Deleted Successfully')
                    const remaining = myToy.filter(toy => toy._id !==id)
                    setMyToy(remaining)
                }
            }
                
            
            )
        }
    }

    const handleUpdate = id => {
        fetch(`https://baby-server.vercel.app/addtoy/${id}`,{
                method:'PUT',
                headers:{
                   'content-type': 'application/json'
                },
                body: JSON.stringify({status:'Updated'})
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.modifiedCount > 0){
                    const remaining = myToy.filter(toy =>toy._id !== id);
                    const updateToy = myToy.find(toy => toy._id === id);
                    updateToy.status='Updated'
                    const newToy =[updateToy, ...remaining];
                    setMyToy(newToy)
                }
            })
    }


    return (
        <div>
           
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                   
                    <thead>
                        <tr>
                            <th>
                                Delete Button
                            </th>
                            <th>Picture</th>
                            <th>Category</th>
                            <th>Seller Name</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        {
                            myToy.map(toy=><MyToyTable
                            key={toy._id}
                            toy={toy}
                            handleDelate={handleDelate}
                            handleUpdate={handleUpdate}
                            ></MyToyTable>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;