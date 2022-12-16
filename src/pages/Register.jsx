import { RegisterForm } from '../components/RegisterForm/RegisterForm';
import {
  RegisterContainer,
  RegisterTitle,
  RegisterText,
  RegisterLink,
} from './Register.styled';

const Register = () => {
  return (
    <RegisterContainer>
      <RegisterTitle>Registration</RegisterTitle>
      <RegisterForm />
      <RegisterText className="TextAuth">
        Already registered? <RegisterLink to="/login">Sign in</RegisterLink>
      </RegisterText>
    </RegisterContainer>
  );
};

export default Register;
