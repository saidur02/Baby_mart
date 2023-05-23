import React from 'react';
import { Link } from 'react-router-dom';

const MyToyTable = ({ toy, handleDelate, handleUpdate }) => {


    const { photo, seller, category, price, _id } = toy




    return (
        <tr>
            <th>
                <button onClick={() => handleDelate(_id)} className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {category}
            </td>
            <td>
                {seller}
            </td>
            <td>$ {price}</td>
            <th>
                <Link to='/update'>  <button onClick={() => handleUpdate(_id)} className="btn btn-primary">Update Toy</button></Link>
            </th>

        </tr>
    );
};

export default MyToyTable;
