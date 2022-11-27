import * as React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { AntDesign, Feather } from "@expo/vector-icons";

class ResetPassword extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
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

    render() {
        let { navigation } = this.props

        return (


            <View style={styles.container}>

                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Main')}
                    >
                        <AntDesign style={styles.header_icon} name="left" size={20} color="#fff" />
                    </TouchableOpacity>

                    <Text style={styles.text_header}>RESET PASSWORD</Text>
                </View>
                <View style={styles.footer}>
                    <ScrollView>

                        <Text style={styles.text_footer}>Type your Password</Text>
                        <View style={styles.action}>
                            <TextInput
                                placeholder="Type new password"
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
                                    <Feather name="eye-off" size={20} color="#B1B1B1" />
                                    :
                                    <Feather
                                        name="eye"
                                        color="grey"
                                        size={20}
                                    />
                                }
                            </TouchableOpacity>

                        </View>


                        <Text style={styles.text_footer}>Retype your password</Text>
                        <View style={styles.action}>
                            <TextInput
                                placeholder="Retype password"
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
                                    <Feather name="eye-off" size={20} color="#B1B1B1" />
                                    :
                                    <Feather
                                        name="eye"
                                        color="grey"
                                        size={20}
                                    />
                                }
                            </TouchableOpacity>

                        </View>





                        <TouchableOpacity style={styles.updateButton}
                            onPress={() => navigation.navigate('Updatedpassword')}
                        >
                            <Text style={styles.updateText}>UPDATE</Text>
                        </TouchableOpacity>

                        <View><Text style={{ alignSelf: "center" }}>Dont have an account?<Text onPress={() => navigation.navigate('Signup')} style={{ fontWeight: "bold", color: "#0174DF" }}>
                            Click here</Text></Text></View>




                    </ScrollView>
                </View>



            </View>

        );
    };
};

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
        marginTop: 10,
        fontFamily: 'Avenir-Medium',
        alignSelf: "center",
        fontWeight: "700",
        fontStyle: "normal",
        textAlign: "center"


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
    eye: {
        position: "absolute",
        left: 290,
        top: 12

    },
    remember_forgot: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20
    },

    updateButton: {
        width: 182,
        height: 38,
        backgroundColor: "#0174DF",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#0174DF",
        marginTop: 40,
        marginBottom: 50,
    },
    updateText: {
        fontWeight: '700',
        color: "#ffffff",
        fontSize: 20,
        marginTop: 5
    },
});

export default ResetPassword
