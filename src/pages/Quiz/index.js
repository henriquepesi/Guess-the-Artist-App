import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';

import {
  Container,
  AnswerButton,
  Answers,
  AnswerText,
  Restult,
  PaintImage,
  AnswersPage,
} from './styles';
import {FlatList} from 'react-native-gesture-handler';

export default function Quiz({navigation}) {
  // const title = navigation.getParam('title');
  const questions = navigation.getParam('questions', []);
  const numberQuestions = navigation.getParam('questions', []).length;
  const [result, setResult] = useState(false);
  const [total, setTotal] = useState(0);
  const [answers, setAnwers] = useState([]);

  const [numQuestion, setNumQuestion] = useState(0);

  function handleQuestionNext(question) {
    numQuestion !== numberQuestions - 1
      ? setNumQuestion(numQuestion + 1)
      : setResult(true);
    question.correct
      ? setTotal(total + 1) || setAnwers([...answers, question])
      : null;
  }

  return (
    <Container>
      {result ? (
        <>
          <Restult>Seu resultado foi: {total}</Restult>
          {questions.map(question => {
            <Image
              style={{width: '100%', height: 150}}
              resizeMode="contain"
              source={question.image}
            />;
          })}

          {/*Retorna todos  os itens*/}
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={questions}
            renderItem={({item, index}) => (
              <View>
                <Image
                  style={{width: '100%', height: 150}}
                  resizeMode="contain"
                  source={item.image}
                />
                <Text>{item.answers[index].text}</Text>
              </View>
            )}
          />

          {/* Retorna os itens certos */}
          <FlatList
            data={answers}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View>
                <Text>{item.text}</Text>
              </View>
            )}
          />

          {/* Vai pra pagina conferir respostas */}

          <View>
            <AnswersPage>
              <AnswerText
                onPress={() => {
                  navigation.navigate('Answers');
                }}
                color="#fff">
                Ver Respostas
              </AnswerText>
            </AnswersPage>
          </View>
        </>
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

Quiz.navigationOptions = ({navigation}) => ({
  title: `${navigation.state.params.title}`,
});
