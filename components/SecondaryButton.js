import React, { Component } from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { color_primary } from "../utils/style_params";





const SecondaryButton = ({title, onClick}) => {
   return (
    <TouchableOpacity
         onPress={()=>{onClick()}}
    style={{ 
                   justifyContent: "center" ,
                   borderRadius:100,
                   padding:14,
                   marginHorizontal:16,
                   alignItems:'center',
                   borderColor:'#79747E',
                   borderWidth:1,
                   backgroundColor:'transparent'
                   }}>
                    <Text style={{
                      fontSize:14,
                      color:'white',
                      lineHeight:20,
                      fontFamily:'Roboto_500Medium',
                      
                    }}>
                       {title}
                    </Text>

        
    </TouchableOpacity>
  );
};


export default SecondaryButton;
