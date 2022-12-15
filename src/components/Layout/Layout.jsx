import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Footer, PageContainer } from './Layout.styled';
import Navigation from '../Navigation/Navigation';

// import { Dna } from 'react-loader-spinner';

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
        <p>
          Created by
          <a href="https://github.com/AlexKekc"> &copy; AlexKekc</a> as homework
          for courses GoIt
        </p>
      </Footer>
    </Container>
  );
};

export default Layout;
