import React, { Component } from "react";
import { View, Text, ImageBackground, TouchableOpacity , StyleSheet, ImageBackgroundBase} from "react-native";
import { color_primary } from "../utils/style_params";
import { LinearGradient } from 'expo-linear-gradient';




const SeatsHightlightItem=({seat})=> {
   return (
    <View style={styles.container}>
            <View>{seat.icon}</View>   
            <Text style={styles.text}>{seat.name}</Text>
          
    </View>
  );
};

const styles= StyleSheet.create({
  container: {
    flex: 1,
    marginVertical:7.5,
    flexDirection:'row',
    alignItems:'center',
    marginLeft:21,

  },
  
  text: {
    color: '#8F8F8F',
    fontSize: 12,
    textAlign: 'left',
    fontFamily:'Poppins_500Medium',
    marginLeft:12
  },
})


export default SeatsHightlightItem;
