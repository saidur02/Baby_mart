import React from 'react';

const MyToyTable = ({toy}) => {
    const {photo,seller,category,price,quantity,details} = toy
    console.log(photo)
    return (
        <tr>
        <th>
            <label>
                <input type="checkbox" className="checkbox" />
            </label>
        </th>
        <td>
            <div className="flex items-center space-x-3">
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={photo} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
                <div>
                    <div className="font-bold">{category}</div>
                    <div className="text-sm opacity-50"></div>
                </div>
            </div>
        </td>
        <td>
            {seller}
        </td>
        <td>$ {price}</td>
        <th>
            <button className="btn btn-ghost btn-xs">details</button>
        </th>
    </tr>
    );
};

export default MyToyTable;