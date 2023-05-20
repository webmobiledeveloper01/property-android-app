import React from 'react';
import { SafeAreaView, View, StyleSheet, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import AppTextInput from '../components/AppTextInput';
import colors from '../config/colors';

const Registration = ({ navigation }) => {
    const handleSignIn = () => {
        navigation.navigate('homepage');
    }
    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView>

                <View style={styles.middle}>
                    <Image style={styles.imagelogo} source={require('../assets/IconF.png')} />
                    <Text style={styles.titleText}>Registration</Text>
                    <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon='person-outline'
                        keyboardType="email-address"
                        name="email"
                        placeholder='Kristin Watson'
                        textContentType="emailAddress"
                    />
                    <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon='ios-mail-outline'
                        keyboardType="email-address"
                        name="email"
                        placeholder='Email'
                        textContentType="emailAddress"
                    />
                    <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon='call-outline'
                        keyboardType="email-address"
                        name="email"
                        placeholder='Phone number'
                        textContentType="emailAddress"
                    />
                    <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="ios-lock-open-outline"
                        name="password"
                        placeholder="Password"
                        secureTextEntry={true}
                        textContentType='password'
                    />
                    <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="ios-lock-closed-outline"
                        name="password"
                        placeholder="Confirm Password"
                        secureTextEntry={true}
                        textContentType='password'
                    />
                    <TouchableOpacity onPress={() => handleSignIn()} style={styles.buttonStyle}><Text style={styles.buttonText}>Register</Text></TouchableOpacity>

                </View>

            </ScrollView>


        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.white,
    },

    middle: {
        backgroundColor: colors.white,
        margin: 20,
        padding: 20,
        borderRadius: 10,
        borderColor: colors.borderColor,
        borderWidth: 1,
    },
    imagelogo: {
        width: 90,
        height: 141,
        alignSelf: 'center',
    }, titleText: {
        fontSize: 20,
        fontWeight: '600',
        color: colors.black,
        alignSelf: 'center',
        marginVertical: 10,
    },
    buttonStyle: {
        backgroundColor: colors.primary,
        padding: 15,
        width: '100%',
        borderRadius: 25,
        marginTop: 20
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.white,
        textAlign: 'center',
    },
})
export default Registration;