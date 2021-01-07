import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Icon} from 'react-native-elements';

import {Title, Accordion} from '../components';
import {theme} from '../constants';
import {SERVICES} from '../constants/data';

const Services = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} >
      <View style={styles.container}>
        <View style={styles.main}>
          <Icon name="settings" color="white" size={45} />
          <Title style={{color: 'white', fontFamily: 'Rubik-Bold'}}>
            Services
          </Title>
        </View>
        <View>
          {SERVICES.map((item) => (
            <Accordion item={item} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  main: {
    backgroundColor: theme.COLORS.PRIMARY,
    padding: theme.SIZES.BASE * 2,
    borderBottomRightRadius: theme.SIZES.BASE * 3,
    borderTopLeftRadius: theme.SIZES.BASE * 3,
  },
});

export default Services;
