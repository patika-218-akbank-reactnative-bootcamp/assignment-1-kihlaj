import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';

// JS exports/imports
import HomeScreen from './screens/HomeScreen';

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
