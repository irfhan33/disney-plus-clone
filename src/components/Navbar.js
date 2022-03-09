import React, { useEffect } from "react";
import styled from "styled-components";
import NavMenuItem from "./NavMenuItem";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserName,
  selectUserPhoto,
  setSignOut,
  setUserLogin,
} from "../features/user/userSlice";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        navigate("/");
      }
    });
  }, []);
  const SignIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      dispatch(
        setUserLogin({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        })
      );
      navigate("/");
    });
  };

  const SignOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      navigate("/login");
    });
  };
  return (
    <Nav>
      <Link to="/">
        <Logo src="/images/logo.svg" />
      </Link>

      {userName ? (
        <>
          <NavMenu>
            <Link to="/">
              <NavMenuItem title="HOME" image="/images/home-icon.svg" />
            </Link>

            <NavMenuItem title="SEARCH" image="/images/search-icon.svg" />
            <NavMenuItem title="WATCHLIST" image="/images/watchlist-icon.svg" />
            <NavMenuItem title="ORIGINIALS" image="/images/original-icon.svg" />
            <NavMenuItem title="MOVIES" image="/images/movie-icon.svg" />
            <NavMenuItem title="SERIES" image="/images/series-icon.svg" />
          </NavMenu>
          <UserImg onClick={SignOut} src={userPhoto} />
        </>
      ) : (
        <LoginButton onClick={SignIn}>Login</LoginButton>
      )}
    </Nav>
  );
}

export default Navbar;

const Nav = styled.nav`
  padding: 0 calc(3.5vw + 5px);
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  overflow-x: hidden;
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
  cursor: pointer;
`;

const LoginButton = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid rgb(249, 249, 249);
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  color: white;
  margin-left: auto;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: rgb(249, 249, 249);
    color: rgb(0, 0, 0);
    border-color: transparent;
  }
`;
