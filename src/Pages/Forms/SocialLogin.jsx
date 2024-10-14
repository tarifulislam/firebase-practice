import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { signInGoogle } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleGoogleLogin = () => {
        signInGoogle()
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser);
                navigate("/")
            })
            .catch(err => console.log(err))
    }
    const handleFacebookLogin = () => {
        console.log("facebook clicked...");

    }


    const handleGithubLogin = () => {
        console.log("github Login");
    }

    return (
        <div className=" space-x-3">
            <button onClick={handleGoogleLogin} className="btn  btn-secondary text-xl font-bold">G</button>
            <button onClick={handleFacebookLogin} className="btn  btn-primary text-xl font-bold">F</button>
            <button onClick={handleGithubLogin} className="btn  btn-success text-xl font-bold text-white">G</button>
        </div>
    );
};

export default SocialLogin;