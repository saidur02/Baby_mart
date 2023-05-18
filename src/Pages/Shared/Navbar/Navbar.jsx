import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        // <div className="navbar bg-base-100 flex justify-between">
        //     <div className="flex-1">
        //         <a className="btn btn-ghost normal-case text-xl">Baby Mart</a>
        //     </div>
        //     <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
        //     <div className="flex justify-around">
        //         <div>
        //             <Link >Home</Link>
        //             <Link >All Toys</Link>
        //             <Link >My Toys </Link>
        //             <Link >Add A Toy</Link>
        //             <Link >Blogs</Link>
        //         </div>

        //     </div>
        // </div>
        <div className="navbar bg-base-100 container">
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