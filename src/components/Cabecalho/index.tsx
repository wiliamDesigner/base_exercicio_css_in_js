import styled from 'styled-components'

const StyleHeader=styled.header `
background-color: var(--cor-secundaria);
color: var(--cor-principal);
text-align: center;
  padding: 24px 0;
`

const Cabecalho = () => (
  <StyleHeader>
    <h1>EBAC Jobs</h1>
  </StyleHeader>
)


export default Cabecalho
