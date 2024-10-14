
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANHHuJXuJYFD46I008yA97RhN7jWvBilY",
  authDomain: "fir-prac-60c55.firebaseapp.com",
  projectId: "fir-prac-60c55",
  storageBucket: "fir-prac-60c55.appspot.com",
  messagingSenderId: "707295607814",
  appId: "1:707295607814:web:945b26e04ee32a097e5787"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;