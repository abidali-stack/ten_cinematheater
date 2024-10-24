import React, { Component } from "react";
import { View, Text, ImageBackground, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { color_highlighter, color_primary, color_tabbar } from "../utils/style_params";
import SeatVIP from '../assets/tabs/hall_vip'
import SeatNotAvailable from '../assets/tabs/hall_notavailable'
import SeatRegular from '../assets/tabs/hall_regular'
import HallScreen from '../assets/tabs/hallscreen'
import SeatSelected from '../assets/tabs/Seat_Selected'






const HallShow = ({hall, selectedShow, index, setSelectedShow}) => {
  {console.log("selectedShow "+JSON.stringify(selectedShow))}
  {console.log("selectedindex "+JSON.stringify(index))}
  return (
   <TouchableOpacity style={styles.colContainer} onPress={()=>{
       setSelectedShow(index)  
   }}>
     <View style={{flexDirection:'row', marginBottom:5}}>
      <Text style={styles.hallTime}>
        {hall.showTime}
      </Text>
      <Text style={styles.hallName}>
        {hall.hallName}
      </Text>
     </View>  
     
     <View style={[styles.mainContainer, {borderColor:index==selectedShow?color_highlighter:'#202C431A'}]}>
    <HallScreen/>
    {hall!=null  && 

    <FlatList 
      style={styles.spacer}
      numColumns={18}
      data={hall.seats[0].row}
      renderItem={({item, index})=>{
        return(
           <View style={{marginLeft:(index==2 || index==16)?8:2.5}}>
            <>
              {item.isOccupied==false && item.isVip==false && <SeatRegular></SeatRegular>}
              {item.isVip==true && <SeatVIP></SeatVIP>}
              {item.isVip!=true && item.isOccupied==true && <SeatNotAvailable></SeatNotAvailable>}            
             </>
            </View> 
        )
      }}
      />
    }
    {hall!=null && 
    <FlatList 
      numColumns={22}
      style={styles.spacer}
      data={hall.seats[1].row}
      renderItem={({item, index})=>{
        {console.log("2nd Seat "+JSON.stringify(item))}
        return(

          <View style={{marginLeft:(index==4 || index==18)?8:2.5}}>
            <>
              {item.isOccupied==false && item.isVip==false && <SeatRegular></SeatRegular>}
              {item.isVip==true && <SeatVIP></SeatVIP>}
              {item.isVip!=true && item.isOccupied==true && <SeatNotAvailable></SeatNotAvailable>}            
             </>
            </View>
        )
      }}
      />
    }
    {hall!=null && 
    <FlatList 
      numColumns={22}
      style={styles.spacer}
      data={hall.seats[2].row}
      renderItem={({item, index})=>{
        return(
          
          <View style={{marginLeft:(index==4 || index==18)?8:2.5}}>
            <>
              {item.isOccupied==false && item.isVip==false && <SeatRegular></SeatRegular>}
              {item.isVip==true && <SeatVIP></SeatVIP>}
              {item.isVip!=true && item.isOccupied==true && <SeatNotAvailable></SeatNotAvailable>}            
             </>
            </View>  
        )
      }}
      />
    }
    {hall!=null && 
    <FlatList 
      style={styles.spacer}
      numColumns={22}
      data={hall.seats[3].row}
      renderItem={({item, index})=>{
        return(
          
          <View style={{marginLeft:(index==4 || index==18)?8:2.5}}>
            <>
              {item.isOccupied==false && item.isVip==false && <SeatRegular></SeatRegular>}
              {item.isVip==true && <SeatVIP></SeatVIP>}
              {item.isVip!=true && item.isOccupied==true && <SeatNotAvailable></SeatNotAvailable>}            
             </>
            </View> 
        )
      }}
      />
    }
    {hall!=null && 
    <FlatList 
      style={styles.spacer}
      numColumns={24}
      data={hall.seats[4].row}
      renderItem={({item, index})=>{
        return(
          
          <View style={{marginLeft:(index==5 || index==19)?8:2.5}}>
            <>
              {item.isOccupied==false && item.isVip==false && <SeatRegular></SeatRegular>}
              {item.isVip==true && <SeatVIP></SeatVIP>}
              {item.isVip!=true && item.isOccupied==true && <SeatNotAvailable></SeatNotAvailable>}            
             </>
            </View>
        )
      }}
      />
    }


{hall!=null &&  
    <FlatList 
      style={styles.spacer}
      numColumns={24}
      data={hall.seats[5].row}
      renderItem={({item, index})=>{
        return(
           
          <View style={{marginLeft:(index==5 || index==19)?8:2.5}}>
            <>
              {item.isOccupied==false && item.isVip==false && <SeatRegular></SeatRegular>}
              {item.isVip==true && <SeatVIP></SeatVIP>}
              {item.isVip!=true && item.isOccupied==true && <SeatNotAvailable></SeatNotAvailable>}            
             </>
            </View> 
        )
      }}
      />
    }
    {hall!=null &&  
    <FlatList 
      style={styles.spacer}
      numColumns={24}
      data={hall.seats[6].row}
      renderItem={({item, index})=>{
        return(
          
          <View style={{marginLeft:(index==5 || index==19)?8:2.5}}>
            <>
              {item.isOccupied==false && item.isVip==false && <SeatRegular></SeatRegular>}
              {item.isVip==true && <SeatVIP></SeatVIP>}
              {item.isVip!=true && item.isOccupied==true && <SeatNotAvailable></SeatNotAvailable>}            
             </>
            </View>
        )
      }}
      />
    }


  {hall!=null && 
    <FlatList 
      style={styles.spacer}
      numColumns={24}
      data={hall.seats[7].row}
      renderItem={({item, index})=>{
        return(
           
          <View style={{marginLeft:(index==5 || index==19)?8:2.5}}>
            <>
              {item.isOccupied==false && item.isVip==false && <SeatRegular></SeatRegular>}
              {item.isVip==true && <SeatVIP></SeatVIP>}
              {item.isVip!=true && item.isOccupied==true && <SeatNotAvailable></SeatNotAvailable>}            
             </>
            </View>
        )
      }}
      />
    }


{hall!=null && 
    <FlatList 
      style={styles.spacer}
      numColumns={24}
      data={hall.seats[8].row}
      renderItem={({item, index})=>{
        return(
           
          <View style={{marginLeft:(index==5 || index==19)?8:2.5}}>
             <>
              {item.isOccupied==false && item.isVip==false && <SeatRegular></SeatRegular>}
              {item.isVip==true && <SeatVIP></SeatVIP>}
              {item.isVip!=true && item.isOccupied==true && <SeatNotAvailable></SeatNotAvailable>}            
             </>
            </View> 
        )
      }}
      />
    }


  {hall!=null &&  
    <FlatList 
      style={styles.spacer}
      numColumns={24}
      data={hall.seats[9].row}
      renderItem={({item, index})=>{
        return(
         
          <View style={{marginLeft:(index==5 || index==19)?8:2.5}}>
             <>
              {item.isOccupied==false && item.isVip==false && <SeatRegular></SeatRegular>}
              {item.isVip==true && <SeatVIP></SeatVIP>}
              {item.isVip!=true && item.isOccupied==true && <SeatNotAvailable></SeatNotAvailable>}            
             </>
           
          </View>
        )
      }}
      />
    }

        
     </View> 
     <Text style={[styles.hallName, {marginTop:10}]}>
        From <Text style={styles.hallTime}>50$</Text> or <Text style={styles.hallTime}>2500</Text> bonuses
      </Text>
    </TouchableOpacity>
  );
};

const styles= StyleSheet.create({
   spacer:{
      marginTop:4
   },
   spacerb:{
    marginTop:9
   },
   colContainer:{
    flexDirection:'column',
    marginLeft:10
   },
   mainContainer:{
    flexDirection:'column',
    justifyContent:'flex-start',
    justifyContent:'center',
    alignItems:'center',
    width:250,
    borderWidth:1,
    borderRadius:10,
    paddingHorizontal:52,
    paddingVertical:16

  },
  hallName:{
    color:'#8F8F8F',
    fontFamily:'Poppins_400Regular',
    fontSize:12,
    marginLeft:9
 },
 hallTime:{
  color:color_tabbar,
  fontFamily:'Poppins_500Medium',
  fontSize:12
}
})


export default HallShow;
