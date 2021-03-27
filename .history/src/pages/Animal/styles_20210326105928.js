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
  height: 200px;
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
  top: 20px;
`;

export const BackgroundText = styled.View`
  background: pink;
  height: 200px;

  position: relative;
  top: 40px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const TitleAnimal = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #555454;
`;

export const ContainerTitle = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 20px 5px 20px;
`;

export const ContainerPlace = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 20px 0 20px;
`;

export const ContainerAboutAnimal = styled.View`
  border: 1px solid #000;
`;

export const TextAboutAnimal = styled.Text`
  font-size: 12px;
`;
