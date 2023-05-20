import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar text-white bg-slate-700 mb-8 mt-4 rounded-lg ">
            <div className="navbar-start">
                <Link to='/' className="btn btn-ghost normal-case text-3xl">Baby Mart</Link>
            </div>
            <div className="navbar-center hidden lg:flex text-xl m-3">
                <Link to='/' className="m-3 " >Home</Link>
                <Link to='/alltoy' className="m-3 " >All Toys</Link>
                <Link to='/mytoy' className="m-3 " >My Toys</Link>
                <Link to='/addtoys' className="m-3 " >Add A Toy</Link>
                <Link to='/blogs' className="m-3 " >Blogs</Link>
               
            </div>
            <div className="navbar-end">
            <Link to='/login' className="m-3 " >Login</Link>
            </div>
        </div>

    );
};

export default Navbar;