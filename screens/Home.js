import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';

import {Icon, Card} from 'react-native-elements';
import {
  Heading,
  Subheading,
  Subtitle,
  Title,
  SliderComponent,
  CardComponent2,
  CardComponent3,
} from '../components';
import {theme} from '../constants';
import {
  BUSSINESS,
  HOME,
  HOME2,
  INDUSTRIES,
  SERVICES,
  PLAN,
} from '../constants/data';

const {width} = Dimensions.get('window');

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View>
          <Image
            source={require('../assets/images/inet.png')}
            resizeMode={'contain'}
            style={{width: width}}
          />
        </View>
        <View>
          <Title style={{margin: 10}}>Services</Title>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {SERVICES.map((item, index) => (
              <CardComponent2 item={item} key={index} />
            ))}
          </ScrollView>
        </View>
        <View>
          <Title style={{margin: 10}}>Business</Title>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {BUSSINESS.map((item, index) => (
              <CardComponent2 item={item} key={index} />
            ))}
          </ScrollView>
        </View>
        <View>
          <Title style={{margin: 10}}>Industries</Title>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {INDUSTRIES.map((item, index) => (
              <CardComponent2 item={item} key={index} />
            ))}
          </ScrollView>
        </View>
        {/* <View>
          <Title>Affordable for everyone</Title>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {PLAN.map((item, index) => (
              <CardComponent3 item={item} key={index} />
            ))}
          </ScrollView>
        </View> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});

export default Home;
