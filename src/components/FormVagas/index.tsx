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
  display: flex;
  gap: 8px;
  background-color: #f8f9fa;
  padding: 16px;
  border-radius: 8px;
`

const StyledInput = styled.input<InputHTMLAttributes<HTMLInputElement>>`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`

const StyledButton = styled.button<ButtonHTMLAttributes<HTMLButtonElement>>`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`

export default FormVagas
