import React from "react";
import propTypes from 'prop-types'
import styled from "@emotion/styled";

const ContainerHeader = styled.header`
  background-color: #26c6da;
  padding: 10px;
  font-weight: bold;
  color: #ffffff;
`;

const TextHeader = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-family: "Slabo 27px", serif;
  text-align: center;
`;

const Header = ({ title }) => {
  return (
    <ContainerHeader>
      <TextHeader>{title}</TextHeader>
    </ContainerHeader>
  );
};


Header.propTypes={
  title: propTypes.string.isRequired,
}


export default Header;
