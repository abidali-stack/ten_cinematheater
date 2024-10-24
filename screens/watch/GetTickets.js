import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, ImageBackground, StyleSheet , Image, TouchableOpacity, ScrollView, Modal} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { LoadMovieDetails, LoadUpcomingMovies } from "../../redux/reducers/homeReducerKit";
import { MOVIESAPIKEY } from "../../utils/storage_bukcet";
import UpcomingMovies from "../../components/UpcomingMovies";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import PlayIcon from '../../assets/tabs/play'
import HallShow from "../../components/HallShow";
import { color_tabbar } from "../../utils/style_params";


const GetTickets=()=> {

  const dispatch = useDispatch() 
  const route = useRoute()
  const {movieId, movieName, movieDate} = route.params
  const navigation = useNavigation()
  const [dates, setDates] = useState([])
  const [selectedDayIndex, setSelectedDayIndex] = useState(0)
  const [selectedShow, setSelectedSHow] = useState(0)
 
   
  useEffect(()=>{
   calculateRemainingDay()
  },[])

  const calculateRemainingDay=()=>{
    const today = new Date();
    const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0); 
    const remainingDates = [];
    for (let d = today; d <= endOfMonth; d.setDate(d.getDate() + 1)) {
      const ObjectToAdd={
        date:new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        shows:[{
           showTime:'12:30pm',
           hallName:'Cinetech+Hall1',
           seats:[{row:[{seatNumber:0, isOccupied:true, isVip:false},{seatNumber:1, isOccupied:false, isVip:false}, {seatNumber:2, isOccupied:false, isVip:false},{seatNumber:3, isOccupied:false, isVip:false},{seatNumber:4, isOccupied:false, isVip:false},{seatNumber:5, isOccupied:true, isVip:false},{seatNumber:6, isOccupied:false, isVip:false}, {seatNumber:7, isOccupied:false, isVip:false},{seatNumber:8, isOccupied:false, isVip:false},{seatNumber:9, isOccupied:false, isVip:false},{seatNumber:10, isOccupied:true, isVip:false},{seatNumber:11, isOccupied:false, isVip:false}, {seatNumber:12, isOccupied:false, isVip:false},{seatNumber:13, isOccupied:false, isVip:false},{seatNumber:14, isOccupied:false, isVip:false},{seatNumber:15, isOccupied:true, isVip:false},{seatNumber:16, isOccupied:false, isVip:false}, {seatNumber:17, isOccupied:false, isVip:false}]},
                  {row:[{seatNumber:18, isOccupied:true, isVip:false},{seatNumber:19, isOccupied:false, isVip:false}, {seatNumber:20, isOccupied:false, isVip:false},{seatNumber:21, isOccupied:false, isVip:false},{seatNumber:22, isOccupied:false, isVip:false},{seatNumber:23, isOccupied:true, isVip:false},{seatNumber:24, isOccupied:false, isVip:false}, {seatNumber:25, isOccupied:false, isVip:false},{seatNumber:26, isOccupied:false, isVip:false},{seatNumber:27, isOccupied:false, isVip:false},{seatNumber:28, isOccupied:true, isVip:false},{seatNumber:29, isOccupied:false, isVip:false}, {seatNumber:30, isOccupied:false, isVip:false},{seatNumber:31, isOccupied:false, isVip:false},{seatNumber:32, isOccupied:false, isVip:false},{seatNumber:33, isOccupied:true, isVip:false},{seatNumber:34, isOccupied:false, isVip:false}, {seatNumber:35, isOccupied:false, isVip:false},{seatNumber:36, isOccupied:false, isVip:false},{seatNumber:37, isOccupied:true, isVip:false},{seatNumber:38, isOccupied:false, isVip:false}, {seatNumber:39, isOccupied:false, isVip:false}]},
                  {row:[{seatNumber:40, isOccupied:true, isVip:false},{seatNumber:41, isOccupied:false, isVip:false}, {seatNumber:42, isOccupied:false, isVip:false},{seatNumber:43, isOccupied:false, isVip:false},{seatNumber:44, isOccupied:false, isVip:false},{seatNumber:45, isOccupied:true, isVip:false},{seatNumber:46, isOccupied:false, isVip:false}, {seatNumber:47, isOccupied:false, isVip:false},{seatNumber:48, isOccupied:false, isVip:false},{seatNumber:49, isOccupied:false, isVip:false},{seatNumber:50, isOccupied:true, isVip:false},{seatNumber:51, isOccupied:false, isVip:false}, {seatNumber:52, isOccupied:false, isVip:false},{seatNumber:53, isOccupied:false, isVip:false},{seatNumber:54, isOccupied:false, isVip:false},{seatNumber:55, isOccupied:true, isVip:false},{seatNumber:56, isOccupied:false, isVip:false}, {seatNumber:57, isOccupied:false, isVip:false},{seatNumber:58, isOccupied:false, isVip:false},{seatNumber:59, isOccupied:true, isVip:false},{seatNumber:60, isOccupied:false, isVip:false}, {seatNumber:61, isOccupied:false, isVip:false}]},
                  {row:[{seatNumber:62, isOccupied:true, isVip:false},{seatNumber:63, isOccupied:false, isVip:false}, {seatNumber:64, isOccupied:false, isVip:false},{seatNumber:65, isOccupied:false, isVip:false},{seatNumber:66, isOccupied:false, isVip:false},{seatNumber:67, isOccupied:true, isVip:false},{seatNumber:68, isOccupied:false, isVip:false}, {seatNumber:69, isOccupied:false, isVip:false},{seatNumber:70, isOccupied:false, isVip:false},{seatNumber:71, isOccupied:false, isVip:false},{seatNumber:72, isOccupied:true, isVip:false},{seatNumber:73, isOccupied:false, isVip:false}, {seatNumber:74, isOccupied:false, isVip:false},{seatNumber:75, isOccupied:false, isVip:false},{seatNumber:76, isOccupied:false, isVip:false},{seatNumber:77, isOccupied:true, isVip:false},{seatNumber:78, isOccupied:false, isVip:false}, {seatNumber:79, isOccupied:false, isVip:false},{seatNumber:80, isOccupied:false, isVip:false},{seatNumber:81, isOccupied:true, isVip:false},{seatNumber:82, isOccupied:false, isVip:false}, {seatNumber:83, isOccupied:false, isVip:false}]},
                  {row:[{seatNumber:84, isOccupied:true, isVip:false},{seatNumber:85, isOccupied:false, isVip:false}, {seatNumber:86, isOccupied:false, isVip:false},{seatNumber:87, isOccupied:false, isVip:false},{seatNumber:88, isOccupied:false, isVip:false},{seatNumber:89, isOccupied:true, isVip:false},{seatNumber:90, isOccupied:false, isVip:false}, {seatNumber:91, isOccupied:false, isVip:false},{seatNumber:92, isOccupied:false, isVip:false},{seatNumber:93, isOccupied:false, isVip:false},{seatNumber:94, isOccupied:true, isVip:false},{seatNumber:95, isOccupied:false, isVip:false}, {seatNumber:96, isOccupied:false, isVip:false},{seatNumber:97, isOccupied:false, isVip:false},{seatNumber:98, isOccupied:false, isVip:false},{seatNumber:99, isOccupied:true, isVip:false},{seatNumber:100, isOccupied:false, isVip:false}, {seatNumber:101, isOccupied:false, isVip:false},{seatNumber:102, isOccupied:false, isVip:false},{seatNumber:103, isOccupied:true, isVip:false},{seatNumber:104, isOccupied:false, isVip:false}, {seatNumber:105, isOccupied:false, isVip:false},{seatNumber:106, isOccupied:false, isVip:false}, {seatNumber:107, isOccupied:false, isVip:false}]},
                  {row:[{seatNumber:108, isOccupied:true, isVip:false},{seatNumber:109, isOccupied:false, isVip:false}, {seatNumber:110, isOccupied:false, isVip:false},{seatNumber:111, isOccupied:false, isVip:false},{seatNumber:112, isOccupied:false, isVip:false},{seatNumber:113, isOccupied:true, isVip:false},{seatNumber:114, isOccupied:false, isVip:false}, {seatNumber:115, isOccupied:false, isVip:false},{seatNumber:116, isOccupied:false, isVip:false},{seatNumber:117, isOccupied:false, isVip:false},{seatNumber:118, isOccupied:true, isVip:false},{seatNumber:119, isOccupied:false, isVip:false}, {seatNumber:120, isOccupied:false, isVip:false},{seatNumber:121, isOccupied:false, isVip:false},{seatNumber:122, isOccupied:false, isVip:false},{seatNumber:123, isOccupied:true, isVip:false},{seatNumber:124, isOccupied:false, isVip:false}, {seatNumber:125, isOccupied:false, isVip:false},{seatNumber:126, isOccupied:false, isVip:false},{seatNumber:127, isOccupied:true, isVip:false},{seatNumber:128, isOccupied:false, isVip:false}, {seatNumber:129, isOccupied:false, isVip:false},{seatNumber:130, isOccupied:false, isVip:false}, {seatNumber:131, isOccupied:false, isVip:false}]},
                  {row:[{seatNumber:132, isOccupied:true, isVip:false},{seatNumber:133, isOccupied:false, isVip:false}, {seatNumber:134, isOccupied:false, isVip:false},{seatNumber:135, isOccupied:false, isVip:false},{seatNumber:136, isOccupied:false, isVip:false},{seatNumber:137, isOccupied:true, isVip:false},{seatNumber:138, isOccupied:false, isVip:false}, {seatNumber:139, isOccupied:false, isVip:false},{seatNumber:140, isOccupied:false, isVip:false},{seatNumber:141, isOccupied:false, isVip:false},{seatNumber:142, isOccupied:true, isVip:false},{seatNumber:143, isOccupied:false, isVip:false}, {seatNumber:144, isOccupied:false, isVip:false},{seatNumber:145, isOccupied:false, isVip:false},{seatNumber:146, isOccupied:false, isVip:false},{seatNumber:147, isOccupied:true, isVip:false},{seatNumber:148, isOccupied:false, isVip:false}, {seatNumber:149, isOccupied:false, isVip:false},{seatNumber:150, isOccupied:false, isVip:false},{seatNumber:151, isOccupied:true, isVip:false},{seatNumber:152, isOccupied:false, isVip:false}, {seatNumber:153, isOccupied:false, isVip:false},{seatNumber:154, isOccupied:false, isVip:false}, {seatNumber:155, isOccupied:false, isVip:false}]},
                  {row:[{seatNumber:156, isOccupied:true, isVip:false},{seatNumber:157, isOccupied:false, isVip:false}, {seatNumber:158, isOccupied:false, isVip:false},{seatNumber:159, isOccupied:false, isVip:false},{seatNumber:160, isOccupied:false, isVip:false},{seatNumber:161, isOccupied:true, isVip:false},{seatNumber:162, isOccupied:false, isVip:false}, {seatNumber:163, isOccupied:false, isVip:false},{seatNumber:164, isOccupied:false, isVip:false},{seatNumber:165, isOccupied:false, isVip:false},{seatNumber:166, isOccupied:true, isVip:false},{seatNumber:167, isOccupied:false, isVip:false}, {seatNumber:168, isOccupied:false, isVip:false},{seatNumber:169, isOccupied:false, isVip:false},{seatNumber:170, isOccupied:false, isVip:false},{seatNumber:171, isOccupied:true, isVip:false},{seatNumber:172, isOccupied:false, isVip:false}, {seatNumber:173, isOccupied:false, isVip:false},{seatNumber:174, isOccupied:false, isVip:false},{seatNumber:175, isOccupied:true, isVip:false},{seatNumber:176, isOccupied:false, isVip:false}, {seatNumber:177, isOccupied:false, isVip:false},{seatNumber:178, isOccupied:false, isVip:false}, {seatNumber:179, isOccupied:false, isVip:false}]},
                  {row:[{seatNumber:180, isOccupied:true, isVip:false},{seatNumber:181, isOccupied:false, isVip:false}, {seatNumber:182, isOccupied:false, isVip:false},{seatNumber:183, isOccupied:false, isVip:false},{seatNumber:184, isOccupied:false, isVip:false},{seatNumber:185, isOccupied:true, isVip:false},{seatNumber:186, isOccupied:false, isVip:false}, {seatNumber:187, isOccupied:false, isVip:false},{seatNumber:188, isOccupied:false, isVip:false},{seatNumber:189, isOccupied:false, isVip:false},{seatNumber:190, isOccupied:true, isVip:false},{seatNumber:191, isOccupied:false, isVip:false}, {seatNumber:192, isOccupied:false, isVip:false},{seatNumber:193, isOccupied:false, isVip:false},{seatNumber:194, isOccupied:false, isVip:false},{seatNumber:195, isOccupied:true, isVip:false},{seatNumber:196, isOccupied:false, isVip:false}, {seatNumber:197, isOccupied:false, isVip:false},{seatNumber:198, isOccupied:false, isVip:false},{seatNumber:199, isOccupied:true, isVip:false},{seatNumber:200, isOccupied:false, isVip:false}, {seatNumber:201, isOccupied:false, isVip:false},{seatNumber:202, isOccupied:false, isVip:false}, {seatNumber:203, isOccupied:false, isVip:false}]},
                  {row:[{seatNumber:204, isOccupied:true, isVip:false},{seatNumber:205, isOccupied:false, isVip:false}, {seatNumber:206, isOccupied:false, isVip:false},{seatNumber:207, isOccupied:false, isVip:false},{seatNumber:208, isOccupied:false, isVip:false},{seatNumber:209, isOccupied:true, isVip:false},{seatNumber:210, isOccupied:false, isVip:false}, {seatNumber:211, isOccupied:false, isVip:false},{seatNumber:212, isOccupied:false, isVip:false},{seatNumber:213, isOccupied:false, isVip:false},{seatNumber:214, isOccupied:true, isVip:false},{seatNumber:215, isOccupied:false, isVip:false}, {seatNumber:216, isOccupied:false, isVip:false},{seatNumber:217, isOccupied:false, isVip:false},{seatNumber:218, isOccupied:false, isVip:false},{seatNumber:219, isOccupied:true, isVip:false},{seatNumber:220, isOccupied:false, isVip:false}, {seatNumber:221, isOccupied:false, isVip:false},{seatNumber:222, isOccupied:false, isVip:false},{seatNumber:223, isOccupied:true, isVip:false},{seatNumber:224, isOccupied:false, isVip:false}, {seatNumber:225, isOccupied:false, isVip:false},{seatNumber:226, isOccupied:false, isVip:false}, {seatNumber:227, isOccupied:false, isVip:false}]},
                ],   
          },
          {
            showTime:'13:30pm',
            hallName:'Cinetech+Hall1',
            seats:[{row:[{seatNumber:0, isOccupied:true, isVip:false},{seatNumber:1, isOccupied:false, isVip:false}, {seatNumber:2, isOccupied:false, isVip:false},{seatNumber:3, isOccupied:false, isVip:false},{seatNumber:4, isOccupied:false, isVip:false},{seatNumber:5, isOccupied:true, isVip:false},{seatNumber:6, isOccupied:false, isVip:false}, {seatNumber:7, isOccupied:false, isVip:false},{seatNumber:8, isOccupied:false, isVip:false},{seatNumber:9, isOccupied:false, isVip:false},{seatNumber:10, isOccupied:true, isVip:false},{seatNumber:11, isOccupied:false, isVip:false}, {seatNumber:12, isOccupied:false, isVip:false},{seatNumber:13, isOccupied:false, isVip:false},{seatNumber:14, isOccupied:false, isVip:false},{seatNumber:15, isOccupied:true, isVip:false},{seatNumber:16, isOccupied:false, isVip:false}, {seatNumber:17, isOccupied:false, isVip:false}]},
                   {row:[{seatNumber:18, isOccupied:true, isVip:false},{seatNumber:19, isOccupied:false, isVip:false}, {seatNumber:20, isOccupied:false, isVip:false},{seatNumber:21, isOccupied:false, isVip:false},{seatNumber:22, isOccupied:false, isVip:false},{seatNumber:23, isOccupied:true, isVip:false},{seatNumber:24, isOccupied:false, isVip:false}, {seatNumber:25, isOccupied:false, isVip:false},{seatNumber:26, isOccupied:false, isVip:false},{seatNumber:27, isOccupied:false, isVip:false},{seatNumber:28, isOccupied:true, isVip:false},{seatNumber:29, isOccupied:false, isVip:false}, {seatNumber:30, isOccupied:false, isVip:false},{seatNumber:31, isOccupied:false, isVip:false},{seatNumber:32, isOccupied:false, isVip:false},{seatNumber:33, isOccupied:true, isVip:false},{seatNumber:34, isOccupied:false, isVip:false}, {seatNumber:35, isOccupied:false, isVip:false},{seatNumber:36, isOccupied:false, isVip:false},{seatNumber:37, isOccupied:true, isVip:false},{seatNumber:38, isOccupied:false, isVip:false}, {seatNumber:39, isOccupied:false, isVip:false}]},
                   {row:[{seatNumber:40, isOccupied:true, isVip:false},{seatNumber:41, isOccupied:false, isVip:false}, {seatNumber:42, isOccupied:false, isVip:false},{seatNumber:43, isOccupied:false, isVip:false},{seatNumber:44, isOccupied:false, isVip:false},{seatNumber:45, isOccupied:true, isVip:false},{seatNumber:46, isOccupied:false, isVip:false}, {seatNumber:47, isOccupied:false, isVip:false},{seatNumber:48, isOccupied:false, isVip:false},{seatNumber:49, isOccupied:false, isVip:false},{seatNumber:50, isOccupied:true, isVip:false},{seatNumber:51, isOccupied:false, isVip:false}, {seatNumber:52, isOccupied:false, isVip:false},{seatNumber:53, isOccupied:false, isVip:false},{seatNumber:54, isOccupied:false, isVip:false},{seatNumber:55, isOccupied:true, isVip:false},{seatNumber:56, isOccupied:false, isVip:false}, {seatNumber:57, isOccupied:false, isVip:false},{seatNumber:58, isOccupied:false, isVip:false},{seatNumber:59, isOccupied:true, isVip:false},{seatNumber:60, isOccupied:false, isVip:false}, {seatNumber:61, isOccupied:false, isVip:false}]},
                   {row:[{seatNumber:62, isOccupied:true, isVip:false},{seatNumber:63, isOccupied:false, isVip:false}, {seatNumber:64, isOccupied:false, isVip:false},{seatNumber:65, isOccupied:false, isVip:false},{seatNumber:66, isOccupied:false, isVip:false},{seatNumber:67, isOccupied:true, isVip:false},{seatNumber:68, isOccupied:false, isVip:false}, {seatNumber:69, isOccupied:false, isVip:false},{seatNumber:70, isOccupied:false, isVip:false},{seatNumber:71, isOccupied:false, isVip:false},{seatNumber:72, isOccupied:true, isVip:false},{seatNumber:73, isOccupied:false, isVip:false}, {seatNumber:74, isOccupied:false, isVip:false},{seatNumber:75, isOccupied:false, isVip:false},{seatNumber:76, isOccupied:false, isVip:false},{seatNumber:77, isOccupied:true, isVip:false},{seatNumber:78, isOccupied:false, isVip:false}, {seatNumber:79, isOccupied:false, isVip:false},{seatNumber:80, isOccupied:false, isVip:false},{seatNumber:81, isOccupied:true, isVip:false},{seatNumber:82, isOccupied:false, isVip:false}, {seatNumber:83, isOccupied:false, isVip:false}]},
                   {row:[{seatNumber:84, isOccupied:true, isVip:false},{seatNumber:85, isOccupied:false, isVip:false}, {seatNumber:86, isOccupied:false, isVip:false},{seatNumber:87, isOccupied:false, isVip:false},{seatNumber:88, isOccupied:false, isVip:false},{seatNumber:89, isOccupied:true, isVip:false},{seatNumber:90, isOccupied:false, isVip:false}, {seatNumber:91, isOccupied:false, isVip:false},{seatNumber:92, isOccupied:false, isVip:false},{seatNumber:93, isOccupied:false, isVip:false},{seatNumber:94, isOccupied:true, isVip:false},{seatNumber:95, isOccupied:false, isVip:false}, {seatNumber:96, isOccupied:false, isVip:false},{seatNumber:97, isOccupied:false, isVip:false},{seatNumber:98, isOccupied:false, isVip:false},{seatNumber:99, isOccupied:true, isVip:false},{seatNumber:100, isOccupied:false, isVip:false}, {seatNumber:101, isOccupied:false, isVip:false},{seatNumber:102, isOccupied:false, isVip:false},{seatNumber:103, isOccupied:true, isVip:false},{seatNumber:104, isOccupied:false, isVip:false}, {seatNumber:105, isOccupied:false, isVip:false},{seatNumber:106, isOccupied:false, isVip:false}, {seatNumber:107, isOccupied:false, isVip:false}]},
                   {row:[{seatNumber:108, isOccupied:true, isVip:false},{seatNumber:109, isOccupied:false, isVip:false}, {seatNumber:110, isOccupied:false, isVip:false},{seatNumber:111, isOccupied:false, isVip:false},{seatNumber:112, isOccupied:false, isVip:false},{seatNumber:113, isOccupied:true, isVip:false},{seatNumber:114, isOccupied:false, isVip:false}, {seatNumber:115, isOccupied:false, isVip:false},{seatNumber:116, isOccupied:false, isVip:false},{seatNumber:117, isOccupied:false, isVip:false},{seatNumber:118, isOccupied:true, isVip:false},{seatNumber:119, isOccupied:false, isVip:false}, {seatNumber:120, isOccupied:false, isVip:false},{seatNumber:121, isOccupied:false, isVip:false},{seatNumber:122, isOccupied:false, isVip:false},{seatNumber:123, isOccupied:true, isVip:false},{seatNumber:124, isOccupied:false, isVip:false}, {seatNumber:125, isOccupied:false, isVip:false},{seatNumber:126, isOccupied:false, isVip:false},{seatNumber:127, isOccupied:true, isVip:false},{seatNumber:128, isOccupied:false, isVip:false}, {seatNumber:129, isOccupied:false, isVip:false},{seatNumber:130, isOccupied:false, isVip:false}, {seatNumber:131, isOccupied:false, isVip:false}]},
                   {row:[{seatNumber:132, isOccupied:true, isVip:false},{seatNumber:133, isOccupied:false, isVip:false}, {seatNumber:134, isOccupied:false, isVip:false},{seatNumber:135, isOccupied:false, isVip:false},{seatNumber:136, isOccupied:false, isVip:false},{seatNumber:137, isOccupied:true, isVip:false},{seatNumber:138, isOccupied:false, isVip:false}, {seatNumber:139, isOccupied:false, isVip:false},{seatNumber:140, isOccupied:false, isVip:false},{seatNumber:141, isOccupied:false, isVip:false},{seatNumber:142, isOccupied:true, isVip:false},{seatNumber:143, isOccupied:false, isVip:false}, {seatNumber:144, isOccupied:false, isVip:false},{seatNumber:145, isOccupied:false, isVip:false},{seatNumber:146, isOccupied:false, isVip:false},{seatNumber:147, isOccupied:true, isVip:false},{seatNumber:148, isOccupied:false, isVip:false}, {seatNumber:149, isOccupied:false, isVip:false},{seatNumber:150, isOccupied:false, isVip:false},{seatNumber:151, isOccupied:true, isVip:false},{seatNumber:152, isOccupied:false, isVip:false}, {seatNumber:153, isOccupied:false, isVip:false},{seatNumber:154, isOccupied:false, isVip:false}, {seatNumber:155, isOccupied:false, isVip:false}]},
                   {row:[{seatNumber:156, isOccupied:true, isVip:false},{seatNumber:157, isOccupied:false, isVip:false}, {seatNumber:158, isOccupied:false, isVip:false},{seatNumber:159, isOccupied:false, isVip:false},{seatNumber:160, isOccupied:false, isVip:false},{seatNumber:161, isOccupied:true, isVip:false},{seatNumber:162, isOccupied:false, isVip:false}, {seatNumber:163, isOccupied:false, isVip:false},{seatNumber:164, isOccupied:false, isVip:false},{seatNumber:165, isOccupied:false, isVip:false},{seatNumber:166, isOccupied:true, isVip:false},{seatNumber:167, isOccupied:false, isVip:false}, {seatNumber:168, isOccupied:false, isVip:false},{seatNumber:169, isOccupied:false, isVip:false},{seatNumber:170, isOccupied:false, isVip:false},{seatNumber:171, isOccupied:true, isVip:false},{seatNumber:172, isOccupied:false, isVip:false}, {seatNumber:173, isOccupied:false, isVip:false},{seatNumber:174, isOccupied:false, isVip:false},{seatNumber:175, isOccupied:true, isVip:false},{seatNumber:176, isOccupied:false, isVip:false}, {seatNumber:177, isOccupied:false, isVip:false},{seatNumber:178, isOccupied:false, isVip:false}, {seatNumber:179, isOccupied:false, isVip:false}]},
                   {row:[{seatNumber:180, isOccupied:true, isVip:false},{seatNumber:181, isOccupied:false, isVip:false}, {seatNumber:182, isOccupied:false, isVip:false},{seatNumber:183, isOccupied:false, isVip:false},{seatNumber:184, isOccupied:false, isVip:false},{seatNumber:185, isOccupied:true, isVip:false},{seatNumber:186, isOccupied:false, isVip:false}, {seatNumber:187, isOccupied:false, isVip:false},{seatNumber:188, isOccupied:false, isVip:false},{seatNumber:189, isOccupied:false, isVip:false},{seatNumber:190, isOccupied:true, isVip:false},{seatNumber:191, isOccupied:false, isVip:false}, {seatNumber:192, isOccupied:false, isVip:false},{seatNumber:193, isOccupied:false, isVip:false},{seatNumber:194, isOccupied:false, isVip:false},{seatNumber:195, isOccupied:true, isVip:false},{seatNumber:196, isOccupied:false, isVip:false}, {seatNumber:197, isOccupied:false, isVip:false},{seatNumber:198, isOccupied:false, isVip:false},{seatNumber:199, isOccupied:true, isVip:false},{seatNumber:200, isOccupied:false, isVip:false}, {seatNumber:201, isOccupied:false, isVip:false},{seatNumber:202, isOccupied:false, isVip:false}, {seatNumber:203, isOccupied:false, isVip:false}]},
                   {row:[{seatNumber:204, isOccupied:true, isVip:false},{seatNumber:205, isOccupied:false, isVip:false}, {seatNumber:206, isOccupied:false, isVip:false},{seatNumber:207, isOccupied:false, isVip:false},{seatNumber:208, isOccupied:false, isVip:false},{seatNumber:209, isOccupied:true, isVip:false},{seatNumber:210, isOccupied:false, isVip:false}, {seatNumber:211, isOccupied:false, isVip:false},{seatNumber:212, isOccupied:false, isVip:false},{seatNumber:213, isOccupied:false, isVip:false},{seatNumber:214, isOccupied:true, isVip:false},{seatNumber:215, isOccupied:false, isVip:false}, {seatNumber:216, isOccupied:false, isVip:false},{seatNumber:217, isOccupied:false, isVip:false},{seatNumber:218, isOccupied:false, isVip:false},{seatNumber:219, isOccupied:true, isVip:false},{seatNumber:220, isOccupied:false, isVip:false}, {seatNumber:221, isOccupied:false, isVip:false},{seatNumber:222, isOccupied:false, isVip:false},{seatNumber:223, isOccupied:true, isVip:false},{seatNumber:224, isOccupied:false, isVip:false}, {seatNumber:225, isOccupied:false, isVip:false},{seatNumber:226, isOccupied:false, isVip:false}, {seatNumber:227, isOccupied:false, isVip:false}]},
                 ],   
           },
        ]          
      }
      remainingDates.push(ObjectToAdd); // Add a copy of the date to the array
    }
    setDates(remainingDates)
  }


  

    return(
      <> 
   {dates!=undefined &&   
  <View style={{
          backgroundColor:'#F6F6FA',
          flexDirection:'column',
          height:'100%'
        }}>
          <Text style={styles.dateText}>
            Date
           </Text>
          <ScrollView horizontal style={{ marginTop:14, marginLeft:13}}>
             {dates.map((item, index)=>{   
              return(
               <TouchableOpacity onPress={()=>{
                setSelectedDayIndex(index)
               }}> 
                <View style={{backgroundColor:selectedDayIndex==index?'#61C3F2':'#A6A6A61A', borderRadius:10,marginLeft:7, paddingHorizontal:16, paddingVertical:6}}>
                   <Text style={[{color:selectedDayIndex==index?'white':'black'}, styles.dateday]}>
                    {item.date.toString()}
                  </Text>
                </View> 
                </TouchableOpacity> 
              )
             })}
          </ScrollView>  

          {dates[selectedDayIndex]!=null && <ScrollView horizontal style={{ marginTop:40, marginLeft:10}}>
             {dates[selectedDayIndex].shows.map((item, index)=>{
              return(
                <HallShow
                  hall={item}
                  selectedShow={selectedShow}
                  index={index}
                  setSelectedShow={(index)=>{
                    setSelectedSHow(index)
                  }}
                />
              )
             })}
          </ScrollView>  }

          <View style={{
            flex:1,
            justifyContent:'flex-end'
          }}>
            <TouchableOpacity 
            onPress={()=>{
              navigation.navigate('ConfirmSeat', {movieId:movieId, movieName:movieName, movieDate:movieDate})
            
            }}
            style={{
            paddingVertical:9,
            height:50,
            backgroundColor:'#61C3F2',
            marginBottom:26,
            borderRadius:10,
            marginHorizontal:26,
            flexDirection:'column',
            justifyContent:'center',
            alignContent:'center',
            alignItems:'center'
          }}>
            <Text style={{
              color:'white',
              fontSize:14,
              fontFamily:'Poppins_600SemiBold'
            }}>
               Select Seats
            </Text>
          </TouchableOpacity>

          </View>
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
  dateText:{
      color:color_tabbar,
      fontFamily:'Poppins_500Medium',
      fontSize:16,
      marginTop:94,
      marginLeft:20
  },
  dateday:{
    fontFamily:'Poppins_500Medium',
    fontSize:12
  }
})


export default GetTickets