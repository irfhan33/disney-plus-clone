import React from "react";
import styled from "styled-components";
import NavMenuItem from "./NavMenuItem";
function Navbar() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <NavMenuItem title="HOME" image="/images/home-icon.svg" />
        <NavMenuItem title="SEARCH" image="/images/search-icon.svg" />
        <NavMenuItem title="WATCHLIST" image="/images/watchlist-icon.svg" />
        <NavMenuItem title="ORIGINIALS" image="/images/original-icon.svg" />
        <NavMenuItem title="MOVIES" image="/images/movie-icon.svg" />
        <NavMenuItem title="SERIES" image="/images/series-icon.svg" />
      </NavMenu>
      <UserImg src="https://w0.peakpx.com/wallpaper/120/520/HD-wallpaper-jay-jo-flash-graphy-manhwa-wind-breaker.jpg" />
    </Nav>
  );
}

export default Navbar;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  padding: 0 36px;
  align-items: center;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 30px;
`;

const UserImg = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  object-fit: cover;
`;
