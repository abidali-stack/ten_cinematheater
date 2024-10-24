import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, ImageBackground, StyleSheet , Image, TouchableOpacity, ScrollView, Modal} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { LoadMovieDetails, LoadUpcomingMovies } from "../../redux/reducers/homeReducerKit";
import { MOVIESAPIKEY } from "../../utils/storage_bukcet";
import UpcomingMovies from "../../components/UpcomingMovies";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import PlayIcon from '../../assets/tabs/play'
import { color_highlighter, color_tabbar } from "../../utils/style_params";


const MovieOverview=()=> {

    const dispatch = useDispatch() 
    const route = useRoute()
    const {movieId} = route.params
    const [movieDetails,setMovieDetails] = useState(null)
    const navigation = useNavigation()
    
    useEffect(()=>{
      fetchMovieDetails(movieId)
    },[])


    const fetchMovieDetails = async (movieId) => { 
     dispatch(
       LoadMovieDetails({apiKey:MOVIESAPIKEY, movieId:movieId}))
        .then((data)=>{
           if(data.type==LoadMovieDetails.fulfilled && data.payload!==null){
              const date = new Date(data.payload.release_date);
              const options = { year: 'numeric', month: 'long', day: 'numeric' };
              const formattedDate = date.toLocaleDateString('en-US', options);
              data.payload.convertedDate = formattedDate
              setMovieDetails(data.payload)
              console.log("mDetails "+JSON.stringify(data.payload)) 
          
              //console.log(data.payload.release_date)
            }
          }        
         )
   };
  

    return(
      <> 
     
    {movieDetails!=null && <View style={styles.mainContainer}>
           <View style={styles.imageContainer}>
            <ImageBackground
            source={{uri:"https://image.tmdb.org/t/p/w400"+movieDetails.poster_path}} // Add your image file in the assets folder
            resizeMode="cover"
            style={styles.image}
          > 
             <LinearGradient 
            colors={['#00000000', '#000000']} 
            style={styles.overlayGradient}> 
            <View style={styles.headerItemsContainer}>
            <Text style={styles.titleText}>
              {movieDetails!=null && movieDetails.original_title}
            </Text> 

            <Text style={styles.timingText}>
              In Theaters {movieDetails!=null && movieDetails.convertedDate}
            </Text>

            <TouchableOpacity
              onPress={()=>{
                navigation.navigate('GetTickets', {movieId:movieId, movieName:movieDetails.original_title, movieDate:movieDetails.convertedDate})
              }}
              style={styles.primaryButton}
            >
              <Text style={styles.primaryButonText}>
                Get Tickets
              </Text>
            </TouchableOpacity> 

            <TouchableOpacity
              onPress={()=>{
                navigation.navigate('WatchTrailer',{movieId:movieId})
              
              }}
              style={styles.secondayBtn}
            >
              <View style={styles.secondayBtnView}>
              <PlayIcon/>
              <Text style={styles.secondayBtnTxt}>
                Watch
              </Text>
              </View>
            </TouchableOpacity> 



            </View> 
             </LinearGradient> 
           </ImageBackground>   
           </View>
           <Text style={styles.genreTitle}>
               Genere
           </Text>
           <View style={styles.genreItemsContainer}>
              {movieDetails.genres.map((item, index)=>{
                return(
                  <View style={[{backgroundColor:index==0?'#15D2BC':index==1?'#E26CA5':index==2?'#564CA3':'#CD9D0F'}, styles.genreItemView]}>
                    <Text style={styles.genreItemText}>
                      {item.name}
                    </Text>
                  </View>  
                )
              })} 
           </View>
           <View style={styles.divider}>
            
           </View>
           <Text style={styles.overview}>
               Overiew
           </Text>
           <ScrollView>
            <Text style={styles.xplainer}>
               {movieDetails.overview}
            </Text>
           </ScrollView>


            
        </View>}
        </>
    )
}


const styles= StyleSheet.create({
  mainContainer:{
    backgroundColor:'#FFFFFF',
    flexDirection:'column',
    flex:1,
    justifyContent:'flex-start'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width:'100%',
    height:465,
    flexDirection:'column',
    justifyContent:'flex-end'
  },
  imageContainer:{
    backgroundColor:'black', 
    height:465
  },
  overlayGradient:{
    ...StyleSheet.absoluteFillObject,
    height:465,
    justifyContent:'flex-end'
                       
  },
  headerItemsContainer:{
    elevation:10 ,
    marginBottom:34,
    width:'100%',
    alignContent:'center',
    alignItems:'center'
  },
  titleText:{
    fontSize:24,
    color:'white',
    fontFamily:'Poppins_500Medium',
    marginHorizontal:66 
  },
  timingText:{
    fontSize:16,
    color:'white',
    marginTop:6,
    fontFamily:'Poppins_500Medium' 
  },
  primaryButton:{
    backgroundColor:color_highlighter,
    paddingVertical:15,
    marginTop:15,
    borderRadius:10,
    flexDirection:'row',
    marginHorizontal:65,
  },
  primaryButonText:{
    color:'white',
    fontFamily:'Poppins_600SemiBold',
    fontSize:14,
    flex:1,
    justifyContent:'center',
    alignContent:'center',
    textAlign:'center'
  },
  secondayBtn:{
    borderColor:'#61C3F2',
    borderWidth:1,
    paddingVertical:15,
    paddingHorizontal:66,
    borderRadius:10,
    marginTop:10,
    marginHorizontal:66,
    flexDirection:'row'
  },
  secondayBtnView:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    flex:1
  },
  secondayBtnTxt:{
    color:'white',
    marginLeft:8,
    fontFamily:'Poppins_600SemiBold',
    fontSize:14,
  },
  genreTitle:{marginTop:27,
    width:'100%',
    marginHorizontal:40,
    fontFamily:'Poppins_500Medium',
    fontSize:16,
    color:color_tabbar,
    lineHeight:20
    },
  genreItemsContainer:{
    flexDirection:'row', 
    gap:7, 
    marginLeft:40, 
    marginTop:14
  },
  genreItemView:{
    borderRadius:16, 
    paddingVertical:2, 
    paddingHorizontal:10
  },
  genreItemText:{
    fontFamily:'Poppins_600SemiBold',
    fontSize:12,
    color:'white'
  },
  divider:{
    marginHorizontal:40, 
    marginTop:22, 
    marginBottom:15 ,
    height:1, 
    backgroundColor:'black', 
    opacity:0.05
  },
  overview:{
    marginBottom:14,
    marginHorizontal:40, 
    fontFamily:'Poppins_500Medium', 
    color:color_tabbar, 
    fontSize:16
  },
  xplainer:{
    fontFamily:'Poppins_400Regular', 
    fontSize:12, 
    color:'#8F8F8F', 
    marginHorizontal:40}
})


export default MovieOverview