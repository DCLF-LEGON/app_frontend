import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from '../screens/OnboardingScreens/MainScreen';
import Signup from '../screens/OnboardingScreens/Signup';
import Verify from '../screens/OnboardingScreens/VerifyScreen';
import Login from '../screens/OnboardingScreens/Login';
import VerifyLogin from '../screens/OnboardingScreens/VerifyLogin';
import Verified from '../screens/OnboardingScreens/VerifiedScreen';
import ResetPassword from '../screens/OnboardingScreens/ResetPassword';
import UpdatedPassword from '../screens/OnboardingScreens/updatedPasswordScreen';


// HomeSecreens
import TopTabScreen from './Tabroutes';
import Details from '../screens/HomeScreens/DetailsScreen';
import BottomStackScreen from './Tabroutes';

 

 

 

 
const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
                <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Verify" component={Verify} options={{ headerShown: false }} />
                <Stack.Screen name="VerifyLogin" component={VerifyLogin} options={{ headerShown: false }} />
                <Stack.Screen name="Verified" component={Verified} options={{ headerShown: false }} />
                <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }} />
                <Stack.Screen name="Updatedpassword" component={UpdatedPassword} options={{ headerShown: false }} />
                  
                {/* HomeScreens */}
                <Stack.Screen name="Sermons" component={TopTabScreen}    options={{ headerShown: false }}/>
                <Stack.Screen name="Details" component={Details}    />
               
              
                 

            </Stack.Navigator>
        </NavigationContainer>
    );
}
