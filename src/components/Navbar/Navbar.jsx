import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }
    return (
        <div className="drawer ">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col bg-base-300 ">

                <div className="navbar container mx-auto">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>
                    <div className="mx-2 flex-1 px-2 text-2xl font-bold
                    ">FIREBASE</div>
                    <div className="hidden flex-none lg:block">
                        <ul className="menu menu-horizontal space-x-3">
                            <li className=" font-bold text-xl"><NavLink to="/">Home</NavLink></li>
                            {user ? <>
                                <span className="font-bold text-xs btn btn-primary"> {user?.displayName} <br></br> {user?.email}</span>
                                <span onClick={handleLogOut} className="font-bold text-xl btn btn-secondary">Out</span>

                            </> : <>
                                <li className=" font-bold text-xl"><NavLink to="/signIn">Sign In</NavLink></li>
                                <li className=" font-bold text-xl"><NavLink to="/signUp">Sign Up</NavLink></li>
                            </>}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-80 p-4">
                    <li className=" font-bold text-xl"><NavLink to="/">Home</NavLink></li>
                    <li className=" font-bold text-xl"><NavLink to="/signIn">Sign In</NavLink></li>
                    <li className=" font-bold text-xl"><NavLink to="/signUp">Sign Up</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;