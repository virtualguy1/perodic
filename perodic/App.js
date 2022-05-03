import * as React from 'react';
// import MainContainer from './navigation/MainContainer';
import 'react-native-gesture-handler'
import { NavigationContainer, DefaultTheme, useTheme } from '@react-navigation/native';
import RootStack from './navigation/screens/RootStack';

import MainContainer from './navigation/MainContainer';

function App() {
  const [login, setLogin] = React.useState(true);


  const {colors} = useTheme();

  return (
    <>
     {
       login ?  
      <NavigationContainer  >
       <RootStack style={{color:colors.text}} />
     </NavigationContainer> 
     :
     <MainContainer />
     }
     </>
  );
}

export default App;