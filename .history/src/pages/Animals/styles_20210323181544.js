import styled from 'styled-components';

export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

export const Container = styled.View`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
`;

export const TopContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #555454;
`;

export const Filter = styled.View`
  display: flex;
  min-width: 120px;
  background: pink;
  flex-direction: row;
  justify-content: space-between;
`;

export const TextFilter = styled.Text`
  font-size: 12px;
`;
