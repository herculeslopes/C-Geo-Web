import styled from "styled-components";

const StyledNavbar = styled.nav`
  display: flex;
  height: 70px;
  /* background-color: orange; */
  background-color: white;

  .logo {
    display: flex;
    margin: auto;
    /* background-color: grey; */
    gap: 10px;
    
    img {
      width: 50px;

    }

    h1 {
      margin: auto;
    }
  }
`

const Navbar = () => {
  return <StyledNavbar>
    <div className="logo">
      <img src="/logo.svg" alt="" />
      <h1>C-Geo</h1>
    </div>
  </StyledNavbar>
}

export default Navbar;