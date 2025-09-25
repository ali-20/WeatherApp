import { StatusBar, useColorScheme } from 'react-native';
import {
  SafeAreaProvider,

} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/stacks/AppStack';
import { Provider } from "react-redux";
import { store, persistor } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';


function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />


            <AppStack />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}





export default App;
