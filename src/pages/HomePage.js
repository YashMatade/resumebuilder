import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeContainer = styled.div`
  text-align: center;
  padding: 50px;
`;

const HomePage = () => {
  return (
    <HomeContainer>
      <h1>Welcome to the Interactive Resume Builder</h1>
      <Link to="/builder">
        <button>Get Started</button>
      </Link>
    </HomeContainer>
  );
};

export default HomePage;
