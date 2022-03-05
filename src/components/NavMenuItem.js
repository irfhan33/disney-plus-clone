import React from "react";
import styled from "styled-components";

function NavMenuItem({ image, title }) {
  return (
    <NavMenuItems>
      <a>
        <img src={image} alt="" />
        <span>{title}</span>
      </a>
    </NavMenuItems>
  );
}

export default NavMenuItem;

const NavMenuItems = styled.div`
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
      object-fit: contain;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.43px;
      position: relative;

      &:after {
        content: "";
        background: white;
        position: absolute;
        height: 2px;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left center;
        transition: all 0.3s;
      }
    }

    &:hover {
      span:after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`;
