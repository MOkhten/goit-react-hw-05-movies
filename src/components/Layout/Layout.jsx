import {Header, Container, StyledLink } from './Layout.styled.js';

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
            </Container>
)
};

export default Layout;