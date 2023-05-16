import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/components/routes';
import {PaperProvider} from 'react-native-paper';
import {store} from './src/app/store';
import {Provider} from 'react-redux';
import {PerfumeScreen} from './src/screens/Perfume';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AllPerfumes} from './src/screens/AllPerfumes';

export type RootStackParamList = {
  Perfume: undefined;
  AllPerfumes: undefined;
};

function App(): JSX.Element {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={Routes.AllPerfumes}>
            <Stack.Screen name={Routes.Perfume} component={PerfumeScreen} />
            <Stack.Screen name={Routes.AllPerfumes} component={AllPerfumes} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

export default App;
