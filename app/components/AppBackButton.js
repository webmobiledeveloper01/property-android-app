import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import colors from '../config/colors';

function AppBackButton({ title, onPress }) {

    return (
        <TouchableOpacity onPress={onPress} style={[styles.buttonStyle, { flexDirection: 'row', justifyContent: 'center' }]}>
            <Icon name='ios-chevron-back-sharp' size={20} color={colors.white} />
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>

    );

}
const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: colors.medium,
        padding: 10,
        width: '35%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.medium,
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.white,
        textAlign: 'center',
    },
})
export default AppBackButton;