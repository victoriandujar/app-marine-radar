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
  flex-direction: row;
  justify-content: space-around;
`;

export const TextFilter = styled.Text`
  font-size: 12px;
  color: #aeaeae;
`;

export const ContainerWhales = styled.View`
  width: 280px;
  height: 110px;
  margin-top: 15px;
`;

export const ImageWhales = styled.Image`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 10px;
  background: #25c1af;
  width: 100%;
  height: 100%;
`;

export const ContentWhales = styled.View`
  padding: 10px 40px 10px 40px;
`;

export const TextWhales = styled.Text`
  font-size: 30px;
  color: #fff;
  font-weight: bold;
`;

export const TextWhalesClass = styled.Text`
  font-size: 12px;
  color: #fff;
`;

export const ButtonWhales = styled.Text`
  background: #fff;
  padding: 3px;
  border-radius: 3px;
  width: 20px;
  margin-top: 10px;
`;
