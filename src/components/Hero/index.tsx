import styled from 'styled-components'

const Hero = () => (
  <StyledHeroForm>
    <div className="container">
      <StyledHeroText>
        As melhores vagas para tecnologia, design e artes visuais.
      </StyledHeroText>
    </div>
  </StyledHeroForm>
)

const StyledHeroForm = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--cor-principal);
    content: '';
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }
  @media (max-width: 425px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const StyledHeroText = styled.div`
  position: relative;
  color: #eee;
  font-family: Gloock, serif;
  font-size: 48px;
  text-align: center;

  @media (max-width: 425px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export default Hero
