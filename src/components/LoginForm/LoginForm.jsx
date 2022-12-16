import { useDispatch, useSelector } from 'react-redux';
import {
  LogInForm,
  LogInLabel,
  LogInInput,
  LogInButton,
} from './LoginForm.styled';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const errorLogin = useSelector(state => state.error);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <>
      {errorLogin && <div>Error login</div>}
      <LogInForm autoComplete="off" onSubmit={handleSubmit}>
        <LogInLabel>
          Email
          <LogInInput type="email" name="email" required />
        </LogInLabel>
        <LogInLabel>
          Password
          <LogInInput type="password" name="password" required />
        </LogInLabel>
        <LogInButton type="submit">Log In</LogInButton>
      </LogInForm>
    </>
  );
};
