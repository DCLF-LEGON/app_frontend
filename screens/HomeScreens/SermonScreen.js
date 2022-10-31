import * as React from 'react';

import 'react-native-gesture-handler';
import { StyleSheet, Text, View, ScrollView, ImageBackground,Image, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
 


export default function Sermons({ navigation }) {
  const barner =require('../../assets/images/3.png')
  return (
   <ScrollView  style={styles.container} >
     <Searchbar
         style={styles.searBox}
      placeholder="Search"
      clearAccessibilityLabel='clear'
     iconColor='#0174DF'
     
    />

   
    <Text style={{fontSize:18, marginVertical:25}}> Welcome to the <Text style={{color:"#0174DF", fontWeight:"700"}}> DLCF-LEGON APP</Text></Text>
   
    <View >
  <TouchableWithoutFeedback
    
    onPress={() =>{
        navigation.navigate('Details', {
          otherParam:{barner},
          title: "THE CONFORT OF CHRIST",
          pastorName: "the name of the pastor",
          message:"the message goes here jjgjnsjk nkjnbkjgnkjg fnbkjgfnbgfnbk jgfnbkjnfgkbngkj ngndjndj",
      
      });
    }}
  >
    <ImageBackground source={barner} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>MONDAY BIBLE STUDY</Text>
    </ImageBackground>
    </TouchableWithoutFeedback>
      
    </View >

    <Text  style={styles.header}>RECENTLY WATCHED SERMONS</Text>

    <ScrollView  horizontal={true}  style={styles.mainImageContainer}>
      <View style={styles.imagecontainer}> 
         <Image source={require('../../assets/images/recently1.jpg')} style={{ height: 100, width: 99,  }}   />    
      </View>
      <View style={styles.imagecontainer}>  
      <Image source={require('../../assets/images/recently2.jpg')} style={{ height: 100, width: 99,  }}   />    
      </View>
      <View style={styles.imagecontainer}>  
      <Image source={require('../../assets/images/recently4.jpg')} style={{ height: 100, width: 99,  }}   />    
      </View>
      <View style={styles.imagecontainer}>  
      <Image source={require('../../assets/images/recently3.jpg')} style={{ height: 100, width: 99,  }}   />    
      </View>
      <View style={styles.imagecontainer}>  
      <Image source={require('../../assets/images/recently3.jpg')} style={{ height: 100, width: 99,  }}   />    
      </View>
      <View style={styles.imagecontainer}>  
      <Image source={require('../../assets/images/recently3.jpg')} style={{ height: 100, width: 99,  }}   />    
      </View>
      <View style={styles.imagecontainer}>  
      <Image source={require('../../assets/images/recently3.jpg')} style={{ height: 100, width: 99,  }}   />    
      </View>
      
    </ScrollView>




    <Text  style={styles.header}>POPULER SERMONS</Text>

<ScrollView  horizontal={true}  style={styles.mainImageContainer}>
  <View style={styles.imagecontainer}> 
     <Image source={require('../../assets/images/popular1.jpg')} style={{ height: 100, width: 99,  }}   />    
  </View>
  <View style={styles.imagecontainer}>  
  <Image source={require('../../assets/images/popular2.jpg')} style={{ height: 100, width: 99,  }}   />    
  </View>
  <View style={styles.imagecontainer}>  
  <Image source={require('../../assets/images/populer3.jpg')} style={{ height: 100, width: 99,  }}   />    
  </View>
  <View style={styles.imagecontainer}>  
  <Image source={require('../../assets/images/recently3.jpg')} style={{ height: 100, width: 99,  }}   />    
  </View>
  <View style={styles.imagecontainer}>  
  <Image source={require('../../assets/images/recently3.jpg')} style={{ height: 100, width: 99,  }}   />    
  </View>
  <View style={styles.imagecontainer}>  
  <Image source={require('../../assets/images/recently3.jpg')} style={{ height: 100, width: 99,  }}   />    
  </View>
  <View style={styles.imagecontainer}>  
  <Image source={require('../../assets/images/recently3.jpg')} style={{ height: 100, width: 99,  }}   />    
  </View>
  
</ScrollView>
      
   </ScrollView>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal:20
   
  },
  searBox:{
      height:45,
       borderWidth:1,
      borderColor:"#0174DF",
      marginTop:20,
      borderRadius:5,
      shadowColor:'#fff'
      
  },

  MainBarner:{
    flex: 1,
    textAlign:"center",
    backgroundColor:"red"
    
    
  },
  image: {
   borderRadius:5,
   height:200
  },

  text: {
    color: "white",
    fontSize: 24,
    lineHeight: 50,
    fontWeight: "700",
     height:200,
     justifyContent:"center",
     marginTop:40
        
  },
  header:{
    fontSize:17,
    fontWeight:"450",
    lineHeight:18.29,
    marginTop:20
  },
  mainImageContainer:{
    flexDirection:"row",
  },
  imagecontainer:{
    height:100,
    width:99,
    borderRadius:5,
    backgroundColor:"blue",
    marginHorizontal:5,
    marginVertical:10,
    padding:0
    
  }

});
