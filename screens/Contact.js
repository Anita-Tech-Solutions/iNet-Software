import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Button, Card, Icon, Input} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {Subtitle, Title} from '../components';
import {theme} from '../constants';
import {OFFICES} from '../constants/data';

const {width} = Dimensions.get('window');

const Contact = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} >
      <View style={styles.container}>
        <View style={{marginTop: 20}}>
          <Title>Please ask the query for feel free</Title>
          <Subtitle>
            Our team will soon be your recommendation Will solve
          </Subtitle>
        </View>
        <View style={{marginTop: 20}}>
          <Title>Let’s cooperate!</Title>
          <Subtitle>
            Let’s become partners to build a better future for today.
          </Subtitle>
          <Input
            placeholder="Name *"
            leftIcon={
              <Icon name="user" type="antdesign" color="purple" size={20} />
            }
          />
          <Input
            placeholder="Email *"
            leftIcon={
              <Icon name="mail" type="antdesign" color="purple" size={20} />
            }
          />
          <Input
            placeholder="Subject *"
            leftIcon={
              <Icon name="book" type="antdesign" color="purple" size={20} />
            }
          />
          <Input
            placeholder="Mobile *"
            leftIcon={
              <Icon name="mobile1" type="antdesign" color="purple" size={20} />
            }
          />
          <Input
            placeholder="Message *"
            leftIcon={
              <Icon name="message1" type="antdesign" color="purple" size={20} />
            }
          />
          <Button
            title="Send Message"
            buttonStyle={{
              backgroundColor: theme.COLORS.PRIMARY,
              width: 200,
              padding: 10,
              margin: 10,
            }}
          />
        </View>
        <View>
          <Title>Our Offices</Title>
          <Subtitle>You’ll need these advantages to take the lead.</Subtitle>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {OFFICES.map(({id, country, address, email, mobile}) => (
              <Card
                key={id}
                containerStyle={{
                  width: width,
                  justifyContent: 'center',
                }}>
                <Icon name="location-pin" size={35} color="purple" />
                <Title>{country}</Title>
                <Subtitle>
                  <Icon name="location-pin" color="purple" size={20} />
                  {address}
                </Subtitle>
                <Subtitle>
                  <Icon name="mail" type="antdesign" size={20} color="purple" />
                  {email}
                </Subtitle>
                <Subtitle>
                  <Icon
                    name="mobile1"
                    type="antdesign"
                    color="purple"
                    size={20}
                  />
                  {mobile}
                </Subtitle>
              </Card>
            ))}
          </ScrollView>
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
});

export default Contact;
