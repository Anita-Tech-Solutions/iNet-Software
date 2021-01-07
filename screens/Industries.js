import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Icon, Card} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {Title,Accordion} from '../components';

import {theme} from '../constants';
import {INDUSTRIES} from '../constants/data';
const {width, height} = Dimensions.get('window');

const Industries = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <ScrollView showsVerticalScrollIndicator={false} >
      <View style={styles.container}>
        <View style={styles.main}>
          <Icon name="layers" type="fontawesome" size={45} color="white" />
          <Title style={{color: 'white', fontFamily: 'Rubik-Bold'}}>
            Industries
          </Title>
        </View>
        <View>
          {INDUSTRIES.map((item,index) => (
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

export default Industries;
