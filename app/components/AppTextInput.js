import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import colors from "../config/colors";
import Icon from 'react-native-vector-icons/Ionicons';
import defaultStyle from '../config/styles';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';


export default function AppTextInput({ icon = '', ...otherProps }) {
    //Ionicons
    return (
        <View style={[styles.container]}>
            {icon && <Icon name={icon} size={24} color={colors.medium} style={styles.icon} />}
            <TextInput
                placeholderTextColor={colors.medium}
                style={styles.text} {...otherProps}
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
        marginRight: 5,
        alignSelf: 'center',
        marginLeft: 10,

    },
    text: {
        color: colors.black,
        fontSize: 15,
        opacity: 0.7,
        flex: 1,

    }

})