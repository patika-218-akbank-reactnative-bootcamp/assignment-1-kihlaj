import React from 'react';
import { ScrollView, View } from 'react-native';

// JS exports/imports
import HomeScreen from './pages/HomeScreen';

const App = () => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View>
        <HomeScreen />
      </View>
    </ScrollView>
  );
};

export default App;
