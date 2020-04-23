import React, { useState } from "react";
import styled from "@emotion/styled";
import PropTypes from 'prop-types'
import { getDifferenceYear, calculateBrand, obtainPlan } from "../Helper";

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;
const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
  margin-top: 2rem;

  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = ({saveResume, saveLoading}) => {
  const [data, saveData] = useState({
    brand: "",
    year: "",
    plan: "",
  });

  const [error, saveError] = useState(false);

  //Extraer los valores del state
  const { brand, year, plan } = data;

  //Leer los datos del formulario y colocarlos en el state
  const getInformation = (e) => {
    saveData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  //Cuando el usuario presiona submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (brand.trim() === "" || year.trim() === "" || plan.trim() === "") {
      saveError(true);
      return;
    }
    saveError(false);

    //Base de 2000
    let result = 2000;
    //Obtener la diferencia de años
    const difference = getDifferenceYear(year);

    //Por cada año hay que restar el 3% del valor
    result -= (difference * 3 * result) / 100;

    //Americano 15%, Asiatico 5%, Europeo 30%
    result = calculateBrand(brand) * result;
    

    //Básico aumenta 20%, completo 50%
   const increasePlan= obtainPlan(plan)
   result = parseFloat(increasePlan*result).toFixed(2);

  saveLoading(true)

  setTimeout(() => {

    //Elimina spinner
    saveLoading(false)

  //Pasa la info al componente principal
   saveResume({
     quotation: Number(result),
     data
   })
  },3000)
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error>Todos los campos son obligatorios</Error> : null}
      <Field>
        <Label>Marca</Label>
        <Select name="brand" value={brand} onChange={getInformation}>
          <option value="">--Seleccione--</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiático</option>
        </Select>
      </Field>

      <Field>
        <Label>Año</Label>
        <Select name="year" value={year} onChange={getInformation}>
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Field>

      <Field>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basic"
          checked={plan === "basic"}
          onChange={getInformation}
        />
        Básico
        <InputRadio
          type="radio"
          name="plan"
          value="complete"
          checked={plan === "complete"}
          onChange={getInformation}
        />
        Completo
      </Field>
      <Button type="submit">Cotizar</Button>
    </form>
  );
};

Form.propTypes={
  saveResume: PropTypes.func.isRequired,
  saveLoading: PropTypes.func.isRequired
}

export default Form;