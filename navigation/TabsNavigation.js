import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import Watch from "../screens/tabscreens/Watch";
import DashboarIcon from '../assets/tabs/Dashboard'
import WatchIcon from '../assets/tabs/Watch'
import SearchIcon from '../assets/tabs/search'
import TabMore from '../assets/tabs/TabMore'
import MediaLibrary from '../assets/tabs/Media_Library'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from "@react-navigation/native";
import MovieSearchNavigation from "./MovieSearchNavigation";
import Dashboard from "../screens/tabscreens/Dashboard";

const Tabs = createBottomTabNavigator();






// Tab navigator with Movie Screen as the initial screen



const TabNavigation = (props) => {
  const navigation = useNavigation()

  console.log('Navigation'+JSON.stringify(navigation))
  
  
  return (
    <>
      <Tabs.Navigator initialRouteName="Watch"
        screenOptions={{
          tabBarStyle: {
            borderTopLeftRadius: 27,
            borderTopRightRadius: 27,
            backgroundColor: '#2E2739',
            paddingTop:17,
            paddingHorizontal:25
          },
          tabBarInactiveTintColor: "#827D88",
          tabBarActiveTintColor: "#FFFFFF"
        }}
      >
       
        <Tabs.Screen name="Dashboard" 
                     component={Dashboard}
                     options={{
                      title: "Dashboard",
                      headerShown: true,
                      tabBarIcon: ({ color, size }) => (
                        <DashboarIcon/>
                      ),
                      tabBarLabelStyle:{
                        marginTop:7,
                        fontSize:10,
                        fontFamily:'Roboto_400Regular'
                      }
                    }} 
            />
        <Tabs.Screen name="Watch" 
                     component={MovieSearchNavigation} 
                     options={{
                      //title: "Watch",
                      headerShown: false,
                      tabBarIcon: ({ color, size }) => (
                        <WatchIcon/>
                      ),
                      tabBarLabelStyle:{
                        marginTop:7,
                        fontSize:10,
                        fontFamily:'Roboto_400Regular'
                      },
                      headerRight:()=>(
                        <TouchableOpacity onPress={()=>{
                            navigation.navigate('Watch', { screen: 'Watch-Search' }) 
                        }}> 
                         <SearchIcon/>
                         </TouchableOpacity> 
                         
                       ),
                    }}     
            />
        <Tabs.Screen name="Media Library" 
                     component={Watch}
                     options={{
                      title: "Media Library",
                      headerShown: true,
                      tabBarIcon: ({ color, size }) => (
                        <MediaLibrary/>
                      ),
                      tabBarLabelStyle:{
                        marginTop:7,
                        fontSize:10,
                        fontFamily:'Roboto_400Regular'
                      }
                    }}      
            />   
        <Tabs.Screen  name="More" 
                      component={Watch}
                      options={{
                        title: "More",
                        headerShown: true,
                        tabBarIcon: ({ color, size }) => (
                          <TabMore/>
                        ),
                        tabBarLabelStyle:{
                          marginTop:7,
                          fontSize:10,
                          fontFamily:'Roboto_400Regular'
                        }
                      }}      
            />
      </Tabs.Navigator>
    </>
  );
};

export default TabNavigation;
