import { FormEvent, useState } from 'react'
import styled from 'styled-components'

import {
  InputHTMLAttributes,
  ButtonHTMLAttributes,
  FormHTMLAttributes
} from 'react'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <StyledForm onSubmit={aoEnviarForm}>
      <StyledInput
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <StyledButton type="submit">Pesquisar</StyledButton>
    </StyledForm>
  )
}

const StyledForm = styled.form<FormHTMLAttributes<HTMLFormElement>>`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 16px;
  border-radius: 8px;
  background-color: var(--cor-secundaria);
`
const StyledInput = styled.input<InputHTMLAttributes<HTMLInputElement>>`
  flex: auto;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-size: 16px;
`

const StyledButton = styled.button<ButtonHTMLAttributes<HTMLButtonElement>>`
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
`

export default FormVagas
