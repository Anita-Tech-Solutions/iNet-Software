import React from 'react';
import {Dimensions, View, Text, StyleSheet, FlatList} from 'react-native';
import {Icon} from 'react-native-elements';

const {width} = Dimensions.get('window');

import Title from './Title';
import {theme} from '../constants';

const CardComponent = ({item}) => {
  return (
    <View style={styles.cardContainer}>
      <Title style={{color: theme.COLORS.BUTTON, padding: 15}}>
        {item.title}
      </Title>
      <FlatList
        data={item.subtitle}
        renderItem={({item}) => (
          <View style={styles.card}>
            <View style={styles.iconContainer}>
              <Icon
                name={item.iconName}
                type={item.iconType}
                size={50}
                color={item.color}
              />
            </View>
            <Text
              style={{
                fontSize: 17,
                fontWeight: '600',
                textAlign: 'center',
                fontFamily: 'Rubik-Light',
              }}>
              {item.title}
            </Text>
          </View>
        )}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
  },
  card: {
    width: width / 2.2,
    height: 120,
    borderColor: theme.COLORS.GRAY,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
    margin: 6,
    shadowOpacity: .5,
    shadowColor: 'purple',
    shadowRadius: 5,
    shadowOffset: {width: 2, height: 0},
    elevation: 2,
    borderWidth: .5,
    borderStyle: 'solid',
  },
  iconContainer: {
    width: 70,
    height: 70,
    backgroundColor: '#e6f9ff',
    justifyContent: 'center',
    borderRadius: 35,
  },
});

export default CardComponent;
