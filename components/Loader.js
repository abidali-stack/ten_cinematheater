import React, { Component } from "react";
import { View, Text, ImageBackground, TouchableOpacity , Modal,StyleSheet, ActivityIndicator} from "react-native";
import { color_primary } from "../utils/style_params";
import { LinearGradient } from 'expo-linear-gradient';




const Loader=({loading})=> {
   return (
    <View style={styles.container}>
      <Modal
        transparent={true}
        animationType={'none'}
        visible={loading}>
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorWrapper}>
            <ActivityIndicator
              animating={loading}
              color="blue"
              />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles= StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    backgroundColor:'transparent'
  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040'
  },
  activityIndicatorWrapper: {
    backgroundColor: 'transparent',

    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
})


export default Loader;
