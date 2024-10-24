import React, { useEffect, useState, useCallback } from "react";
import { View, Text, Button, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { LoadUpcomingMovies } from "../../redux/reducers/homeReducerKit";
import { MOVIESAPIKEY } from "../../utils/storage_bukcet";
import UpcomingMovies from "../../components/UpcomingMovies";
import { useNavigation } from "@react-navigation/native";


const Watch=()=> {

    const dispatch = useDispatch() 
    const[moviesList, setMoviesList] = useState([]) 
    const navigation = useNavigation()

    useEffect(()=>{
      fetchUpcomingMovies()
    },[])


    const fetchUpcomingMovies = async () => { 
     dispatch(
       LoadUpcomingMovies(apiKey=MOVIESAPIKEY))
        .then((data)=>{
            if(data.type=LoadUpcomingMovies.fulfilled){
                setMoviesList(data.payload.results)    
            } 
          }        
         )
   };
  

   const renderUpcomingMovies = useCallback(({ item, index }) => {
    return (
      <UpcomingMovies
      movie={item}
      onMovieClicked={(movie)=>{
         navigation.navigate('MovieOverview',{movieId:item.id})
      }}
     />
    )
    },[])

    return(
        <View style={{
          backgroundColor:'#F6F6FA'
        }}>
            <FlatList
              style={{
                marginHorizontal:20
              }}
              data={moviesList}
              keyExtractor={(item, index)=>{
                return('upcomingmovies-'+item.id)
              }}
              renderItem={renderUpcomingMovies}
            /> 
        </View>
    )
}

export default Watch