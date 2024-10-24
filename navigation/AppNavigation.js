import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "./TabsNavigation";
import MovieOverview from "../screens/watch/MovieOveriew";
import WatchTrailer from "../screens/watch/WatchTrailer";
import GetTickets from "../screens/watch/GetTickets";
import ConfirmSeat from "../screens/watch/ConfirmSeat";
import { color_highlighter, color_tabbar } from "../utils/style_params";
const Stack = createStackNavigator();


const Multilinetitle = ({title, subtitle}) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 16, 
                     fontFamily:'Poppins_500Medium', 
                     textAlign: 'center',
                     color:color_tabbar }}>
        {title}
      </Text>
      <Text style={{ fontSize: 12, 
                     textAlign: 'center',  
                     fontFamily:'Poppins_500Medium', 
                     color:color_highlighter }}>
        {subtitle}
      </Text>
    </View>
  );
};

const AppNavigation = () => {

  return (
    <>

            <Stack.Navigator 
                initialRouteName={"Home"} 
                screenOptions={{
                  headerBackTitleVisible: false
                }}
              >
                 

                <Stack.Screen
                  name={"Home"}
                  component={TabNavigation}
                  options={{headerShown:false}}
                />
                <Stack.Screen
                  name={"MovieOverview"}
                  component={MovieOverview}
                  options={{headerShown:false}}
                />
                <Stack.Screen
                  name={"WatchTrailer"}
                  component={WatchTrailer}
                  options={{headerShown:false}}
                />
                <Stack.Screen
                  name={"GetTickets"}
                  component={GetTickets} 
                  options={({ route }) => ({
                    headerTitle: () => <Multilinetitle title={route.params?.movieName} subtitle={route.params?.movieDate}/>,
                  })} 
                />
                <Stack.Screen
                  name={"ConfirmSeat"}
                  component={ConfirmSeat}
                  options={({ route }) => ({
                    headerTitle: () => <Multilinetitle title={route.params?.movieName} subtitle={route.params?.movieDate}/>,
                  })}   
                />

            </Stack.Navigator>

     
    </>
  );
};






export default AppNavigation;
