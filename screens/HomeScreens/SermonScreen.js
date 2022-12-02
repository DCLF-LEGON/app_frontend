import * as React from 'react';

import 'react-native-gesture-handler';
import { StyleSheet, Text, View, ScrollView, ImageBackground,Image, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
 


export default function Sermons({ navigation }) {
 
  const barner =require[('../../assets/images/barner.jpg')]
 
  return (
   <ScrollView  style={styles.container} >
     <Searchbar
         style={styles.searBox}
      placeholder="Search"
      clearAccessibilityLabel='clear'
     iconColor='#0174DF'
     
    />

   
 
    <Text style={{fontSize:15, marginVertical:25, lineHeight: 18, fontWeight:"400"}}> Welcome to the <Text style={{color:"#0174DF", fontWeight:"700",lineHeight: 18,}}> DLCF-LEGON APP</Text></Text>
   
 
  <TouchableWithoutFeedback
    
    onPress={() =>{
        navigation.navigate('Details', {
          otherParam:{barner},
          title: "THE CONFORT OF CHRIST",
          pastorName: "the name of the pastor",
 
          message:
          "The God we serve is faithful, truthful and cannot turn His back on us if we abide by His word. He is the God who cannot fail nbrv,bjbjghbsgjsbbfjhbjbfhbvhbvbbbfjvbhjh hrgbjghjbhtj htjghtighl hguthgtuh tuhguth ghtruhithg ghiuhiuhgitrlgiuthlh tghtughtru thtughtthgh utghghtigh uhhtithiut bdzhjfdhjhdf dhgjhdghfbhhjhsjhjvhdfjhflhjh fbghbbhjdfbvhfbhjdfsbvhjsdf hghhfklsjhliuhskbsdggfhdgsh fgvsfhgghgfsdgfusdgfuygf fgsurkfyguygfuygsuygfsruy fhgfugskhsghghgd gksuyguyghfgrshbfjhsgruysrehjrgr hghjgsjhgdfhghgfhdfhhjvbjdhb fhbhjgfbjhbjhbfjhbsdfjhbvhfd dfbjbhjhbvjhbdfjdhb.",
 
      
      });
    }}
  >
    <ImageBackground source={barner} resizeMode="cover" style={styles.image}>
 
      <Text style={styles.text} >MONDAY</Text>
      <Text style={styles.text2} >BIBLE STUDY</Text>
      
    </ImageBackground>
    </TouchableWithoutFeedback>
      
   
 

    <Text  style={styles.header}>RECENTLY WATCHED SERMONS</Text>

    <ScrollView  horizontal={true}  style={styles.mainImageContainer}>
      <View style={styles.imagecontainer}> 
 
         <Image source={require('../../assets/images/recently1.jpg')} style={{ height: 99.01, width: 93,borderRadius: 5  }}   />    
      </View>
      <View style={styles.imagecontainer}>  
      <Image source={require('../../assets/images/recently2.jpg')} style={{  height: 99.01, width: 93,borderRadius: 5 }}   />    
      </View>
      <View style={styles.imagecontainer}>  
      <Image source={require('../../assets/images/recently4.jpg')} style={{ height: 99.01, width: 93,borderRadius: 5  }}   />    
      </View>
      <View style={styles.imagecontainer}>  
      <Image source={require('../../assets/images/recently3.jpg')} style={{  height: 99.01, width: 93,borderRadius: 5  }}   />    
      </View>
      <View style={styles.imagecontainer}>  
      <Image source={require('../../assets/images/recently3.jpg')} style={{  height: 99.01, width: 93,borderRadius: 5  }}   />    
      </View>
      <View style={styles.imagecontainer}>  
      <Image source={require('../../assets/images/recently3.jpg')} style={{  height: 99.01, width: 93,borderRadius: 5  }}   />    
      </View>
      <View style={styles.imagecontainer}>  
      <Image source={require('../../assets/images/recently3.jpg')} style={{  height: 99.01, width: 93,borderRadius: 5  }}   />    
 
      </View>
      
    </ScrollView>




    <Text  style={styles.header}>POPULER SERMONS</Text>

<ScrollView  horizontal={true}  style={styles.mainImageContainer}>
  <View style={styles.imagecontainer}> 
 
     <Image source={require('../../assets/images/popular1.jpg')} style={{  height: 99.01, width: 93,borderRadius: 5  }}   />    
  </View>
  <View style={styles.imagecontainer}>  
  <Image source={require('../../assets/images/popular2.jpg')} style={{  height: 99.01, width: 93,borderRadius: 5  }}   />    
  </View>
  <View style={styles.imagecontainer}>  
  <Image source={require('../../assets/images/populer3.jpg')} style={{  height: 99.01, width: 93,borderRadius: 5  }}   />    
  </View>
  <View style={styles.imagecontainer}>  
  <Image source={require('../../assets/images/recently3.jpg')} style={{ height: 99.01, width: 93,borderRadius: 5 }}   />    
  </View>
  <View style={styles.imagecontainer}>  
  <Image source={require('../../assets/images/recently3.jpg')} style={{  height: 99.01, width: 93,borderRadius: 5 }}   />    
  </View>
  <View style={styles.imagecontainer}>  
  <Image source={require('../../assets/images/recently3.jpg')} style={{  height: 99.01, width: 93,borderRadius: 5  }}   />    
  </View>
  <View style={styles.imagecontainer}>  
  <Image source={require('../../assets/images/recently3.jpg')} style={{  height: 99.01, width: 93,borderRadius: 5  }}   />    
 
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
 
      height:30,
      width:"100%",
 
       borderWidth:1,
      borderColor:"#0174DF",
      marginTop:20,
      borderRadius:5,
      shadowColor:'#fff'
      
  },

 
  
  image: {
    width:"100%",
    height:188,
    borderRadius:5,

  },

  text: {
    color: "#FF6B00",
    top: 50,
    fontSize: 24,
    lineHeight: 29,
    fontWeight: "700",     
  },
  text2: {
    color: "white",
    top: 30,
    fontSize: 24,
    lineHeight: 29,
    fontWeight: "700",
     marginTop:1

        
  },
  header:{
    fontStyle:"normal",
    fontSize:15,
    fontWeight:"400",
    lineHeight:18,
    marginTop:20,
    color:"#000000"
    
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
  
  mainImageContainer:{
    flexDirection:"row",
  },
  imagecontainer:{
    borderRadius:5,
    backgroundColor:"#fff",
 
    marginHorizontal:5,
    marginVertical:10,
    padding:0
    
  }

});
