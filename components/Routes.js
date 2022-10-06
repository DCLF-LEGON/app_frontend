import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from '../screens/OnboardingScreens/MainScreen';
import Signup from '../screens/OnboardingScreens/Signup';
import Verify from '../screens/OnboardingScreens/VerifyScreen';
 
const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
                <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
                <Stack.Screen name="Verify" component={Verify} options={{ headerShown: false }} />


            </Stack.Navigator>
        </NavigationContainer>
    );
}
