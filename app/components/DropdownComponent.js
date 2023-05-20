import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';

const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
];

const DropdownComponent = (props) => {
    const [value, setValue] = useState(null);

    const renderItem = item => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
                {item.value === value && (
                    <Icon1
                        style={styles.icon}
                        color="black"
                        name="account-circle-outline"
                        size={20}
                    />
                )}
            </View>
        );
    };
    return (
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            value={value}
            onChange={item => {
                setValue(item.value);
            }}
            renderItem={renderItem}
        />
    );
}

export default DropdownComponent;
const styles = StyleSheet.create({
    dropDownstyle: {
        borderWidth: 1,
        borderColor: colors.borderColor,
        borderRadius: 5,
        backgroundColor: colors.borderColor,
        height: 50,
    },
    dropdown: {

        //height: 50,
        backgroundColor: colors.borderColor,
        borderWidth: 1,
        borderColor: colors.borderColor,
        borderRadius: 5,
        padding: 12,
        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 1,
        // },
        // shadowOpacity: 0.2,
        // shadowRadius: 1.41,
        // elevation: 2,
    },
    icon: {
        marginRight: 5,
    },
    item: {
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 14,
    },
    selectedTextStyle: {
        fontSize: 14,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});