import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import {MaterialCommunityIcons,MaterialIcons, Ionicons, AntDesign, FontAwesome} from "@expo/vector-icons";

export default function Login({navigation}) {
    return (
       
        
            <View style={styles.container}>
                <KeyboardAvoidingView></KeyboardAvoidingView>
                <View style={styles.header}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Main')}
                    >
                    <AntDesign style={styles.header_icon} name="left" size={20} color="#fff" />
                    </TouchableOpacity>
                   
                    <Text style={styles.text_header}>LOGIN</Text>
                </View>
                <View style={styles.footer}>
                    <ScrollView>
                        <Text style={styles.text_footer}>Email Address</Text>
                        <TextInput
                            placeholder="Type your e-mail"
                            placeholderTextColor="#666666"
                            style={styles.textInput}
                            autoCapitalize="none"

                        />

                       

                        <Text style={styles.text_footer}>Enter your Password</Text>
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor="#666666"
                            style={styles.textInput}
                            autoCapitalize="none"

                        />

                       


                        <TouchableOpacity style={styles.submitButton}
                        onPress={() => navigation.navigate('Verify')}
                        >
                            <Text style={styles.submitText}>LOGIN</Text>
                        </TouchableOpacity>




                    </ScrollView>
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
        fontWeight: 'bold',
        fontSize: 30,
         marginTop:40,
         fontFamily: 'Avenir-Medium',
         alignSelf:"center"
         
    },
    header_icon:{
        marginTop:70
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 30,
        justifyContent:"center",
       
    },
    text_footer: {
        color: '#05375a',
        fontSize: 15
    },
    textInput: {
        marginTop: 3,
        paddingLeft: 10,
        color: '#05375a',
        borderWidth: 1,
        borderColor: "#0174DF",
        height: 45,
        borderRadius: 10,
        marginBottom: 20,

    },
    submitButton: {
        paddingVertical: 10,
        backgroundColor: "#fff",
        alignItems: "center",
        marginHorizontal: 60,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#0174DF",
        top: 20

    },
    submitText: {
        fontWeight: 'bold',
        color: "#0174DF",
        fontSize: 20
    },
});
