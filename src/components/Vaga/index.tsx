import styled from 'styled-components'
import { LiHTMLAttributes } from 'react'
type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}
const Vaga = (props: Props) => (
  <StyledVaga>
    <StyledVagaTitulo>{props.titulo}</StyledVagaTitulo>
    <StyledFormulario>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário:
        {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </StyledFormulario>
    <StyledFormularioa>Ver detalhes e candidatar-se</StyledFormularioa>
  </StyledVaga>
)

const StyledVaga = styled.li<LiHTMLAttributes<HTMLLIElement>>`
  border: 1px solid var(--cor-principal);
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;
  &:hover {
    background-color: var(--cor-principal);
    color: var(--cor-secundaria);
  }`
const StyledVagaTitulo = styled.h3<React.HTMLAttributes<HTMLHeadingElement>>`
  font-weight: bold;
  margin-bottom: 16px;
`
const StyledFormulario = styled.ul<React.HTMLAttributes<HTMLUListElement>>`
  border-color: var(--cor-secundaria);
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`
const StyledFormularioa = styled.a<React.HTMLAttributes<HTMLAnchorElement>>`
  &:hover {
    border-color: var(--cor-principal);
    background-color: var(--cor-secundaria);
    color: var(--cor-principal);
  }`
export default Vaga
