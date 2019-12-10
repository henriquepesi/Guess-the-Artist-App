import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Answers from './pages/Answers';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Quiz,
      Answers,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#FFF',
          elevation: 0,
        },
        elevation: 0,
        headerTintColor: '#9483D7',
      },
    },
  ),
);

export default Routes;
