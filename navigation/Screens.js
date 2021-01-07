import React from 'react';
import {Icon} from 'react-native-elements';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//components
import {Header} from '../components';
import {theme} from '../constants';
import CustomDrawerContent from './Menu';

//screens
import Splash from '../screens/Splash';
import Welcome from '../screens/Welcome';
import Home from '../screens/Home';
import About from '../screens/About';
import Services from '../screens/Services';
import Business from '../screens/Business';
import Industries from '../screens/Industries';
import Contact from '../screens/Contact';

//stacks
const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: ({}) => <Header {...props} />,
        }}
      />
    </Stack.Navigator>
  );
}

function AboutStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={About}
        options={{header: () => <Header {...props} />}}
      />
    </Stack.Navigator>
  );
}

function ServicesStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Services"
        component={Services}
        options={{
          header: () => <Header {...props} />,
        }}
      />
    </Stack.Navigator>
  );
}

function BusinessStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Business"
        component={Business}
        options={{
          header: () => <Header {...props} />,
        }}
      />
    </Stack.Navigator>
  );
}

function IndustriesStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Industries"
        component={Industries}
        options={{header: () => <Header {...props} />}}
      />
    </Stack.Navigator>
  );
}

function ContactStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{
          header: () => <Header {...props} />,
        }}
      />
    </Stack.Navigator>
  );
}

function BottomStack() {
  return (
    <Bottom.Navigator
      tabBarOptions={{
        activeTintColor: theme.COLORS.BUTTON,
        inactiveTintColor: 'white',
        style: {
          backgroundColor: theme.COLORS.PRIMARY,
        },
      }}>
      <Bottom.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Bottom.Screen
        name="About"
        component={AboutStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="info" type="entypo" color={color} size={size} />
          ),
        }}
      />
      <Bottom.Screen
        name="Services"
        component={ServicesStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="gear" type="evilicon" color={color} size={size} />
          ),
        }}
      />
      <Bottom.Screen
        name="Business"
        component={BusinessStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="user" type="evilicon" color={color} size={size} />
          ),
        }}
      />
      <Bottom.Screen
        name="Industries"
        component={IndustriesStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="layers" type="fontawesome" color={color} size={size} />
          ),
        }}
      />
      <Bottom.Screen
        name="Contact"
        component={ContactStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="contacts" type="antdesign" color={color} size={size} />
          ),
        }}
      />
    </Bottom.Navigator>
  );
}

function AppStack() {
  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={BottomStack} />
      <Drawer.Screen name="About" component={AboutStack} />
      <Drawer.Screen name="Services" component={ServicesStack} />
      <Drawer.Screen name="Business" component={BusinessStack} />
      <Drawer.Screen name="Industries" component={IndustriesStack} />
      <Drawer.Screen name="Contact" component={ContactStack} />
    </Drawer.Navigator>
  );
}

export default function OnboardingStack() {
  return (
    <Stack.Navigator mode="card" headerMode="none" initialRouteName="Welcome">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}
