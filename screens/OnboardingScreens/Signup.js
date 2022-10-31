import * as React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import {  AntDesign,  Feather  } from "@expo/vector-icons";

class SignUp extends React.Component {
              
  constructor (props) {
    super(props)
    this.state ={  
      secureTextEntry: true,
      confirm_secureTextEntry: true,
      isValidUser: true,
      isValidPassword: true,
 
    }
 }


 updateSecureTextEntry = () => {
    this.setState({
      secureTextEntry: !this.state.secureTextEntry
  });
    
  }
  
   updateConfirmSecureTextEntry = () => {
    this.setState({
      confirm_secureTextEntry: !this.state.confirm_secureTextEntry
  });
  }


    render(){
        let {navigation} = this.props 
    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >


        <View style={styles.container}>
           
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Main')}
                >
                    <AntDesign style={styles.header_icon} name="left" size={20} color="#fff" />
                </TouchableOpacity>

                <Text style={styles.text_header}>SIGN UP</Text>
            </View>
            <View style={styles.footer}>
                <ScrollView>
                    <Text style={styles.text_footer}>Full Name</Text>
                    <TextInput
                        placeholder="Name"
                        placeholderTextColor="#666666"
                        style={styles.textInput}
                        autoCapitalize="none"
                        multiline={false}

                    />

                    <Text style={styles.text_footer}>Email Address</Text>
                    <TextInput
                        placeholder="Type your e-mail"
                        placeholderTextColor="#666666"
                        style={styles.textInput}
                        autoCapitalize="none"
                        multiline={false}

                    />

                    <Text style={styles.text_footer}>Create Password</Text>
                    <View   style={styles.action}>
                    <TextInput
                        placeholder="Create Password"
                        placeholderTextColor="#666666"
                        style={styles.textInput}
                        autoCapitalize="none"
                        multiline={false}

                    />
                       <TouchableOpacity  
                           onPress={this.updateSecureTextEntry}
                           style={styles.eye}
                           >          
                 {this.state.secureTextEntry ? 
                    <Feather name="eye-off" size={20} color="#B1B1B1"  />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }       
                </TouchableOpacity>
                    </View>


                    <Text style={styles.text_footer}>Confirm Password</Text>
                    <View   style={styles.action}>
                    <TextInput
                        placeholder="Confirm Password"

                        placeholderTextColor="#666666"
                        style={styles.textInput}
                        autoCapitalize="none"
                        multiline={false}

                    />
                       <TouchableOpacity  
                           onPress={this. updateConfirmSecureTextEntry}
                           style={styles.eye}
                           >          
                 {this.state.confirm_secureTextEntry ? 
                    <Feather name="eye-off" size={20} color="#B1B1B1"  />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }       
                </TouchableOpacity>
                     </View>

                    <TouchableOpacity style={styles.submitButton}
                        onPress={() => navigation.navigate('Verify')}
                    >
                        <Text style={styles.submitText}>SUBMIT</Text>
                    </TouchableOpacity>


                </ScrollView>
            </View>



        </View>
        </KeyboardAvoidingView>

    );
}
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
    header_icon: {
        marginTop: 70
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 30,
        justifyContent: "center",

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
    eye :{
        position:"absolute",
        left:290,
        top:12
        
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

export default SignUp
