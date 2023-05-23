import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/Authpovider';

const UpdatedInfo = () => {
    const {user} = useContext(AuthContext);

    const handleUpdate = event =>{
        event.preventDefault();

        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
       const addToy = {
        price,quantity,details
       }
    }

    return (
        <div>
            <h2 className='text-center text-3xl font-semibold'>Update Toys</h2>

            <form onSubmit={handleUpdate}>
                <div className="card-body">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'> <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='price'  placeholder="Price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="text" name='quantity' placeholder='Available Quantity' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Detail Description</span>
                            </label>
                            <input type="text" name='details' placeholder='Detail Description' className="input input-bordered" />

                        </div>
                       
                        
                    </div>
                    <div className="form-control mt-6">

                        <input className="btn btn-primary btn-block" type="submit" value="Update" />
                    </div>
                </div>
            </form>
        </div>   
    );
};


export default UpdatedInfo;