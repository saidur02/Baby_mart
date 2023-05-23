import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const AllMyToys = ({toy,handleDetails}) => {

    const {photo,seller,category,price,quantity,details,sellerName} = toy
    

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          {photo && <img src={photo} className="rounded-xl" />}
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{category}</h2>
          <p>{details}</p>
          <div className="card-actions">
            <button onClick={() => handleDetails()} className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    );
};

export default AllMyToys;