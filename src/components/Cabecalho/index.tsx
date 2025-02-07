import styled from 'styled-components'

const StyleHeader = styled.header`
  background-color: white;
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 425px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const Cabecalho = () => (
  <StyleHeader>
    <h1>EBAC Jobs</h1>
  </StyleHeader>
)

export default Cabecalho
