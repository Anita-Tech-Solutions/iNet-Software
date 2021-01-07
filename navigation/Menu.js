import React from 'react';
import {ScrollView, StyleSheet, View, Image} from 'react-native';
import {} from 'react-native-elements';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {DrawerItem as DrawerCustomItem} from '../components/';
import {theme} from '../constants/';

const CustomDrawerContent = ({drawerPosition, navigation, state}) => {
  const insets = useSafeAreaInsets();
  const screens = [
    'Home',
    'About',
    'Services',
    'Business',
    'Industries',
    'Contact',
  ];

  return (
    <View
      style={styles.container}
      forceInset={{top: 'always', horizontal: 'never'}}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/inet.png')}
          resizeMode={'contain'}
          style={styles.image}
        />
      </View>
      <View style={{paddingLeft: 7, paddingRight: 14}}>
        <ScrollView
          contentContainerStyle={[
            {
              paddingTop: insets.top * 0.2,
              paddingLeft: drawerPosition === 'left' ? insets.left : 0,
              paddingRight: drawerPosition === 'right' ? insets.right : 0,
            },
          ]}
          showsVerticalScrollIndicator={false}>
          {screens.map((item, index) => {
            return (
              <DrawerCustomItem
                title={item}
                key={index}
                navigation={navigation}
                focused={state.index === index ? true : false}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.PRIMARY,
  },
  header: {
    backgroundColor: theme.COLORS.BUTTON_COLOR,
    paddingHorizontal: 28,
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 2,
    justifyContent: 'center',
  },

  imageContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  image: {
    width: 250,
  },
});

export default CustomDrawerContent;