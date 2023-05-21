import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/Authpovider';

const AddToys = () => {


    const {user} = useContext(AuthContext);

    const handleSubmit = event =>{
        event.preventDefault();

        const form = event.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const seller = form.seller.value;
        const email = form.email.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
       const addToy = {
        sellerName: name,
        email,
        photo,
        seller,
        category,
        price,rating,quantity,details
       }
       fetch('http://localhost:5000/addtoy',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(addToy)
       })
       .then(res =>res.json())
       .then(data => {
        console.log(data)
       })
    }


    return (
        <div>
            <h2 className='text-center text-3xl font-semibold'>Add Toys</h2>

            <form onSubmit={handleSubmit}>
                <div className="card-body">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Picture URL</span>
                            </label>
                            <input type="text" name='photo'  placeholder="Picture URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name'  placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text" name='seller' placeholder='Seller Name' className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input type="text" name='email' defaultValue={user?.email} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sub-Category</span>
                            </label>
                            <input type="text" name='category' placeholder='Sub-Category' className="input input-bordered" />

                        </div>
                       
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='price'  placeholder="Price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name='rating' placeholder='Rating' className="input input-bordered" />

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

                        <input className="btn btn-primary btn-block" type="submit" value="Submit" />
                    </div>
                </div>
            </form>
        </div>   
    );
};

export default AddToys;