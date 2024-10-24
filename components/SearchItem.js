import React, { Component } from "react";
import { View, Text, ImageBackground, TouchableOpacity , StyleSheet, ImageBackgroundBase, Image} from "react-native";
import { color_primary, color_tabbar } from "../utils/style_params";
import { LinearGradient } from 'expo-linear-gradient';
import SearchMenu from "../assets/tabs/search_menu"



const SearchItem=({movie, onMovieClicked})=> {
  
  
  
 
  const genreDecider=()=>{
    if(movie.genre_ids[0]==37)
      return "Western"
    else  if(movie.genre_ids[0]==10752)
      return "War"
    else  if(movie.genre_ids[0]==53)
      return "Thriller"
    else  if(movie.genre_ids[0]==10770)
      return "TV Movie"
    else  if(movie.genre_ids[0]==878)
      return "Science Fiction"
    else  if(movie.genre_ids[0]==10749)
      return "Romance"
    else  if(movie.genre_ids[0]==9648)
      return "Mystery"
    else  if(movie.genre_ids[0]==10402)
      return "Music"
    else  if(movie.genre_ids[0]==27)
      return "Horror"
    else  if(movie.genre_ids[0]==36)
      return "History"
    else  if(movie.genre_ids[0]==14)
      return "Fantasy"
    else  if(movie.genre_ids[0]==10751)
      return "Family"
    else  if(movie.genre_ids[0]==18)
      return "Drama"
    else  if(movie.genre_ids[0]==99)
      return "Documentary"
    else  if(movie.genre_ids[0]==80)
      return "Crime"
    else  if(movie.genre_ids[0]==35)
      return "Comedy"
    else  if(movie.genre_ids[0]==16)
      return "Animation"
    else  if(movie.genre_ids[0]==12)
      return "Adventure"
    else  if(movie.genre_ids[0]==28)
      return "Action"
    else
      return ""
  }

   return (
    <View style={styles.container}>
      <TouchableOpacity 
          style={styles.imContainer}
          onPress={()=>{
            onMovieClicked(movie)
          }}
          >
            <Image source={{uri:"https://image.tmdb.org/t/p/w300/"+movie.backdrop_path}}
              width={130}
              height={100}
              style={styles.imStyle}
            />
            <View style={styles.textContainer}>
            <Text style={styles.text}>{movie.original_title}</Text>
            <Text style={styles.textGenre}>{genreDecider()}</Text>
            </View>
            <SearchMenu/>
      </TouchableOpacity>
    </View>
  );
};

const styles= StyleSheet.create({
  container: {
    flex: 1,
    marginVertical:10,
    backgroundColor:'transparent'
  },
  imContainer:{
    width:'100%',
    height:100,
    overflow:'hidden',
    flexDirection:'row',
    alignContent:'center',
    alignItems:'center'
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    borderRadius:10,
    overflow:'hidden'
  },
  gradient: {
      flex:1,
      position:'absolute',
      bottom:0,
      height:'100%',
      
      
  },
  textContainer:{
    flexDirection:'column', 
    flex:1, 
    justifyContent:'center'
  },
  text: {
    fontFamily:'Poppins_500Medium',
    color: color_tabbar,
    fontSize: 16,
    textAlign: 'left',
    marginBottom:8,
    marginHorizontal:21
  },
  textGenre: {
    fontFamily:'Poppins_500Medium',
    color: '#DBDBDF',
    fontSize: 12,
    textAlign: 'left',
    marginBottom:8,
    marginHorizontal:21
  },
  imStyle:{
    borderRadius:10,
    overflow:'hidden'
  }
})


export default SearchItem;
