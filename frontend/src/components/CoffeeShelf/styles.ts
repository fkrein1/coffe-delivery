import styled from 'styled-components';

export const ShelfContainer = styled.section`
  margin-inline: 160px;
  margin-top: 32px;
  margin-bottom: 54px;
  h2 {
    margin-bottom: 32px;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
  @media (max-width: 768px) {
    margin-inline: 80px;
  }
`;

export const ShelfGrid = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 32px;

  @media (max-width: 1250px) {
    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr 1fr;
      @media (max-width: 640px) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
`;
