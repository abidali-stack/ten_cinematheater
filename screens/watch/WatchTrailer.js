import React, { useEffect, useState, useRef, useCallback } from "react";
import { View, Text, Button, FlatList, ImageBackground, StyleSheet , Image, TouchableOpacity, ScrollView, Modal} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { LoadMovieDetails, LoadMovieTrailer, LoadUpcomingMovies } from "../../redux/reducers/homeReducerKit";
import { MOVIESAPIKEY } from "../../utils/storage_bukcet";
import UpcomingMovies from "../../components/UpcomingMovies";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import PlayIcon from '../../assets/tabs/play'
import { Video, ResizeMode } from 'expo-av';
import YoutubePlayer from "react-native-youtube-iframe";



const WatchTrailer=()=> {

    const dispatch = useDispatch() 
    const route = useRoute()
    const {movieId} = route.params
    const [trailerDetails,setTrailerDetails] = useState(null)
    
    const [playing, setPlaying] = useState(false);
    const navigation = useNavigation()

    const onStateChange = useCallback((state) => {
      if (state === "ended") {
        setPlaying(false);
        navigation.goBack()
        
      }
    }, []);
  
    const togglePlaying = useCallback(() => {
      setPlaying((prev) => !prev);
    }, []);
  

    useEffect(()=>{
      fetchMovieTrailer(movieId)
    },[])


    const fetchMovieTrailer = async (movieId) => { 
     dispatch(
       LoadMovieTrailer({apiKey:MOVIESAPIKEY, movieId:movieId}))
        .then((data)=>{ 
           if(data.type==LoadMovieTrailer.fulfilled && data.payload!==null){
              // const date = new Date(data.payload.release_date);
              // const options = { year: 'numeric', month: 'long', day: 'numeric' };
              // const formattedDate = date.toLocaleDateString('en-US', options);
              // data.payload.convertedDate = formattedDate
              // setMovieDetails(data.payload)
              //console.log("mDetails "+JSON.stringify(data.payload)) 
              //console.log(data.payload.release_date)
               data.payload.results.map((item, index)=>{
                if(item.type=="Trailer" && item.official==true){
                  {console.log("Trailer "+JSON.stringify(item))}
                  setTrailerDetails(item)
                }
               })
            }
          }        
         )
   };
  

    return(
      <> 
       {trailerDetails!=null &&  <View style={styles.container}>
       <YoutubePlayer
        height={300}
        play={playing}
        videoId={trailerDetails.key}
        onChangeState={onStateChange}
      />
      <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
   
      </View>
            }
    </>
    )
}


const styles= StyleSheet.create({
 
  image: {
    flex: 1,
    justifyContent: 'center',
    width:'100%',
    height:465,
    flexDirection:'column',
    justifyContent:'flex-end'
  },
})


export default WatchTrailer