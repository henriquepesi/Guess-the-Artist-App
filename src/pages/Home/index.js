import React from 'react';

import Topics from '../../data/Topics';

import Cubism from '../../data/Cubism';

import {Container, Block, TopicList, BlockName} from './styles';

export default function Home({navigation}) {
  return (
    <Container>
      <TopicList
        keyExtractor={(item, index) => index.toString()}
        data={Topics}
        renderItem={({item: topic}) => (
          <Block
            keyExtractor={topic.name}
            onPress={() =>
              navigation.navigate('Quiz', {
                title: `${topic.name}`,
                questions: Cubism,
              })
            }>
            <BlockName>{topic.name}</BlockName>
          </Block>
        )}
      />
    </Container>
  );
}

Home.navigationOptions = {
  title: 'Guess the Artist',
};
