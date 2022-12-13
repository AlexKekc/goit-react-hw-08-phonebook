import { useSelector } from 'react-redux';
import { selectContactCount } from 'redux/selectors';
import { CounterContainer, CounterItem } from './ContactCounter.styled';

export const ContactCounter = () => {
  const { general, favourite } = useSelector(selectContactCount);

  return (
    <CounterContainer>
      <CounterItem>General: {general}</CounterItem>
      <CounterItem>Favourite: {favourite}</CounterItem>
    </CounterContainer>
  );
};
