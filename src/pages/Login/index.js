import React, { useState } from 'react';
import userIcon from '~/assets/images/iconUser.svg';
import passwordIcon from '~/assets/images/icon-password.svg';
import logoCompasso from '~/assets/images/Logo-Compasso-Branco-hor-1.svg';
import {  useHistory } from 'react-router-dom';
const Login = () => {

  const [isConected, setIsConected] = useState(false);
  const [error, setError] = useState(false);
  const [users] = useState([
    { id: 1, user: 'email.usuario@compasso.com.br', password: 'keepalive' },
    { id: 2, user: 'emersongr7@gmail.com', password: 'emerson' },
    { id: 3, user: 'juliana.nakagawa@compasso.com.br', password: 'juliana' },
    { id: 4, user: 'juliana@', password: '123' },
  ]);

  const [inputUsuario, setInputUsuario] = useState('');
  const [inputSenha, setInputSenha] = useState('');

  let history = useHistory();

  const submit = () => {
    const isAuthenticated = users.some(data => data.user === inputUsuario && data.password === inputSenha);

    if (isAuthenticated) {
      setError(false);
      setIsConected(true);
      localStorage.setItem('@keepalive/connected', true);
      setTimeout(() => {
        history.push('/home/');
      }, (1000 * 4));
     
    }
    else {
      setError(true);
    }

  }

  return (    
    <div className="container">
      <div className="col">
        <div className="content">
          <div className="heading-container">
            <p className="heading-title">Olá,</p>
            <p>
              Para continuar navegando de forma
              <br /> segura, efetue o login na rede.
            </p>
          </div>

          <div className="form-container">
            <h1 className="title">Login</h1>
            <form>
              <div className="input-container">
                <div className={`input-group ${error === true ? 'error' : ''}`}>
                  <input type="email" placeholder="Usuário" onChange={e => setInputUsuario(e.target.value)} />
                  <img src={userIcon} alt="User icon" />
                </div>

                <div className={`input-group ${error === true ? 'error' : ''}`}>
                  <input type="password" placeholder="Senha" onChange={e => setInputSenha(e.target.value)} />
                  <img src={passwordIcon} alt="User icon" />
                </div>
              </div>

              {error === true && (
                <p className="text-error">
                  Ops, usuário ou senha inválidos. <br />
                  Tente novamente!
                </p>
              )}

              {

               isConected  && (
                <p className="text-success">
                  Login efetuado com sucesso. <br />
                  Aguarde o redirecionamento!
                </p>
              )

              }

              <button onClick={submit} type="button" className="btn-primary">
                Continuar
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="col background-login">
        <img src={logoCompasso} alt="logo compasso" />
      </div>
    </div>  




)

 
}

export default Login;
