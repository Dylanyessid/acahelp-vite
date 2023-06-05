import { loginRequest } from "../api/login.requests";
import styles from "../styles/LoginForm.module.css";
import { MouseEventHandler, useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async() => {
     try{
      const a = await loginRequest({
        email,
        password
      })
     }catch (error:any){
        console.log(error.response);
     }
     
  };

  return (
    <form className="">
      <h4>Ingresa los datos de tu cuenta para iniciar sesión, por favor.</h4>
      <input
        type="email"
        className={styles.textInputs}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input type="password" className={styles.textInputs}   onChange={(e) => setPassword(e.target.value)}/>
      <button type="submit" className={styles.loginBtn} onClick={handleLogin}>
        Entrar
      </button>
      <h4>¿No tienes una cuenta? ¡Regístrate ahora!</h4>
      <button className={styles.registerBtn}>Registrarse</button>
    </form>
  );
};

export default LoginForm;
