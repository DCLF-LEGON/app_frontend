import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Main({navigation}) {
  return (
  
    <View style={styles.container}>

     <View style={styles.imageContainer}>
        <Image source={require('../../assets/legon.jpg')} style={{ height: 100, width: 100,}} resizeMode="center" />
        <Image source={require('../../assets/dlcf.jpeg')} style={{ height: 100, width: 100,}} resizeMode="center" />    
     </View>

     <Text style={styles.heroText}>DLCF-LEGON</Text>
     <TouchableOpacity style={styles.signupButton}
       onPress={() => navigation.navigate('Signup')}
     >
        <Text style={styles.signupText}>SIGN UP</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>LOG IN</Text>
     </TouchableOpacity>

     <TouchableOpacity>
        <Text style={styles.skip}>Skip for now</Text>
     </TouchableOpacity>



    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
     justifyContent:"center",
     alignItems:"center"
  
  },
  imageContainer:{
    flexDirection:"row",
    justifyContent:"space-evenly"
  },

  heroText:{
    fontWeight:"bold",
    fontSize:20,
    alignSelf:"center",
    marginTop:30
  },

  signupButton:{
     paddingVertical: 10,
     backgroundColor:"#0174DF",
     alignItems:"center",
     paddingHorizontal:70,
     borderRadius: 10,
     marginTop:120
     
  },
  signupText: {
        fontWeight: 'bold',
        color:"#fff",
        fontSize:20
  },
  loginButton:{
    paddingVertical: 10,
    backgroundColor:"#fff",
    alignItems:"center",
    paddingHorizontal:70,
    borderRadius: 10,
    borderWidth:1,
    borderColor:"#0174DF",
    top:20
    
 },
 loginText: {
       fontWeight: 'bold',
       color:"#0174DF",
       fontSize:20
 },
 skip: {
    fontSize:19,
    color:"#0174DF",
    marginTop: 40,
    alignSelf:"center",
    fontWeight:'bold'
 }

});
