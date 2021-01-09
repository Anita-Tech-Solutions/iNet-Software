import React from 'react';
import {Icon} from 'react-native-elements';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//components
import {BottomItem, Header, MyTabBar} from '../components';
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
import Share from '../screens/Share';

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

function ShareStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Share"
        component={Share}
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
      initialRouteName="Home"
      tabBar={(props) => <MyTabBar {...props} />}
      tabBarOptions={{
        activeTintColor: theme.COLORS.BUTTON,
        inactiveTintColor: 'white',
        labelStyle: {
          fontFamily: 'Rubik-Light',
        },
        style: {
          backgroundColor: theme.COLORS.PRIMARY,
          margin: 10,
          borderRadius: 10,
        },
      }}>
      <Bottom.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" type="feather" color={color} size={size} />
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
      <Drawer.Screen name="Share" component={ShareStack} />
    </Drawer.Navigator>
  );
}

export default function OnboardingStack() {
  return (
    <Stack.Navigator mode="card" headerMode="none" initialRouteName="App">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}
