import { useDispatch } from 'react-redux';
import { RegForm, RegLabel, RegInput, RegButton } from './RegisterForm.styled';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <RegForm autoComplete="off" onSubmit={handleSubmit}>
      <RegLabel>
        Username
        <RegInput type="text" name="name" required minLength={3} />
      </RegLabel>
      <RegLabel>
        Email
        <RegInput type="email" name="email" required />
      </RegLabel>
      <RegLabel>
        Password
        <RegInput type="password" name="password" minLength={7} required />
      </RegLabel>
      <RegButton type="submit">Register</RegButton>
    </RegForm>
  );
};
