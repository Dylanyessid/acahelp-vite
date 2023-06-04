import React from 'react'

const LoginForm = () => {
  return (
    <form>
      <input type="email" />
      <input type="password" />
      <button>Entrar</button>
      <p>¿No tienes una cuenta? ¡Regístrate ahora!</p>
      <button>Registrarse</button>
    </form>
  )
}

export default LoginForm