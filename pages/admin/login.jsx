import { useState } from "react";
import styles from "../../styles/Login.module.css";
import { useRouter } from "next/router";
const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();
  const handleClick = async () => {
    try {
      const res = await fetch(`${process.env.SERVER_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          withCredentials: true,
        },
        body: JSON.stringify({ username, password }),
      });
      console.log("reqseting", res);
      if (res.status === 200) {
        console.log("returned true 200");
        router.push("/admin");
      } else {
        setError(true);
      }
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Admin Dashboard</h1>
        <input
          placeholder="username"
          type="text"
          className={styles.input}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.button} onClick={handleClick}>
          Sign in
        </button>
        {error && <span className={styles.error}>Wrong Credentials!</span>}
      </div>
    </div>
  );
};
export default Login;
