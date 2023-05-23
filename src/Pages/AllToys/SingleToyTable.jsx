import React from 'react';
import { Link } from 'react-router-dom';

const SingleToyTable = ({ singleToy }) => {


    const viewDetails = (id) => {

    }

    const { name, seller, category, price, quantity, sellerName } = singleToy
    return (
        <tr>
            <td>
                <div className="flex items-center text-xl space-x-3">
                    <div>
                        <div className="font-bold"> {seller}</div>

                    </div>
                </div>
            </td>
            <td>
                <div className="flex items-center text-xl space-x-3">
                    <div>
                        <div className="font-bold"> {sellerName}</div>
                    </div>
                </div>
            </td>
            <td>
                <div className="flex items-center text-xl space-x-3">
                    <div>
                        <div className="font-bold">{category}</div>

                    </div>
                </div>
            </td>
            <td>
                <div className="flex items-center text-xl space-x-3">
                    <div>
                        <div className="font-bold">$ {price}</div>
                    </div>
                </div>
            </td>
            <td>
                <div className="flex items-center  text-xl space-x-3">
                    <div>
                        <div className="font-bold">{quantity}</div>
                    </div>
                </div>
            </td>
            <th>
               <Link to='/viewdetails'> <button onClick={() => viewDetails(id)} className="btn btn-primary">View details</button></Link>
            </th>
        </tr>
    );
};

export default SingleToyTable;