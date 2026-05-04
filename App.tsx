/**
 * Demo Kassavirtanen — React Native CLI
 *
 * Task list + filtered fetch + create form (React Hook Form) wired through Redux Saga and mockApi.
 */

import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {TaskDashboard} from './src/components/TaskDashboard';

function App() {
  const isDark = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
        <TaskDashboard />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
