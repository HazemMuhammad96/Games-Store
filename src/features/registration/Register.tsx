import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../data/api/axiosInstance";
import styles from "./Register.module.css";

export default function Register() {
    const [email, setUsernameReg] = useState("");
    const [password, setPasswordReg] = useState("");
    const [name, setName] = useState("");


    const navigate = useNavigate();


    async function onRegister() {
        try {
            const res = await axiosInstance.post("users", { name, email, password })
            console.log(res);

            navigate("/login");
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Registiration</h1>
            <div className={styles.username}>
                <label className={styles.label}>Name</label>
                <input placeholder="Enter Your Name"
                    className={styles.input}
                    type="text"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
            </div>
            <div className={styles.userName}>
                <label className={styles.label} htmlFor="">
                    Email
                </label>
                <input placeholder="Enter Email"
                    className={styles.input}
                    type="text"
                    onChange={(e) => {
                        setUsernameReg(e.target.value);
                    }}
                />
            </div>
            <div className={styles.username}>
                <label className={styles.label}>Password</label>
                <input placeholder="Enter Password"
                    className={styles.input}
                    type="password"
                    onChange={(e) => {
                        setPasswordReg(e.target.value);
                    }}
                />
            </div>
            <button className={styles.button} onClick={onRegister}>Register</button>
        </div>
    );
};
