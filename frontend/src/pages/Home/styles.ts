import styled, { css } from 'styled-components';
import backgroundImage from '../../assets/background.svg';

export const HomeContainer = styled.section`

`;

export const HeroContainer = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 56px;
  padding-block: 92px;
  padding-inline: 160px;
  backdrop-filter: blur(80px);
  background-image: url(${backgroundImage});
  background-size: 100% auto;
  @media (max-width: 768px) {
    padding-block: 46px;
    padding-inline: 40px;
    background-image: none;
    backdrop-filter: none;
  }
`

export const HeroImage = styled.div`
  flex: 1 1 45%;
  img {
    width: 100%;
  }
  @media (max-width: 1024px) {
    display: none
  }
`;

export const BenefitsContainer = styled.div`
  flex: 1 1 55%;
  h1 {
    font-weight: 800;
    font-size: 48px;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 16px;
    
  }
  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 32px;
    }
  }

`;

export const BenefitsList = styled.ul`
  margin-top: 65px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  line-height: 130%;
  gap: 40px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 20px;
    

  }
`;

const iconsCSS = css`
  display: flex;
  align-items: center;
  gap: 12px;
  span {
    word-break: break-word;
  }
  div {
    display: flex;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  svg {
    color: ${(props) => props.theme.white};
  }
`;

export const ShopIcon = styled.li`
  ${iconsCSS}
  div {
    background: ${(props) => props.theme['yellow-dark']};
  }
`;

export const PackageIcon = styled.li`
  ${iconsCSS}
  div {
    background: ${(props) => props.theme['base-text']};
  }
`;

export const TimeIcon = styled.li`
  ${iconsCSS}
  div {
    background: ${(props) => props.theme.yellow};
  }
`;

export const CoffeeIcon = styled.li`
  ${iconsCSS}
  div {
    background: ${(props) => props.theme.purple};
  }
`;
