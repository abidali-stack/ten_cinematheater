import React, { Component } from "react";
import { View, Text, ImageBackground, TouchableOpacity , StyleSheet, ImageBackgroundBase} from "react-native";
import { color_primary } from "../utils/style_params";
import { LinearGradient } from 'expo-linear-gradient';




const GenresItem=({genre})=> {
   return (
    <View style={styles.container}>
      <TouchableOpacity 
          style={styles.imContainer}
          onPress={()=>{
            onMovieClicked(movie)
          }}
          >
          <View style={{position:'absolute', top:0, height:100}}>  
          {genre.icon }
          </View>  
            <Text style={styles.text}>{genre.title}</Text>
          
      </TouchableOpacity>
    </View>
  );
};

const styles= StyleSheet.create({
  container: {
    flex: 1,
    marginVertical:10,
  },
  imContainer:{
    width:'100%',
    marginHorizontal:0,
    height:100,
    overflow:'hidden'
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  gradient: {
      flex:1,
      position:'absolute',
      bottom:0,
      height:'100%',
      
      
  },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'left',
    position:'absolute',
    fontFamily:'Poppins_500Medium',
    bottom:20,
    left:10
  },
})


export default GenresItem;
