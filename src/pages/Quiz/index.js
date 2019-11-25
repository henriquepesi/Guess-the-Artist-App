import React from 'react';
import {Text} from 'react-native';

import {Container, AnswerButton, Answers, AnswerText} from './styles';

export default function Quiz({navigation}) {
  const title = navigation.getParam('title');
  const questions = navigation.getParam('questions', []);

  return (
    <Container>
      <Text>{title}</Text>
      <Text>{questions[0].question}</Text>
      <Answers>
        {questions[1].answers.map(question => (
          <AnswerButton key={question.id}>
            <AnswerText>{question.text}</AnswerText>
          </AnswerButton>
        ))}
      </Answers>
    </Container>
  );
}

Quiz.navigationOptions = ({navigation}) => ({
  title: `${navigation.state.params.title}`,
});
