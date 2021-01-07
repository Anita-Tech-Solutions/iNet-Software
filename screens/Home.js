import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

import {SocialIcon, Icon, Card} from 'react-native-elements';
import {Heading, Subheading, Subtitle, Title,SliderComponent} from '../components';
import {theme} from '../constants';
import {HOME, HOME2} from '../constants/data';

const {width} = Dimensions.get('window');

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} >
      <Title>We Develop Apps According to Clients Requirments</Title>
      <Subtitle style={{color: 'gray'}}>
        <View style={{margin: 4, padding: 5}}>
          <Icon name="play" type="antdesign" size={20} color="green" />
        </View>
        Intro & Demo Video
      </Subtitle>
      <Image
        source={require('../assets/images/home/aeroland-software-image-01.png')}
        resizeMode={'contain'}
        style={{width: width, height: 400, marginTop: 20}}
      />
      {HOME.map(({id, title, subtitle, img}) => (
        <Card key={id}>
          <Image source={img} resizeMode="contain" />
          <Heading>{title}</Heading>
          <Subheading>{subtitle}</Subheading>
        </Card>
      ))}
      <View style={{margin: 10}}>
        <Title>
          What’s next in Generation?{' '}
          <Text style={{color: '#38cb89'}}>Learn more</Text>
        </Title>
      </View>
      <View style={{backgroundColor: theme.COLORS.PRIMARY}}>
        <Title style={{color: 'white', margin: 10}}>
          Developed for Higher Business Growth
        </Title>
        <Subtitle style={{color: 'white', textAlign: 'center', margin: 10}}>
          Offer your business with the best assistance for growth.
        </Subtitle>
        {HOME2.map(({id, title, subtitle, img}) => (
          <View key={id} style={{padding: 10}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <Icon
                name={img}
                type="antdesign"
                size={30}
                color="white"
                style={{
                  borderRadius: 5,
                  borderColor: 'white',
                  borderWidth: 2,
                  padding: 10,
                }}
              />
              <Heading style={{color: 'white'}}>{title}</Heading>
            </View>
            <Subheading style={{color: 'white', margin: 10}}>
              {subtitle}
            </Subheading>
          </View>
        ))}
        <Image
          source={require('../assets/images/home/aeroland-tab-content-image-01.jpg')}
          resizeMode={'contain'}
          style={{width: width, height: 200, marginBottom: 20}}
        />
      </View>
      <View style={{padding: 10}}>
        <Image
          source={require('../assets/images/home/aeroland-software-image-05.png')}
          style={{width: width, height: 100, marginTop: 10}}
        />
        <Title style={{color: '#2e3280'}}>
          All-in-one responsive app & web for you
        </Title>
        <SliderComponent />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default Home;
