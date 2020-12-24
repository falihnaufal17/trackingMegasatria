import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './screens/Welcome';
import Login from './screens/Login';
import Home from './screens/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const MainNavigation = (props) => {
    const [session, setSession] = useState(null);

    useEffect(() => {
        const getSession = async () => {
            try {
                const value = await AsyncStorage.getItem('sessionApp')
                if(value !== null){
                    setSession(value)
                }
            } catch (error) {
                console.log(error)
            }
        }

        getSession();
    }, [])
    if(session !== null){
        return(
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
                    <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }else{
        return(
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}} />
                    <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
                    <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default MainNavigation;