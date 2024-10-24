import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { LoadUpcomingMovies } from "../../redux/reducers/homeReducerKit";
import { MOVIESAPIKEY } from "../../utils/storage_bukcet";
import UpcomingMovies from "../../components/UpcomingMovies";
import { useNavigation } from "@react-navigation/native";


const Dashboard=()=> {

  

    return(
        <View style={{
          backgroundColor:'#F6F6FA'
        }}>
           
        </View>
    )
}

export default Dashboard