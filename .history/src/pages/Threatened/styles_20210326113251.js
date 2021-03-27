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

export const ContainerThreatened = styled.View`
  width: 280px;
  height: 70px;
  margin-top: 20px;
`;
export const ImageThreatened = styled.Image`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 10px;
  background: #d43c3c;
  width: 100%;
  height: 100%;
`;
