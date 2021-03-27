import styled from 'styled-components';

export const Container = styled.View`
  padding: 10px;
  background: #0a4bf1;
  margin-top: 260px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  font-size: 12px;
`;
