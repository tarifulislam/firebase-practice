import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SignIn = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(res => {
                console.log(res.user);
                alert("user login successful");
                navigate("/");
            })
            .catch(err => console.log(err))
    }
    return (
        <div className=" w-4/12 mx-auto py-9 shadow-md my-16">
            <div className=" text-center">
                <h2 className=" text-4xl font-bold pb-4 text-green-600">Sign In Now</h2>
            </div>
            <div className="card bg-base-100  w-full">
                <form onSubmit={handleSignIn} className="card-body pt-0">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Login" />
                    </div>
                </form>
                <div className="card-body py-0 text-center">
                    <h2 className=" text-slate-400 font-bold text-xl pb-2">Social Login</h2>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
            <div className=" flex gap-6 justify-center items-center">
                <div className=" h-[1px] w-20 bg-red-200 mt-4"></div>
                <h3 className="text-center pt-3 text-red-400 font-semibold"> <Link to="/signUp">Sign Up now</Link></h3>
                <div className=" h-[1px] w-20 bg-red-200 mt-4"></div>
            </div>
        </div>
    );
};

export default SignIn;