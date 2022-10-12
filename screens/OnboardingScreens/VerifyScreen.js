import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons, Ionicons, AntDesign, FontAwesome } from "@expo/vector-icons";

export default function Verify({ navigation }) {
    return (


        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Signup')}
                >
                    <AntDesign style={styles.header_icon} name="left" size={20} color="#fff" />
                </TouchableOpacity>

                <Text style={styles.text_header}>VERIFY</Text>
            </View>
            <View style={styles.footer}>
                <ScrollView>
                    <MaterialIcons style={styles.footerIcon} name="email" size={80} color="#0174DF" />
                    <Text style={styles.footerText}>To confirm your account, enter the 4-digit code sent to
                        <Text style={{ fontWeight: "bold" }}>name@email.com</Text>
                    </Text>


                    <TouchableOpacity style={styles.verifyButton}>
                        <Text style={styles.verifyText}
                        onPress={() => navigation.navigate('Verified')}
                        >VERIFY</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.resendButton}>
                        <Text style={styles.resendText}>RESEND CODE</Text>
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
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 30,
        justifyContent: "center",

    },
    footerIcon: {
        alignSelf: "center"
    },
    footerText: {
        alignSelf: "center",
        marginTop: 25,
        marginHorizontal: 20
    },

    verifyButton: {
        paddingVertical: 10,
        backgroundColor: "#0174DF",
        alignItems: "center",
        marginHorizontal: 50,
        borderRadius: 10,
        marginTop: 120

    },
    verifyText: {
        fontWeight: 'bold',
        color: "#fff",
        fontSize: 20
    },
    resendButton: {
        paddingVertical: 10,
        backgroundColor: "#fff",
        alignItems: "center",
        marginHorizontal: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#0174DF",
        top: 20

    },
    resendText: {
        fontWeight: 'bold',
        color: "#0174DF",
        fontSize: 20
    },
});
