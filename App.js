import "react-native-gesture-handler";
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer  } from "@react-navigation/native";
import AppNavigation from './navigation/AppNavigation';
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'
import { useSelector } from "react-redux";
import { Roboto_500Medium, Roboto_400Regular } from '@expo-google-fonts/roboto';
import Loader from "./components/Loader";
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  } from '@expo-google-fonts/poppins';

const NavigationDecider=()=>{

  const {loading} = useSelector(state=> {
    return state.home
   })


  
  return(
       <>
          {loading && <Loader loading={loading}/>}
          <AppNavigation/>
       </>
  )
}


export default function App() {

  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Poppins_500Medium,
    Roboto_400Regular,
    Poppins_400Regular,
    Poppins_600SemiBold

  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
            <NavigationDecider/> 
        </NavigationContainer>
      </PersistGate>
    </Provider>     
  );
}
