import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0 30px 30px 30px;
`;

export const Answers = styled.TouchableOpacity`
  /* margin: 20px; */
`;

export const AnswerButton = styled.TouchableOpacity`
  background: #fff;
  padding: 20px 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  elevation: 2;
`;

export const Question = styled.Text`
  text-align: center;
  font-size: 25px;
  color: #9483d7;
  font-weight: bold;
`;

export const AnswerText = styled.Text`
  text-align: center;
  color: #9483d7;
`;

export const Restult = styled.Text`
  text-align: center;
  font-size: 25px;
  color: #9483d7;
  font-weight: bold;
`;

export const PaintImage = styled.Image`
  /* flex: 1; */
  width: 100%;
  height: 200px;
  margin: 20px 0;
  border-radius: 15px;
`;

export const AnswersPage = styled.TouchableOpacity`
  background: #c299fc;
  padding: 20px 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

export const AnswerContainer = styled.View`
  /* margin: 0 auto; */
  flex: 1;
  justify-content: center;
`;

export const AnswerContainerText = styled.Text`
  width: 200px;
  text-align: center;
  background-color: #fff;
  elevation: 2;
  color: #ee619d;
  font-weight: 700;
  border: 1px solid #ee619d;
  border-radius: 5px;
  margin-top: -50px;
  padding: 20px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`;
