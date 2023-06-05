import styles from "./styles/LoginPage.module.css"
import LoginForm from '../components/Forms/LoginForm'

const Login = () => {
  return (
    <main>
    <h1 className={styles.h1}>AcaHelp</h1>
     <LoginForm/> 
    </main>
  )
}

export default Login