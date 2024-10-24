import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { LoadMovieSearch, LoadUpcomingMovies } from "../../redux/reducers/homeReducerKit";
import { MOVIESAPIKEY } from "../../utils/storage_bukcet";
import UpcomingMovies from "../../components/UpcomingMovies";
import SearchIcon from '../../assets/tabs/search'
import { Colors } from "react-native/Libraries/NewAppScreen";
import CloseIcon from "../../assets/tabs/Close"
import Gcomdey from '../../assets/tabs/genres_comedy'
import Gcrime from '../../assets/tabs/genres_crime'
import Gdocumentary from '../../assets/tabs/genres_documentary'
import Gdrama from '../../assets/tabs/genres_drama'
import Gfamily from '../../assets/tabs/genres_family'
import Gfantasy from '../../assets/tabs/genres_fantasy'
import Gholidya from '../../assets/tabs/genres_holiday'
import Ghorror from '../../assets/tabs/genres_horror'
import Gscify from '../../assets/tabs/genres_scify'
import Gthriller from '../../assets/tabs/genres_thriller'
import GenresItem from "../../components/GenresItem";
import SearchItem from "../../components/SearchItem";
import { color_tabbar } from "../../utils/style_params";
import { useNavigation } from "@react-navigation/native";

const WatchSearch=({})=> {

    const dispatch = useDispatch() 
    const[moviesList, setMoviesList] = useState([]) 
    const[movieSearchString, setMovieSearchString] = useState("")
    const navigation = useNavigation()
    const[moviesGenres, setMoviesGenres] = useState(
      [
        {title:'Comidies', icon:<Gcomdey></Gcomdey>},
        {title:'Crime', icon:<Gcrime></Gcrime>},
        {title:'Family', icon:<Gfamily/>},
        {title:'Documentaries', icon:<Gdocumentary/>},
        {title:'Dramas', icon:<Gdrama/>},
        {title:'Fantasy', icon:<Gfantasy/>},
        {title:'Holidays', icon:<Gholidya/>},
        {title:'Horror', icon:<Ghorror/>},
        {title:'Sci-Fi', icon:<Gscify/>},
        {title:'Thriller', icon:<Gthriller/>}
      ]
    )
  
    useEffect(()=>{
     // fetchUpcomingMovies()
    },[])

    


    const fetchUpMoviesSearch = async () => { 
     dispatch(
       LoadMovieSearch({apiKey:MOVIESAPIKEY, query:movieSearchString}))
        .then((data)=>{
            console.log("MSearch "+JSON.stringify(data))
             if(data.type=LoadUpcomingMovies.fulfilled){
                 setMoviesList(data.payload.results)
             } 
          }        
         )
    };


    const movieSearch=(title)=>{
     console.log("Look for title "+JSON.stringify(title))
     setMovieSearchString(title)
    //  const filteredList = moviesList.filter(item => 
    //   item.original_title.toLowerCase().includes(title.toLowerCase()) // case-insensitive search
    //  );
    //  setFilteredMoviesList(filteredList)
    }
  

    return(
        <View style={{
          backgroundColor:'#F2F2F6'
        }}>
             <View style={styles.headerContainer}>  
                      <View style={styles.headerSearchContainer}>  
                       <TouchableOpacity onPress={()=>fetchUpMoviesSearch()}>
                         <SearchIcon/>
                       </TouchableOpacity>  
                       <TextInput 
                        placeholder="TV Shows, Movie and More"
                        onChangeText={(txt)=>{
                          movieSearch(txt)
                        }}
                        style={{
                          flex:1,
                          fontFamily:'Poppins_400Regular',
                          fontSize:14
                        }}/>
                        
                        <CloseIcon/>
                      </View> 
                      </View> 

               {movieSearchString!="" && (
                <View style={styles.moviesContainer}>
                <Text style={styles.topresultText}>
                   Top Results
                </Text> 
                <View style={styles.divider}>
                </View> 
                <FlatList
                numColumns={1}
                data={moviesList}
                keyExtractor={(item, index)=>{
                 return('search-'+index)
               }}
               renderItem={({item,index})=>{
                 return(
                   <>
                     <SearchItem
                        movie={item}
                        onMovieClicked={(movie)=>{
                           navigation.navigate('MovieOverview',{movieId:item.id})
                        }}
                     />
                   </>
                 )
               }}
               />
               </View>)}
               {movieSearchString=="" && (
               <FlatList
                 style={{
                  marginHorizontal:20,
                  marginTop:30
                 }} 
                 data={moviesGenres}
                 numColumns={2}
                 keyExtractor={(item, index)=>{
                  return('genres-'+index)
                }}
                renderItem={({item,index})=>{
                  return(
                    <>
                      <GenresItem
                         genre={item}
                         
                      />
                    </>
                  )
                }}
                />)
                 } 
                
        </View>
    )
}

const styles= StyleSheet.create({
   headerContainer:{
    backgroundColor:'#FFFFFF',
    justifyContent:'center',
    paddingHorizontal:20,
    paddingBottom:25
   },
   headerSearchContainer:{
    flexDirection:'row',
    width:'100%',
    height:52,
    borderRadius:30,
    borderColor:'#EFEFEF',
    backgroundColor:'#F2F2F6',
    alignContent:'center',
    alignItems:'center',
    paddingHorizontal:15,
    marginTop:44,
    borderWidth:1,
   },
   divider:{
    marginHorizontal:20, 
    marginTop:10, 
    marginBottom:10 ,
    height:1, 
    backgroundColor:'black', 
    opacity:0.05
  },
  topresultText:{
    color:color_tabbar,
    fontFamily:'Poppins_500Medium',
    fontSize:12
    },
  moviesContainer:{
    marginTop:30, 
    marginHorizontal:20
  }
})

export default WatchSearch