import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import {
  UserMenuContainer,
  UserMenuText,
  UserMenuButton,
} from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <UserMenuContainer>
      <UserMenuText>Welcome in your Phonebook, {user.name}</UserMenuText>
      <UserMenuButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </UserMenuButton>
    </UserMenuContainer>
  );
};

export default UserMenu;
