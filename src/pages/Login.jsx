import { LoginForm } from '../components/LoginForm/LoginForm';
import {
  LogInContainer,
  LogInTitle,
  LogInText,
  LogInLink,
} from './Login.styled';

const Login = () => {
  return (
    <LogInContainer>
      <LogInTitle>Log In</LogInTitle>
      <LoginForm />
      <LogInText>
        Don't have an account yet? <LogInLink to="/register">Sign up</LogInLink>
      </LogInText>
    </LogInContainer>
  );
};

export default Login;
