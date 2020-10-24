import React, { useState } from 'react';
import userIcon from '~/assets/images/iconUser.svg';
import passwordIcon from '~/assets/images/icon-password.svg';
import logoCompasso from '~/assets/images/Logo-Compasso-Branco-hor-1.svg';

const Login = () => {
  const [error, setError] = useState(true);

  const submit = () => {
    setError((prev) => !prev);
  };

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
                <div className={`input-group ${error ? 'error' : ''}`}>
                  <input type="text" placeholder="Usuário" />
                  <img src={userIcon} alt="User icon" />
                </div>

                <div className={`input-group ${error ? 'error' : ''}`}>
                  <input type="password" placeholder="Senha" />
                  <img src={passwordIcon} alt="User icon" />
                </div>
              </div>

              {error && (
                <p className="text-error">
                  Ops, usuário ou senha inválidos. <br />
                  Tente novamente!
                </p>
              )}

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
  );
};

export default Login;
