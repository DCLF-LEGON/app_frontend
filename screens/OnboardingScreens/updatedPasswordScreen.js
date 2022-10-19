import * as React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, } from 'react-native';
import { MaterialIcons,  } from "@expo/vector-icons";

export default function UpdatedPassword({navigation}) {
    return (
       
        
            <View style={styles.container}>

                <View style={styles.header}>
                   
                    <Text style={styles.text_header}>RESET PASSWORD</Text>
                </View>
                 <View style={styles.footer}>
                 <MaterialIcons style={styles.footer_icon} name="verified" size={80} color="#0174DF" />
                 <Text style={{fontSize:20,alignSelf:"center", marginTop:40}}>Password succesfully  <Text style={{fontWeight:"bold"}}> Updated!</Text></Text>

                 <TouchableOpacity style={styles.loginButton}
                 onPress={() => navigation.navigate('Login')}
                 >
                        <Text style={styles.loginText}>LOGIN</Text>
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
        textAlign:"center",
        top: 50
         
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
    loginButton: {
        paddingVertical: 10,
        backgroundColor: "#0174DF",
        alignItems: "center",
        marginHorizontal: 50,
        borderRadius: 10,
        marginTop:80

    },
    loginText: {
        fontWeight: 'bold',
        color: "#fff",
        fontSize: 20
    },
  
     
});
