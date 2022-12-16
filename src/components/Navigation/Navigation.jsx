import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { NavWrapper, Nav, NavAuthWrapper } from './Navigation.styled';
import { ImUser, ImUsers, ImHome3, ImKey } from 'react-icons/im';
import UserMenu from '../UserMenu/UserMenu';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <NavWrapper>
        <Nav to="/">
          <ImHome3 size={20} />
          Home
        </Nav>
        {isLoggedIn ? (
          <Nav to="/contacts">
            <ImUsers size={20} />
            Contacts
          </Nav>
        ) : (
          <NavAuthWrapper>
            {!isLoggedIn && (
              <Nav to="/register">
                <ImUser size={20} />
                Register
              </Nav>
            )}
            {!isLoggedIn && (
              <Nav to="/login">
                <ImKey size={15} />
                Log In
              </Nav>
            )}
          </NavAuthWrapper>
        )}
      </NavWrapper>

      {isLoggedIn && <UserMenu />}
    </>
  );
};

export default Navigation;
