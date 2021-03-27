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

export const ContainerSpecies = styled.View`
  width: 270px;
  height: 70px;
  margin-top: 20px;
`;

export const Background = styled.Image`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 8px;
  background: #25c1af;
  width: 100%;
  height: 100%;
`;

export const ContentSpecies = styled.View`
  padding: 5px 40px 10px 30px;
`;

export const SubTitleSpecies = styled.Text`
  font-size: 10px;
  color: #fff;
  position: relative;
  top: 5px;
`;

export const TextSpecies = styled.Text`
  font-size: 24px;
  color: #fff;
  font-weight: bold;
`;

export const LinkSpecies = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonSpecies = styled.Text`
  background: #fff;
  padding: 3px;
  border-radius: 3px;
  width: 20px;
  position: relative;
  left: 20px;
`;
