import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-3xl">Baby Mart</a>
            </div>
            <div className="navbar-center hidden lg:flex text-xl m-3">
                <Link to='/' className="m-3 " >Home</Link>
                <Link to='/alltoy' className="m-3 " >All Toys</Link>
                <Link to='/mytoy' className="m-3 " >My Toys</Link>
                <Link to='/addtoy' className="m-3 " >Add A Toy</Link>
                <Link to='/blogs' className="m-3 " >Blogs</Link>
                <Link to='/login' className="m-3 " >Login</Link>
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div>

    );
};

export default Navbar;