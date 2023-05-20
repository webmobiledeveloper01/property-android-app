import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';

function CheckBox({ title, iconName, isselected = false, onPress }) {
    return (
        <View>
            <TouchableOpacity style={styles.checkboxWrapper} onPress={onPress}>
                <Icon
                    name={isselected ? 'checkbox-marked' : 'checkbox-blank-outline'} size={24} color={colors.primary} />
                <Text style={[styles.normlText, { marginLeft: 5, flex: 1 }]}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    normlText: {
        fontSize: 14,
        textAlign: 'left',
        color: colors.medium
    },
    checkboxWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        width: '99%',

    },
})
export default CheckBox;