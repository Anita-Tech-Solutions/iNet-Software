import React, {Component} from 'react';
import {View, ScrollView, Image, Dimensions, StyleSheet} from 'react-native';

import {Title, CardComponent2} from '../components';
import {BUSSINESS, INDUSTRIES, SERVICES} from '../constants/data';

const {width} = Dimensions.get('window');

class Home extends Component {
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={{marginTop: 15}}>
            <Image
              source={require('../assets/images/inet.png')}
              resizeMode={'contain'}
              style={{width: width}}
            />
          </View>
          <View>
            <Title style={{margin: 20}}>Services</Title>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {SERVICES.map((item, index) => (
                <CardComponent2 item={item} key={index} />
              ))}
            </ScrollView>
          </View>
          <View>
            <Title style={{margin: 20}}>Business</Title>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {BUSSINESS.map((item, index) => (
                <CardComponent2 item={item} key={index} />
              ))}
            </ScrollView>
          </View>
          <View>
            <Title style={{margin: 20}}>Industries</Title>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
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
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingBottom:100
  },
});

export default Home;
