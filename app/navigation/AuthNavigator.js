import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../config/colors';
import AppScreen from '../screens/Login';
import Registration from '../screens/Registration';
import HomeScreen from '../screens/HomeScreen';
import LogoTitle from '../components/LogoTitle';
import { View } from 'react-native';
import Appcontainer from '../screens/Appcontainer';

const Stack = createNativeStackNavigator();

function AuthNavigator(props) {


    return (
        <Stack.Navigator >
            {/* <Stack.Screen name='login' component={AppScreen} options={{

                title: '',
                headerShadowVisible: false,
                headerBackTitleVisible: false,
                headerTintColor: colors.dark,
                animation: 'fade',
            }} />
            <Stack.Screen name='register' component={Registration} options={{
                title: '',
                headerShadowVisible: false,
                headerBackTitleVisible: false,
                headerTintColor: colors.dark,
                animation: 'fade',

            }} /> */}
            <Stack.Screen name='homepage' component={HomeScreen} options={{


                headerShown: false


            }} />

            <Stack.Screen name='appcontainer' component={Appcontainer} options={{


                headerShown: false


            }} />

        </Stack.Navigator>
    );
}



//Unused function


export default AuthNavigator;

/*
title: '',
                headerShadowVisible: false,
                headerBackTitleVisible: false,
                headerTintColor: colors.dark,
                headerBackVisible: false,
                headerLeft: () => null,
                animation: 'fade',
                headerTitle: (props) => <LogoTitle title={'Fast Inspection'} />,
                headerTitleStyle: { flex: 1, textAlign: 'center' },
*/