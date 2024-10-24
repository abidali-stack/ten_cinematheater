import React, { useEffect, useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Watch from "../screens/tabscreens/Watch";
import WatchSearch from "../screens/watch/WatchSearch";
import { useNavigation } from "@react-navigation/native";
const Stack = createStackNavigator();
import SearchIcon from '../assets/tabs/search'
import { Colors } from "react-native/Libraries/NewAppScreen";
import CloseIcon from "../assets/tabs/Close"
import { color_tabbar } from "../utils/style_params";




// Stack navigator with Home as the initial screen



const MovieSearchNavigation = (props) => {

  const[showingHeader, setShowingHeader] = useState(true)
  const[movieSearchString, setMovieSearchString] = useState("")
  const navigation = useNavigation()
  


  return (
    <>

            <Stack.Navigator 
                initialRouteName={"Watch"} 
                screenOptions={{
                  headerBackTitleVisible: false,
                  headerShown:true
                }}
              >
                 

                <Stack.Screen
                  name={"Watch"}
                  component={Watch}
                  options={{
                    title: "Watch",
                    headerShown: true,
                    headerTitleAlign: 'left',
                    headerStyle:{
                      marginLeft:20,
                      marginRight:20
                      
                    },
                    headerTitleStyle:{
                      fontFamily:'Poppins_500Medium',
                      color:color_tabbar,
                    },
                    headerRight:()=>(
                     <TouchableOpacity onPress={()=>{
                         navigation.navigate('Watch-Search') 
                     }}> 
                        <SearchIcon/>
                      </TouchableOpacity> 
                      
                    ),
                    
                    
                  }}     
                />
                <Stack.Screen
                  name={"Watch-Search"}
                  component={WatchSearch}
                  options={{
                      headerShown:false,
                      headerTintColor:'#FFFFFF',
                      backgroundColor:'#FFFFFF',
                      
                     
                  }}
                  
                />

            </Stack.Navigator>

     
    </>
  );
};






export default MovieSearchNavigation;
