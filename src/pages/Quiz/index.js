import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import {
  Container,
  AnswerButton,
  Question,
  Answers,
  AnswerText,
  Restult,
  PaintImage,
} from './styles';

export default function Quiz({navigation}) {
  // const title = navigation.getParam('title');
  const questions = navigation.getParam('questions', []);
  const numberQuestions = navigation.getParam('questions', []).length;
  const [result, setResult] = useState(false);
  const [total, setTotal] = useState(0);

  const [numQuestion, setNumQuestion] = useState(0);

  function handleQuestionNext(question) {
    numQuestion !== numberQuestions - 1
      ? setNumQuestion(numQuestion + 1)
      : setResult(true);
    question.correct ? setTotal(total + 1) : null;
  }

  return (
    <Container>
      {result ? (
        <Restult>Seu resultado foi: {total}</Restult>
      ) : (
        <View>
          <PaintImage
            style={{width: '100%', height: 150}}
            resizeMode="contain"
            source={questions[numQuestion].image}
          />

          <Answers>
            {questions[numQuestion].answers.map(question => (
              <AnswerButton
                onPress={() => handleQuestionNext(question)}
                key={question.id}
                correct={question.correct}>
                <AnswerText>{question.text}</AnswerText>
              </AnswerButton>
            ))}
          </Answers>
        </View>
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  stretch: {
    width: 50,
    height: 200,
    resizeMode: 'stretch',
  },
});

Quiz.navigationOptions = ({navigation}) => ({
  title: `${navigation.state.params.title}`,
});
