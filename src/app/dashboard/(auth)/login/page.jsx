"use client";

import React from "react";
import styles from "./page.module.css";
import { signIn } from "next-auth/react";

const Login = () => {
   const handleSubmit = async (ev) => {
      ev.preventDefault();

      const email = ev.target[0].value;
      const password = ev.target[1].value;

      signIn("credentials", { email, password });
   };

   return (
      <div className={styles.container}>
         <form className={styles.form} onSubmit={handleSubmit}>
            <input type="email" placeholder="email" className={styles.input} required />
            <input type="password" placeholder="password" className={styles.input} required />
            <button className={styles.button}>Login</button>
         </form>
         <button type="button" className={styles.google_button} onClick={() => signIn("google")}>
            Sign in with Google
         </button>

         {/* <button onClick={() => signIn("google")} className={styles.google_button}>
            Login with Google
         </button> */}
      </div>
   );
};

export default Login;
