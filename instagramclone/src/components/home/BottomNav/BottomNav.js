import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './BottomNav.style';

const BottomNav = () => {
  const [activeTabs, setActiveTab] = useState('Home');

  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
          <AntDesign name="home" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
          <AntDesign name="search1" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
          <AntDesign name="playcircleo" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
          <AntDesign name="shoppingcart" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
          <Image
            style={styles.profilePicture}
            source={require('../../../../assets/138.jpg')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomNav;
