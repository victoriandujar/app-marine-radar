import styled from 'styled-components';

export const Container = styled.View`
  padding: 10px;
  background: pink;
  margin-top: 250px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MenuIcon = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuText = styled.Text`
  font-weight: bold;
  color: #fff;
`;
