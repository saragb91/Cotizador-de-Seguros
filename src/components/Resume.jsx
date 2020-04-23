import React from "react";
import styled from "@emotion/styled";
import PropTypes from 'prop-types'
import {firstUpper} from '../Helper'

const ContainerResume = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;

const Resume = ({ data }) => {
  const { brand, year, plan } = data;

  if (brand === "" || year === "" || plan === "") return null;

  return (
    <ContainerResume>
      <h2>Resumen de cotización</h2>
      <ul>
        <li>Marca: {firstUpper(brand)}</li>
        <li>Plan: {firstUpper(plan)}</li>
        <li>Año: {year}</li>
      </ul>
    </ContainerResume>
  );
};

Resume.propTypes={
  data: PropTypes.object.isRequired,
}

export default Resume;
