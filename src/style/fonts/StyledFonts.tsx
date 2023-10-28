import { styled } from 'styled-components';

interface PropTypes {
  $fontColor: string;
}

export const B1 = styled.pre<PropTypes>`
  font-family: 'SUIT-Medium';
  font-size: 64px;
  line-height: 160%;
  color: ${({ $fontColor }) => $fontColor};
`;

export const B2 = styled.pre<PropTypes>`
  font-family: 'SUIT-Medium';
  font-size: 54px;
  line-height: 160%;
  color: ${({ $fontColor }) => $fontColor};
`;

export const B3 = styled.pre<PropTypes>`
  font-family: 'SUIT-Regular';
  font-size: 44px;
  line-height: 160%;
  color: ${({ $fontColor }) => $fontColor};
`;

export const B4 = styled.pre<PropTypes>`
  font-family: 'SUIT-Regular';
  font-size: 34px;
  line-height: 160%; /* 19.2px */
  color: ${({ $fontColor }) => $fontColor};
`;

export const B5 = styled.pre<PropTypes>`
  font-family: 'SUIT-Regular';
  font-size: 28px;
  line-height: 160%; /* 19.2px */
  color: ${({ $fontColor }) => $fontColor};
`;

export const H1 = styled.pre<PropTypes>`
  font-family: 'SUIT-ExtraBold';
  font-size: 104px;
  line-height: 140%; /* 19.2px */
  color: ${({ $fontColor }) => $fontColor};
`;

export const H2 = styled.pre<PropTypes>`
  font-family: 'SUIT-ExtraBold';
  font-size: 94px;
  line-height: 140%; /* 19.2px */
  color: ${({ $fontColor }) => $fontColor};
`;

export const H3 = styled.pre<PropTypes>`
  font-family: 'SUIT-Bold';
  font-size: 84px;
  line-height: 140%; /* 19.2px */
  color: ${({ $fontColor }) => $fontColor};
`;
