import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import {  AntDesign,  Feather,FontAwesome, MaterialCommunityIcons  } from "@expo/vector-icons";

export default function Details({ route, navigation }) {
  const { title, otherParam, pastorName, message  } = route.params;
  return (
   <View style={styles.container}>

    <View  style={styles.barnerContainer}>
            <Image  style={{ resizeMode:"contain", height:200, width:200, }} source={otherParam}/> 
    </View>

    <View  style={styles.detailsContainer}>
      <Text style={styles.title}>{route.params.title}</Text>
      <Text style={styles.name}>{route.params.pastorName}</Text>
      <Text style={styles.message}>{route.params.message}</Text>        
    </View>

    <View  style={styles.iconsMainContainer}>
      <View  style={styles.iconsContainer}>
      <View  style={styles.icons}>
        <FontAwesome  name="bookmark" size={25} color="#fff"  />
        </View>
        <Text>Bookmark</Text>
      </View>
      <View  style={styles.iconsContainer}>
      <View  style={styles.icons}>
        <AntDesign  name="like1" size={25} color="#fff"  />
        </View>
        <Text>Like</Text>
      </View>
      <View  style={styles.iconsContainer}>
      <View  style={styles.icons}>
        <MaterialCommunityIcons  name="note-edit-outline" size={25} color="#fff"  />
        </View>
        <Text>Bookmark</Text>
      </View>
      <View  style={styles.iconsContainer}>
        <View  style={styles.icons}>
        <MaterialCommunityIcons  name="share-all" size={25} color="#fff"  />
        </View>
      
        <Text>Bookmark</Text>
      </View>
    </View>

         
   </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',  
    paddingHorizontal:25

  },
barnerContainer:{
  flex:0.3,
  backgroundColor:"red",
  marginTop:90,
  borderRadius:5  
},
detailsContainer:{
  flex:0.4,
 
},
title:{
  fontWeight:"700",
  fontSize:20,
  marginTop:20,
  color:"#000000"
  
  

},
name:{
  fontWeight:"350",
  fontSize:17,
  color:"#000000",
  marginTop:10
 
  

},
message:{
  fontWeight:"400",
  fontSize:17,
  marginTop:40,
},

iconsMainContainer:{
  flex:0.3,
  flexDirection:"row",
  justifyContent:"space-evenly"
},

iconsContainer:{
  alignItems:"center"
},


icons:{
  padding:10,
 borderRadius:50,
backgroundColor:"#0174DF"
}



});
