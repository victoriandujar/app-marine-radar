import styled from 'styled-components';

export const Container = styled.View`
  padding: 8px;
  background: #0a4bf1;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const MenuIcon = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuText = styled.Text`
  font-weight: bold;
  color: #fff;
  font-size: 10px;
`;
