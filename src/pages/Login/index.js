import React, { useState } from 'react';
import IconUser from '../../assets/images/iconUser.svg';
import IconPassword from '../../assets/images/icon-password.svg';
import LogoCompasso from '../../assets/images/Logo-Compasso-Branco-hor-1.svg';
import {
  Container,
  Left,
  RightSide,
  ContainerTitle,
  Form,
  Background,
  Content,
} from './styles';

function initialState() {
  return { user: '', password: '' };
}

const Login = () => {
  const [values, setValues] = useState(initialState);

  function onChange(event) {
    const { value, name } = event.target;
    setValues({
      /** ...values, */
      [name]: value,
    });
  }
  return (
    <Container>
      <Left>
        <Content>
          <ContainerTitle>
            <h1>Olá,</h1>
            <h4>
              Para continuar navegando de forma segura, efetue o login na rede.
            </h4>
          </ContainerTitle>
          <Form>
            <h1>Login</h1>
            <main>
              <section className="usuario">
                <input
                  type="text"
                  name="usúario"
                  placeholder="Usúario"
                  onChange={onChange}
                  value={values.user}
                />
                <img src={IconUser} alt="icon user" />
              </section>

              <section className="senha">
                <input
                  type="password"
                  name="senha"
                  placeholder="Senha"
                  onChange={onChange}
                  value={values.password}
                />
                <img src={IconPassword} alt="icon user" />
              </section>

              <button type="button">Continuar</button>
            </main>
          </Form>
        </Content>
      </Left>
      <RightSide>
        <Background>
          <img src={LogoCompasso} alt="background" />
        </Background>
      </RightSide>
    </Container>
  );
};

export default Login;
