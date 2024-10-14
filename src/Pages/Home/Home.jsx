import { useContext } from "react";
import firebaseImg from "../../assets/firebase-services.png"
import { AuthContext } from "../../Provider/AuthProvider";
const Home = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className=" w-3/12 mx-auto  py-52 relative flex">
            <span className="animate-ping absolute inline-flex h-[500px] w-[500px] rounded-full bg-sky-400 opacity-75"></span>

            {user ? <img className="relative inline-flex rounded-full h-[500px]  w-[500px]" src={user?.photoURL} alt="" /> : <img className="relative inline-flex rounded-full h-[500px]  w-[500px]" src={firebaseImg} alt="" />}

        </div>
    );
};

export default Home;