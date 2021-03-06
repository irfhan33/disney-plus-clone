import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import { db } from "../firebase";
import ImgSlider from "./ImgSlider";
import Movies from "./Movies";
import Viewers from "./Viewers";
import { useNavigate } from "react-router-dom";
function Home() {
  const dispatch = useDispatch();
  const user = useSelector(selectUserName);
  const navigate = useNavigate();

  useEffect(async () => {
    if (!user) navigate("/login");

    db.collection("movies").onSnapshot((snapshot) => {
      let tempMovies = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      dispatch(setMovies(tempMovies));
    });
  }, []);
  return (
    <div>
      <Container>
        <ImgSlider />
        <Viewers />
        <Movies />
      </Container>
    </div>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
  padding-bottom: 50px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url("images/home-background.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    z-index: -1;
  }
`;
