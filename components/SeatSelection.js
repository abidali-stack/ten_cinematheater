import React, { Component } from "react";
import { View, Text, ImageBackground, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { color_primary, color_tabbar } from "../utils/style_params";
import SeatVIP from '../assets/tabs/Seat_vip'
import SeatNotAvailable from '../assets/tabs/Seat_notavailable'
import SeatRegular from '../assets/tabs/Seat_regular'
import SeatSelected from '../assets/tabs/Seat_Selected'






const SeatSelection = ({dates, selectedRow, selectedColumn, setRowSelection, setColumnSelection}) => {
  
  const rows = ["1","2","3", "4", "5", "6", "7", "8", "9", "10"]  
  return (
   <View style={styles.rowContainer}>
    <View>
     <FlatList 
      style={{marginLeft:5}}
      numColumns={1}
      data={rows}
      renderItem={({item, index})=>{
        return(
          <View style={styles.spacerb}>
              <Text style={{
                fontFamily:'Poppins_600SemiBold',
                fontSize:6,
                color:color_tabbar
              }}>
                 {item}
              </Text>
            </View>
        )
      }}
      /> 

    </View>
    <View style={styles.mainContainer}>
    {dates!=null && dates.length>0 && 
    <FlatList 
      style={styles.spacer}
      numColumns={18}
      data={dates[0].shows[0].seats[0].row}
      renderItem={({item, index})=>{
        return(
         <TouchableOpacity onPress={()=>{
            setRowSelection(0)
            setColumnSelection(index)
         }}> 
          <View style={{marginLeft:(index==2 || index==16)?18:5}}>
            {selectedRow==0 && selectedColumn==index?<SeatSelected/>:
             <>
              {item.isOccupied==false && item.isVip==false && <SeatRegular></SeatRegular>}
              {item.isVip==true && <SeatVIP></SeatVIP>}
              {item.isVip!=true && item.isOccupied==true && <SeatNotAvailable></SeatNotAvailable>}            
             </>
            }
            </View>
          </TouchableOpacity>  
        )
      }}
      />
    }
    {dates!=null && dates.length>0 && 
    <FlatList 
      numColumns={22}
      style={styles.spacer}
      data={dates[0].shows[0].seats[1].row}
      renderItem={({item, index})=>{
        {console.log("2nd Seat "+JSON.stringify(item))}
        return(

          <TouchableOpacity onPress={()=>{
            setRowSelection(1)
            setColumnSelection(index)
         }}> 
          <View style={{marginLeft:(index==4 || index==18)?18:5}}>
            {selectedRow==1 && selectedColumn==index?<SeatSelected/>:
             <>
              {item.isOccupied==false && item.isVip==false && <SeatRegular></SeatRegular>}
              {item.isVip==true && <SeatVIP></SeatVIP>}
              {item.isVip!=true && item.isOccupied==true && <SeatNotAvailable></SeatNotAvailable>}            
             </>
            }
            </View>
          </TouchableOpacity>  
        )
      }}
      />
    }
    {dates!=null && dates.length>0 && 
    <FlatList 
      numColumns={22}
      style={styles.spacer}
      data={dates[0].shows[0].seats[2].row}
      renderItem={({item, index})=>{
        return(
          <TouchableOpacity onPress={()=>{
            setRowSelection(2)
            setColumnSelection(index)
         }}> 
          <View style={{marginLeft:(index==4 || index==18)?18:5}}>
            {selectedRow==2 && selectedColumn==index?<SeatSelected/>:
             <>
              {item.isOccupied==false && item.isVip==false && <SeatRegular></SeatRegular>}
              {item.isVip==true && <SeatVIP></SeatVIP>}
              {item.isVip!=true && item.isOccupied==true && <SeatNotAvailable></SeatNotAvailable>}            
             </>
            }
            </View>
          </TouchableOpacity>     
        )
      }}
      />
    }
    {dates!=null && dates.length>0 && 
    <FlatList 
      style={styles.spacer}
      numColumns={22}
      data={dates[0].shows[0].seats[3].row}
      renderItem={({item, index})=>{
        return(
          <TouchableOpacity onPress={()=>{
            setRowSelection(3)
            setColumnSelection(index)
         }}> 
          <View style={{marginLeft:(index==4 || index==18)?18:5}}>
            {selectedRow==3 && selectedColumn==index?<SeatSelected/>:
             <>
              {item.isOccupied==false && item.isVip==false && <SeatRegular></SeatRegular>}
              {item.isVip==true && <SeatVIP></SeatVIP>}
              {item.isVip!=true && item.isOccupied==true && <SeatNotAvailable></SeatNotAvailable>}            
             </>
            }
            </View>
          </TouchableOpacity>  
        )
      }}
      />
    }
    {dates!=null && dates.length>0 && 
    <FlatList 
      style={styles.spacer}
      numColumns={24}
      data={dates[0].shows[0].seats[4].row}
      renderItem={({item, index})=>{
        return(
          <TouchableOpacity onPress={()=>{
            setRowSelection(4)
            setColumnSelection(index)
         }}> 
          <View style={{marginLeft:(index==5 || index==19)?18:5}}>
            {selectedRow==4 && selectedColumn==index?<SeatSelected/>:
             <>
              {item.isOccupied==false && item.isVip==false && <SeatRegular></SeatRegular>}
              {item.isVip==true && <SeatVIP></SeatVIP>}
              {item.isVip!=true && item.isOccupied==true && <SeatNotAvailable></SeatNotAvailable>}            
             </>
            }
            </View>
          </TouchableOpacity>  
        )
      }}
      />
    }


{dates!=null && dates.length>0 && 
    <FlatList 
      style={styles.spacer}
      numColumns={24}
      data={dates[0].shows[0].seats[5].row}
      renderItem={({item, index})=>{
        return(
          <TouchableOpacity onPress={()=>{
            setRowSelection(5)
            setColumnSelection(index)
         }}> 
          <View style={{marginLeft:(index==5 || index==19)?18:5}}>
            {selectedRow==5 && selectedColumn==index?<SeatSelected/>:
             <>
              {item.isOccupied==false && item.isVip==false && <SeatRegular></SeatRegular>}
              {item.isVip==true && <SeatVIP></SeatVIP>}
              {item.isVip!=true && item.isOccupied==true && <SeatNotAvailable></SeatNotAvailable>}            
             </>
            }
            </View>
          </TouchableOpacity>  
        )
      }}
      />
    }
    {dates!=null && dates.length>0 && 
    <FlatList 
      style={styles.spacer}
      numColumns={24}
      data={dates[0].shows[0].seats[6].row}
      renderItem={({item, index})=>{
        return(
          <TouchableOpacity onPress={()=>{
            setRowSelection(6)
            setColumnSelection(index)
         }}> 
          <View style={{marginLeft:(index==5 || index==19)?18:5}}>
            {selectedRow==6 && selectedColumn==index?<SeatSelected/>:
             <>
              {item.isOccupied==false && item.isVip==false && <SeatRegular></SeatRegular>}
              {item.isVip==true && <SeatVIP></SeatVIP>}
              {item.isVip!=true && item.isOccupied==true && <SeatNotAvailable></SeatNotAvailable>}            
             </>
            }
            </View>
          </TouchableOpacity>  
        )
      }}
      />
    }


  {dates!=null && dates.length>0 && 
    <FlatList 
      style={styles.spacer}
      numColumns={24}
      data={dates[0].shows[0].seats[7].row}
      renderItem={({item, index})=>{
        return(
          <TouchableOpacity onPress={()=>{
            setRowSelection(7)
            setColumnSelection(index)
         }}> 
          <View style={{marginLeft:(index==5 || index==19)?18:5}}>
            {selectedRow==7 && selectedColumn==index?<SeatSelected/>:
             <>
              {item.isOccupied==false && item.isVip==false && <SeatRegular></SeatRegular>}
              {item.isVip==true && <SeatVIP></SeatVIP>}
              {item.isVip!=true && item.isOccupied==true && <SeatNotAvailable></SeatNotAvailable>}            
             </>
            }
            </View>
          </TouchableOpacity>  
        )
      }}
      />
    }


{dates!=null && dates.length>0 && 
    <FlatList 
      style={styles.spacer}
      numColumns={24}
      data={dates[0].shows[0].seats[8].row}
      renderItem={({item, index})=>{
        return(
          <TouchableOpacity onPress={()=>{
            setRowSelection(8)
            setColumnSelection(index)
         }}> 
          <View style={{marginLeft:(index==5 || index==19)?18:5}}>
            {selectedRow==8 && selectedColumn==index?<SeatSelected/>:
             <>
              {item.isOccupied==false && item.isVip==false && <SeatRegular></SeatRegular>}
              {item.isVip==true && <SeatVIP></SeatVIP>}
              {item.isVip!=true && item.isOccupied==true && <SeatNotAvailable></SeatNotAvailable>}            
             </>
            }
            </View>
          </TouchableOpacity>  
        )
      }}
      />
    }


  {dates!=null && dates.length>0 && 
    <FlatList 
      style={styles.spacer}
      numColumns={24}
      data={dates[0].shows[0].seats[9].row}
      renderItem={({item, index})=>{
        return(
          <TouchableOpacity onPress={()=>{
            setRowSelection(9)
            setColumnSelection(index)
         }}> 
          <View style={{marginLeft:(index==5 || index==19)?18:5}}>
            {selectedRow==9 && selectedColumn==index?<SeatSelected/>:
             <>
              {item.isOccupied==false && item.isVip==false && <SeatRegular></SeatRegular>}
              {item.isVip==true && <SeatVIP></SeatVIP>}
              {item.isVip!=true && item.isOccupied==true && <SeatNotAvailable></SeatNotAvailable>}            
             </>
            }
            </View>
          </TouchableOpacity>  
        )
      }}
      />
    }

        
     </View>
    </View>
  );
};

const styles= StyleSheet.create({
   spacer:{
      marginTop:9
   },
   spacerb:{
    marginTop:9
   },
   rowContainer:{
    flexDirection:'row',
   },
   mainContainer:{
    flexDirection:'column',
    justifyContent:'flex-start',
    justifyContent:'center',
    alignItems:'center'
  }
})


export default SeatSelection;
