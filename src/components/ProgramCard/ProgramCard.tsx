import styled from 'styled-components';
import TravelProgramItem from './ProgramCardItem';

const ProgrmaCard = () => {
  return (
    <Container>
      <TravelProgramItem />
      <TravelProgramItem />
      <TravelProgramItem />
      <TravelProgramItem />
      <TravelProgramItem />
      <TravelProgramItem />
      <TravelProgramItem />
    </Container>
  );
};

const Container = styled.div`
  width: inherit;
  display: flex;
  flex-drection: row;
  flex-wrap: wrap;
  gap: 64px 36px;
  padding-bottom: 36px;
`;

export default ProgrmaCard;
