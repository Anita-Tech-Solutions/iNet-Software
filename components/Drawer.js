import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, View, Animated} from 'react-native';
import {Text, Icon, ListItem} from 'react-native-elements';

import {theme} from '../constants';

class DrawerItem extends Component {
  renderIcon = () => {
    const {title, focused} = this.props;
    switch (title) {
      case 'Home':
        return (
          <Icon
            name="home"
            color={focused ? theme.COLORS.PRIMARY : 'white'}
            size={20}
          />
        );
      case 'About':
        return (
          <Icon
            name="info"
            type="entypo"
            color={focused ? theme.COLORS.PRIMARY : 'white'}
            size={20}
          />
        );
      case 'Services':
        return (
          <Icon
            name="gear"
            type="evilicon"
            color={focused ? theme.COLORS.PRIMARY : 'white'}
            size={20}
          />
        );
      case 'Business':
        return (
          <Icon
            name="user"
            type="evilicon"
            color={focused ? theme.COLORS.PRIMARY : 'white'}
            size={20}
          />
        );
      case 'Industries':
        return (
          <Icon
            name="layers"
            type="fontawesome"
            color={focused ? theme.COLORS.PRIMARY : 'white'}
            size={20}
          />
        );
      case 'Contact':
        return (
          <Icon
            name="contacts"
            type="antdesign"
            color={focused ? theme.COLORS.PRIMARY : 'white'}
            size={20}
          />
        );
      default:
        return;
    }
  };

  render() {
    const {title, focused, navigation, progress, ...rest} = this.props;
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(title);
        }}>
        <View style={[styles.defaultStyle]}>
          <ListItem
            containerStyle={{
              padding: 5,
              margin: 5,
              backgroundColor: focused
                ? theme.COLORS.WHITE
                : theme.COLORS.PRIMARY,
            }}>
            {this.renderIcon()}
            <ListItem.Content>
              <ListItem.Title
                style={{
                  color: focused ? theme.COLORS.PRIMARY : 'white',
                  fontSize: 25,
                }}>
                {title}
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </View>
      </TouchableOpacity>
    );
  }
}

export default DrawerItem;

const styles = StyleSheet.create({
  defaultStyle: {
    backgroundColor: theme.COLORS.PRIMARY,
  },
  activeStyle: {
    backgroundColor: theme.COLORS.BUTTON_COLOR,
    borderRadius: 4,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
  },
});
