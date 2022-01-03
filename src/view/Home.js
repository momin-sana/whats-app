import React, { useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "../components/ChatMessage";
import { auth, db, projectStorage } from "../components/firebase/firebase";
import firebase from "firebase";

const Home = () => {
        const [user] = useAuthState(auth);
        const scrollWindow = useRef();
        const [file, setFile] = useState(null);
        const [fieldValue, setFieldValue] = useState("");
        const [progress, setProgress] = useState(0);
        const [fireError, setFireError] = useState(null);
        const [url, setUrl] = useState(null);
        const [error, setError] = useState("");
        const messags = db.collection("messages");
        const query = messags.orderBy("createdAt").limit(25);
        const [messages] = useCollectionData(query, { idField: "id" });

        const types = ["image/png", "image/jpeg"];

        const handleImage = (e) => {
            let selected = e.target.files[0];
            if (selected && types.includes(selected.type)) {
                setFile(selected);
                setError("");
            } else {
                setFile(null);
                setError("Format not acceptable");
            }
        };

        const uploadImage = async(e) => {
            const { uid, photoURL } = auth.currentUser;
            e.preventDefault();
            const storageRef = projectStorage.ref(file.name);
            storageRef.put(file).on("state_changed", (snap) => {
                let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
                setProgress(percentage);
            }, (err) => {
                setFireError(err);
            }, async() => {
                const url = await storageRef.getDownloadURL();
                await messags.add({
                    text: "",
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                    uid,
                    photoURL,
                    photo: url
                });
            });
        };

        const sendMessage = async(e) => {
            e.preventDefault();
            const { uid, photoURL } = auth.currentUser;
            await messags.add({
                text: fieldValue,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                uid,
                photoURL,
            });
            setFieldValue("");
            scrollWindow.current.scrollIntoView({ behavior: "smooth" });
        };

        return ( <
                >
                <
                main > {
                    messages &&
                    messages.map((msg) => < ChatMessage key = { msg.id }
                        messages = { msg }
                        />)} <
                        span ref = { scrollWindow } > < /span> <
                        /main> <
                        form onSubmit = { sendMessage } >
                        <
                        input value = { fieldValue }
                        onChange = {
                            (e) => setFieldValue(e.target.value) }
                        placeholder = "Enter Your Text" /
                        >
                        <
                        input type = "file"
                        onChange = { handleImage }
                        /> <
                        button onClick = { uploadImage } > Post Image < /button> <
                        button type = "submit" > submit < /button> <
                        /form> <
                        />
                    );
                };

                export default Home;