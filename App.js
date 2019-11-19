import Home from './screens/Home';
import Add from './screens/Add';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator(
  {
    Home,
    Add,
  },
  {
    initialRouteName: 'Home',
  },
);

const App = createAppContainer(MainNavigator);

export default App;
