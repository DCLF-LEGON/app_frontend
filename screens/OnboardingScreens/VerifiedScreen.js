import * as React from 'react';
import { Link, NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import {MaterialCommunityIcons,MaterialIcons, Ionicons, AntDesign, FontAwesome} from "@expo/vector-icons";

export default function Verified({navigation}) {
    return (
       
        
            <View style={styles.container}>

                <View style={styles.header}>
                   
                    <Text style={styles.text_header}>VERIFIED</Text>
                </View>
                 <View style={styles.footer}>
                 <MaterialIcons style={styles.footer_icon} name="verified" size={80} color="#0174DF" />
                 <Text style={{fontSize:20,alignSelf:"center", marginTop:40}}>Your account is succesfully <Text style={{fontWeight:"bold"}}>verified!</Text></Text>

                 <TouchableOpacity style={styles.continueButton}>
                        <Text style={styles.continueText}>CONTINUE</Text>
                    </TouchableOpacity>
                </View>

 

            </View>
      
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0174DF',
    },
    header: {
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 50,
        backgroundColor: '#0174DF',
         
    },

    text_header: {
        color: '#fff',
        fontSize: 40,
        marginTop: 40,
        fontFamily: 'Avenir-Medium',
        alignSelf: "center",
        fontWeight:"700",
        fontStyle:"normal",
         
    },
    header_icon:{
        marginTop:70
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
              
    },
    footer_icon:{
        alignSelf:"center",
        marginTop:100

    },
    continueButton: {
        paddingVertical: 10,
        backgroundColor: "#0174DF",
        alignItems: "center",
        marginHorizontal: 50,
        borderRadius: 10,
        marginTop:80

    },
    continueText: {
        fontWeight: 'bold',
        color: "#fff",
        fontSize: 20
    },
  
     
});
