import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import colors from "../config/colors";
import Icon from 'react-native-vector-icons/Ionicons';
import defaultStyle from '../config/styles';

export default function AppTextInput1({ icon, ...otherProps }) {
    //Ionicons
    return (
        <View style={styles.container}>
            {icon && <Icon name={icon} size={20} color={colors.medium} style={styles.icon} />}
            <TextInput
                placeholderTextColor={colors.medium}
                style={defaultStyle.text} {...otherProps}
            />
        </View>
    )
}
const styles = StyleSheet.create({

    container: {
        backgroundColor: colors.white,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.borderColor,
        flexDirection: 'row',
        width: '100%',
        marginVertical: 5,
    },
    icon: {
        marginRight: 10,
    },
    text: {
        color: colors.black,
        fontSize: 14,
        opacity: 0.7,
    }

})