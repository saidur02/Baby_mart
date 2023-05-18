import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 container mx-auto">
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-3xl">Baby Mart</a>
            </div>
            <div className="navbar-center hidden lg:flex text-xl m-3">
                <Link className="m-3 " >Home</Link>
                <Link className="m-3" >All Toys</Link>
                <Link className="m-3" >My Toys </Link>
                <Link className="m-3" >Add A Toy</Link>
                <Link className="m-3" >Blogs</Link>
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div>

    );
};

export default Navbar;