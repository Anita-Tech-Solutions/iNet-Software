import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {Icon} from 'react-native-elements';
import {Title, Accordion} from '../components';

import {theme} from '../constants';
import {BUSSINESS} from '../constants/data';

const Business = () => {
  const [] = useState(false);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.main}>
          <Icon name="user" type="evilicon" color="white" size={45} />
          <Title style={{color: 'white', fontFamily: 'Rubik-Bold'}}>
            Business
          </Title>
        </View>
        <View>
          {BUSSINESS.map((item, index) => (
            <Accordion item={item} key={index} />
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

export default Business;
