import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function LogoTitle({ title }) {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <Image style={styles.imagelogo} source={require('../assets/IconF.png')} />
            <Text>Fast Inspections</Text>
        </View>

    );
}
const styles = StyleSheet.create({
    imagelogo: {
        height: 36,
        width: 89,
        resizeMode: 'contain',
        alignSelf: 'center',
    }
})
export default LogoTitle;