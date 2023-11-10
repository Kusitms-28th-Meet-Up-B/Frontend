import { LOCATION_LIST } from '@/constants/Register';
import styled from 'styled-components';

interface LocationDropdownProps {
  dropdownTitle: string;
  onDropdownClick: (location: string) => void;
}

const LocationDropdown = ({
  dropdownTitle,
  onDropdownClick,
}: LocationDropdownProps) => {
  return (
    <Container>
      <span>{dropdownTitle}</span>
      <hr />
      {LOCATION_LIST.map(location => (
        <span
          key={location}
          className={`location-item ${dropdownTitle === location && 'active'}`}
          onClick={() => onDropdownClick(location)}
        >
          {location}
        </span>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 32px;
  border: 1px solid var(--color_gray500);
  padding: 20px 36px;

  display: flex;
  flex-direction: column;
  gap: 16px;
  position: absolute;

  z-index: 1;

  hr {
    border-width: 1px;
    border-style: dashed;
    border-color: var(--color_gray400);
  }

  span {
    color: var(--color_gray400);
    font-family: SUIT-Medium;
    font-size: 18px;
    font-style: normal;
    line-height: 140%;
  }

  .location-item {
    &:hover {
      color: var(--color_gray900);
    }
  }

  .active {
    color: var(--color_gray900);
  }
`;
export default LocationDropdown;
