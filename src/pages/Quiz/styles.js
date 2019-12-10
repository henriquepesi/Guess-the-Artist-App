import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  margin: 20px;
`;

export const Answers = styled.TouchableOpacity`
  /* margin: 20px; */
`;

export const AnswerButton = styled.TouchableOpacity`
  background: #c299fc;
  padding: 20px 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

export const Question = styled.Text`
  text-align: center;
  font-size: 25px;
  color: #9483d7;
  font-weight: bold;
`;

export const AnswerText = styled.Text`
  color: #fff;
`;

export const Restult = styled.Text`
  text-align: center;
  font-size: 25px;
  color: #9483d7;
  font-weight: bold;
`;

export const PaintImage = styled.Image`
  /* flex: 1; */
  margin: 20px 0;
`;

export const AnswersPage = styled.TouchableOpacity`
  background: #c299fc;
  padding: 20px 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;
