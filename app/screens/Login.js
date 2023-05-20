import React from 'react';
import { SafeAreaView, View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import AppTextInput from '../components/AppTextInput';
import AppTextInput1 from '../components/AppTextInput1';
import colors from '../config/colors';

const AppScreen = ({ navigation }) => {
    const handleSignIn = () => {
        //appcontainer
        navigation.navigate('homepage'); //homepage

    }
    const handleSingUp = () => {
        navigation.navigate('register');
    }
    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.middle}>
                        <Image style={styles.imagelogo} source={require('../assets/IconF.png')} />
                        <Text style={[styles.titleText, { marginVertical: 20 }]}>Welcome </Text>
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon='ios-mail-outline'
                            keyboardType="email-address"
                            name="email"
                            placeholder='Email'
                            textContentType="emailAddress" />
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="ios-lock-closed-outline"
                            name="password"
                            placeholder="Password"
                            secureTextEntry={true}
                            textContentType='password' />
                        <TouchableOpacity onPress={() => handleSignIn()} style={styles.buttonStyle}><Text style={styles.buttonText}>SIGN IN</Text></TouchableOpacity>
                        <View style={styles.textButton}>
                            <Text style={styles.normlText}>Don't have an account?</Text>
                            <TouchableOpacity onPress={() => handleSingUp()} style={{ marginLeft: 5 }} >
                                <Text style={[styles.normlText, { color: colors.primary }]}>Sign up</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.white,
    },
    container: {
        backgroundColor: colors.white,
        flex: 1,
        justifyContent: 'space-between'
    },
    middle: {
        margin: 20,
        padding: 20,
        borderRadius: 10,
        borderColor: colors.borderColor,
        borderWidth: 1,
        backgroundColor: colors.white,
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
    normlText: {
        fontSize: 15,
        textAlign: 'right',
        color: colors.medium
    },
    textButton: {
        flexDirection: 'row', alignSelf: 'center',
        marginTop: 20,
    }

})
export default AppScreen;