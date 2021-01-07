import React, {useEffect} from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 1500);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/inet.png')}
        resizeMode={'contain'}
        style={{width: width, height: 100}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Splash;
