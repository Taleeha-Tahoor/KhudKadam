import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Icon from 'react-native-vector-icons/MaterialIcons';

import HomeStackScreen from './homeComponent/HomeStackScreen';
import CommunityStackScreen from "./communitiesComponent/CommunityStackScreen"
import RaiseIssueStackScreen from './raiseIssueComponent/RaiseIssueStackScreen';
import NotificationStackScreen from './notificationComponent/NotificationStackScreen';
import ProfileStackScreen from './profileComponent/ProfileStackScreen';

export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Communities') {
                iconName = 'people';
              } else if (route.name === 'Raise Issue') {
                iconName = 'add-circle';
              } else if (route.name === 'Notification') {
                iconName = 'notifications';
              } else if (route.name === 'Profile') {
                iconName = 'person';
              }

              return <Icon name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: 'blue',  
            tabBarInactiveTintColor: 'gray', 
          })}>

          <Tab.Screen name="Home" component={HomeStackScreen}/>
          <Tab.Screen name="Communities" component={CommunityStackScreen}/>
          <Tab.Screen name="Raise Issue" component={RaiseIssueStackScreen}/>
          <Tab.Screen name="Notification" component={NotificationStackScreen}/>
          <Tab.Screen name="Profile" component={ProfileStackScreen}/>

        </Tab.Navigator>
      </NavigationContainer>
      
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  
});
