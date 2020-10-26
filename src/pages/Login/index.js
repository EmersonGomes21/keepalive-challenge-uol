import React, { useState } from 'react';
import userIcon from '~/assets/images/iconUser.svg';
import passwordIcon from '~/assets/images/icon-password.svg';
import logoCompasso from '~/assets/images/Logo-Compasso-Branco-hor-1.svg';
import { useHistory } from 'react-router-dom';

const Login = () => {

  const [users] = useState([
    { id: 1, user: 'email.usuario@compasso.com.br', password: 'keepalive' },
    { id: 2, user: 'emersongr7@gmail.com', password: 'emerson' },
    { id: 3, user: 'juliana.nakagawa@compasso.com.br', password: 'juliana' },
    { id: 4, user: 'juliana@', password: '123' }
  ]);


  //definem valores dos inputs através do Onchange
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('');

  //definem quando os inputs estão com focus
  const [userClassFocus, setUserClassFocus] = useState('desfocado');
  const [passwordClassFocus, setPasswordClassFocus] = useState('desfocado');

  //definem quando os campos dos usúarios estão em brancos
  const [erroUser, setErrorUser] = useState(false);
  const [erroPassword, setErrorPassword] = useState(false)


  //usado para exibir a mensagem de conexão realizada com sucesso
  const [connectionSuccessful, setConnectionSuccessful] = useState(false);

  //usado para setar o estado do erro após ter criado a conexão no localStorage
  const [error, setError] = useState(false);

  //redireciona
  let history = useHistory();

  const submit = () => {

    //Verifica se o input do usuário está vazio


    // função que verifica se dentro do array users existe os dados equivalentes aos dos values do form
    const isAuthenticated = users.some(data => data.user === user && data.password === password);

    if (isAuthenticated) {
      localStorage.setItem('@keepalive/connected', true);
     
      setConnectionSuccessful(true);
      setError(false);
      setTimeout(() => {
        isAuthenticated && history.push('/home');
         
      }, (1000 * 2)); //2s para

    }else {
      setError(true);
      setConnectionSuccessful(false);

    }

  }


  //erroUser || erroPassword ?

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
                <div className={`input-group ${erroUser ? 'error' : ''} ${userClassFocus}`}>
                  <input
                    type="email"
                    value={user}
                    placeholder="Usuário"
                    onBlur={() => setUserClassFocus(!user ? 'desfocado' : 'focado')}
                    onFocus={() => {
                      setErrorUser(false)
                      setUserClassFocus('focado')
                    }}

                    onChange={e => setUser(e.target.value)} />
                  <img src={userIcon} alt="User icon" />
                </div>

                <div className={`input-group ${erroPassword ? 'error' : ''} ${passwordClassFocus}`}>
                  <input
                    type="password"
                    value={password}
                    placeholder="Senha"
                    onBlur={() => setPasswordClassFocus(!password ? 'desfocado' : 'focado')}
                    onFocus={() => {
                      setErrorPassword(false)
                      setPasswordClassFocus('focado')
                    }}
                    onChange={e => setPassword(e.target.value)} />
                  <img src={passwordIcon} alt="User icon" />
                </div>
              </div>

              {error  ? (
                <p className="text-error">
                  Ops, usuário ou senha inválidos. <br />
                  Tente novamente!
                </p>
              )
              : "" }

              {

                connectionSuccessful ? (
                  <p className="text-success">
                    Login efetuado com sucesso. <br />
                  Aguarde o redirecionamento!
                  </p>
                )
                  : ""}

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
