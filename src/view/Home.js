import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../components/firebase/firebase";

const Home = () => {
    const [user] = useAuthState(auth);
    return <div > { JSON.stringify(user) } < /div>;
};

export default Home;