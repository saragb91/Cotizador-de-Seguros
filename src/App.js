import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import styled from "@emotion/styled";
import Resume from "./components/Resume";
import Result from "./components/Result";
import Spinner from "./components/Spinner";


const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const ContainterForm = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {

  const [resume, saveResume] = useState({
    quotation: 0,
    data: {
      brand:'',
      year: '',
      plan:''
    }
  })

  const [loading, saveLoading] = useState(false)

  const {quotation, data} = resume
  return (
    <Container>
      <Header title="Cotizador de seguro" />

      <ContainterForm>
        <Form
        saveResume={saveResume}
        saveLoading={saveLoading}
        />
        {loading ?  <Spinner /> : null}
        <Resume
        data={data} />  
           {!loading ?     
       <Result 
       quotation={quotation} /> : null}
      </ContainterForm>
    </Container>
  );
}



export default App;
