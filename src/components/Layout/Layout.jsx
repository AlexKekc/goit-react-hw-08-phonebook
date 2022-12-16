import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  Footer,
  PageContainer,
  FooterText,
  FooterLink,
} from './Layout.styled';
import Navigation from '../Navigation/Navigation';

const Layout = () => {
  return (
    <Container>
      <Header>
        <Navigation />
      </Header>

      <PageContainer>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </PageContainer>

      <Footer>
        <FooterText>
          Created by{' '}
          <FooterLink href="https://github.com/AlexKekc">AlexKekc</FooterLink>
        </FooterText>
      </Footer>
    </Container>
  );
};

export default Layout;
