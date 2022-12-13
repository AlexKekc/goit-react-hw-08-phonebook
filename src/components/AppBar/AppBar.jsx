import { StatusFilter } from '../StatusFilter/StatusFilter';
import { ContactCounter } from '../ContactCounter/ContactCounter';

import {
  AppBarHeader,
  ContactsSection,
  ContactsTitle,
  FilterSection,
  FilterTitle,
} from './AppBar.styled';

export const AppBar = () => {
  return (
    <AppBarHeader>
      <ContactsSection>
        <ContactsTitle>Contacts</ContactsTitle>
        <ContactCounter />
      </ContactsSection>
      <FilterSection>
        <FilterTitle>Filter by status</FilterTitle>
        <StatusFilter />
      </FilterSection>
    </AppBarHeader>
  );
};
