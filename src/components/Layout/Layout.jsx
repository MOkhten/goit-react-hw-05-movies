import { Header, Container, StyledLink } from './Layout.styled.js';
import { Outlet } from 'react-router-dom';
import { Suspense } from "react";
import Loader from 'components/Loader/Loader.js';


const Layout = () => {

    return (
      <Container>
        <Header>
     <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
                
          </nav>
        </Header>
         <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
            </Container>
)
};

export default Layout;