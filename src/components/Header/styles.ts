import styled, { css } from 'styled-components/native';

type MainContainerProps = {
  routeName: string;
};

export const MainContainer = styled.View<MainContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
`;

export const NavigateContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

interface ImagesProps {
  height: number;
  width: number;
}

export const Logo = styled.Image<ImagesProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;

export const Avatar = styled.Image<ImagesProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
