import React from 'react';
import { Image, View } from 'react-native';
import colors from '../config/colors';

function Appheader({ height = '30%', children }) {
    return (
        <View style={{
            width: '100%',
            height: height,
            backgroundColor: colors.primary,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
        }}>

            <Image style={{ resizeMode: 'contain' }} source={require('../assets/applogo.png')} />
        </View>
    );
}
export default Appheader;