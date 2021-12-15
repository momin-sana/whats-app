import image from "../assets/Logo.png";
import { MenuIcon } from "@heroicons/react/outline";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../components/firebase/firebase"

function Header() {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault();

        auth
            .signInWithPopup(provider)
            .then(() => navigate("/channels"))
            .catch((error) => alert(error.message));
    };
    return ( <
        header className = "bg-discord_blue flex items-center justify-between py-4 px-6" >
        <
        a className = "flex"
        href = "/" >
        <
        img src = { image }
        width = "200"
        height = "100"
        className = "object-contain"
        alt = "logo" /
        >
        <
        /a> <
        div className = "hidden lg:flex space-x-6" >
        <
        a className = "link" > Download < /a> <
        a className = "link" > Why Discord < /a> <
        a className = "link" > Nitro < /a> <
        a className = "link" > Safety < /a> <
        a className = "link" > Support < /a> <
        /div> <
        div className = "flex" >
        <
        button onClick = {!user ? signIn : () => navigate("/channels") } > Login < /button> <
        /div> <
        /header>
    );
}

export default Header;