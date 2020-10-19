import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import { DASHBOARD_SCREEN, PROFILE_SCREEN, SETTINGS_SCREEN, TASKS_SCREEN } from './constants';

import TasksScreen from '../screens/TasksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DashboardScreen from '../screens/DashboardScreen';
// import { Button } from 'react-native-paper';


// const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const tabs = [
  {
    name: TASKS_SCREEN,
    component: TasksScreen,
    title: "Tasks",
    icon: "home"
  },
  {
    name: DASHBOARD_SCREEN,
    component: DashboardScreen,
    title: "Dashboard",
    icon: "chart-arc"
  },
  {
    name: PROFILE_SCREEN,
    component: ProfileScreen,
    title: "Profile",
    icon: "account"
  },
  {
    name: SETTINGS_SCREEN,
    component: SettingsScreen,
    title: "Settings",
    icon: "settings"
  }
]

const TabNavigation = ({tabs=[], options})=>(
  <Tab.Navigator
    initialRouteName={options.initialRouteName || tabs[0]?.name}
    barStyle={{backgroundColor: "#000"}}
  >
    {tabs.map(item=>(
      <Tab.Screen
        key={`bottom-tab-nav-${item.name}`}
        name={item.name}
        options={{
          tabBarLabel: item.title,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name={item.icon} color={color} size={26} />
          ),
        }}
      >
        {()=>(
          <Stack.Navigator>
            <Stack.Screen
              name={item.name}
              component={item.component}
              options={{title: item.title}}
            />
          </Stack.Navigator>
        )}
      </Tab.Screen>
    ))}
  </Tab.Navigator>
)

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <TabNavigation tabs={tabs} options={{initialRouteName: TASKS_SCREEN}}/>
    </NavigationContainer>
  )
}
