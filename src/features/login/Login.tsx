import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import axiosInstance from "../../data/api/axiosInstance";

import styles from "./Login.module.css";
export default function Login() {
    const [email, setUsernameSignin] = useState("");
    const [password, setPasswordSignin] = useState("");

    const navigate = useNavigate();
    async function onLogin() {
        try {
            const res = await axiosInstance.post("signIn", { email, password })
            console.log(res);

            navigate("/cart");
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Sign in</h1>
            <div className={styles.userName}>
                <label className={styles.label} htmlFor="">
                    Username
                </label>
                <input placeholder="Enter Username"
                    className={styles.input}
                    type="text"
                    onChange={(e) => {
                        setUsernameSignin(e.target.value);
                    }}
                />
            </div>
            <div className={styles.username}>
                <label className={styles.label}>Password</label>
                <input placeholder="Enter Password"
                    className={styles.input}
                    type="password"
                    onChange={(e) => {
                        setPasswordSignin(e.target.value);
                    }}
                />
            </div>
            <button className={styles.button}
                onClick={onLogin}
            >Login</button>
            <h4>Dont have account?  <Link to="/register">Register</Link></h4>
        </div>
    );
};
