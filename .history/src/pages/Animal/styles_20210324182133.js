import styled from 'styled-components';

export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

export const Container = styled.View``;

export const ContainerAnimal = styled.View`
  width: 100%;
  height: 220px;
`;

export const ImageAnimal = styled.Image`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const HeaderAnimal = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  position: relative;
  bottom: 30px;
`;

export const BackButton = styled.Text`
  background: #fff;
  padding: 3px;
  border-radius: 3px;
  width: 20px;
  position: relative;
  left: 20px;
`;
