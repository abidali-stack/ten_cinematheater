import React, { Component } from "react";
import { View, Text, ImageBackground, TouchableOpacity , StyleSheet, ImageBackgroundBase} from "react-native";
import { color_primary } from "../utils/style_params";
import { LinearGradient } from 'expo-linear-gradient';




const UpcomingMovies=({movie, onMovieClicked})=> {
   return (
    <View style={styles.container}>
      <TouchableOpacity 
          style={styles.imContainer}
          onPress={()=>{
            onMovieClicked(movie)
          }}
          >
          <ImageBackground
            source={{uri:"https://image.tmdb.org/t/p/w300/"+movie.backdrop_path}} // Add your image file in the assets folder
            resizeMode="cover"
            style={styles.image}
          >
            <LinearGradient
              colors={['#00000000', '#000000']} 
              style={{...StyleSheet.absoluteFillObject,
                         height:180,
                         justifyContent:'flex-end',
                         flexDirection:'column'
                          }} // Define the colors of the gradient
             
            />
            <Text style={styles.text}>{movie.title}</Text>
          </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles= StyleSheet.create({
  container: {
    flex: 1,
    marginVertical:10
  },
  imContainer:{
    width:'100%',
    height:180,
    borderRadius:20,
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
    fontSize: 18,
    textAlign: 'left',
    marginBottom:20,
    marginHorizontal:20,
    fontFamily:'Poppins_500Medium'
  },
})


export default UpcomingMovies;
