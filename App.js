import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {ImageBackground, StyleSheet, Text, Paragraph, View, } from 'react-native';
import splas from './assets/splash.png'
import imgbg from "./assets/img/bg1.jpg"

const image = {uri: "https://i.pinimg.com/564x/a6/68/5d/a6685dd381bbaea426876b3ed3ff540f.jpg" };

export default function App() {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.img}>
    <View style={styles.container}>
      <Text style={styles.text}>To: T Modise
      </Text>
      <Text style={styles.text2}>I wish you a Happy Birthday my friend,
        <Text style={styles.text3}>If You reading this it means I am now working on React Native</Text>
      </Text>
      
      <StatusBar style="auto" />
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text: {
    fontSize: '1.1em',
    color: 'black',
    textDecorationLine:'underline',
    textDecorationColor:'red',
    paddingTop:'80px',
    paddingBottom:'20px',
    paddingRight:'95px',
  },
  text2: {
    color:'black',
    paddingBottom:'150px',
    width:'50vw',
    fontSize: '1em',
  },
  text3: {
    color:'red',
    paddingTop:'40px'
  },
  img: {
    height: '100%',
  }
  
});
