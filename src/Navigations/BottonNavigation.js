import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import CategoryScreen from '../Screens/CategoryScreen';
import CartScreen from '../Screens/CartScreen';
import NotificationScreen from '../Screens/NotificationScreen';
import AccountScreen from '../Screens/AccountScreen';
import {Icon} from 'react-native-elements';
const BottonNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="home-outline"
              type="material-community"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={{
          tabBarLabel: 'Danh mục',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="shape-outline"
              type="material-community"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarLabel: 'Giỏ hàng',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="cart-outline"
              type="material-community"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          tabBarLabel: 'thông báo',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="bell-badge-outline"
              type="material-community"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Tài khoản',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="account-outline"
              type="material-community"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottonNavigation;

const styles = StyleSheet.create({});
