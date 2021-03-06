import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const TopicList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})`
  margin-top: 60px;
  padding: 0 20px;
`;

export const Block = styled.TouchableOpacity`
  flex: 1;
  background: #fff;
  height: 80px;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 5px;
  elevation: 2;
`;

export const BlockName = styled.Text`
  color: #ee619d;
  font-weight: 700;
  font-size: 15px;
`;
