import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AppFooter from '../components/AppFooter';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import colors from '../config/colors';

const Page10 = ({ onBackButton, onNextButton }) => {

    //date 
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [dateOfReport, setdateOfReport] = useState('');
    const [isTO, setisTO] = useState(true);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    }
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    }
    const handleDateConfirm = date => {
        if (isTO) {
            const dt = moment(date).format('MMM-DD-YYYY');
            setdateOfReport(dt);
        }
        hideDatePicker();
    }
    const renderDateofreport = () => {
        return (
            <View style={{ marginVertical: 10 }}>
                <Text style={styles.titleText}>Date of report</Text>
                <TouchableOpacity onPress={() => {
                    showDatePicker(),
                        setisTO(true)
                }}>
                    <View style={styles.dateView}>
                        <Text style={styles.normlText}>{dateOfReport}</Text>
                        <Icon name='ios-calendar-outline' size={20} color={colors.primary} />
                    </View>
                </TouchableOpacity>
                <DateTimePicker
                    isVisible={isDatePickerVisible}
                    mode='date'
                    onConfirm={handleDateConfirm}
                    onCancel={hideDatePicker}
                />
            </View>
        );
    }
    const renderSignature = () => {

        return (
            <View>
                <Text style={styles.titleText}>Signature</Text>
                <View style={styles.signature}>
                    <View style={{ backgroundColor: colors.white, height: 98 }}>
                    </View>
                </View>
            </View>
        );
    }
    return (
        <View style={{ margin: 10 }}>
            <Text style={styles.headerText}>10. Conclusion</Text>
            <View style={{ marginVertical: 10, backgroundColor: colors.borderColor, padding: 20, }}>
                <Text style={[styles.normlText, {}]}>This document certifies that the property described in this Report has been inspected by the Building Consultant & Timber Pest Detection Consultant in accordance with the level of service requested by the Client and the agreed Terms and Conditions set out at http://innerwestpropertyinspections.com.au/book-an-inspection/terms-conditions, and in accordance with Australian Standard  AS 4349.1-2007: Inspection of Buildings - Pre-purchase Inspections and and Australian Standard AS3660 (termite) respectively.</Text>
                <Text style={styles.normlText}>{'\n\n'}Thank You {'\n\n'}</Text>
                <Text style={styles.normlText}>Authorised Signatory for Inner West Property Inspections Pty Ltd {'\n\n'}</Text>
                {renderDateofreport()}
                {renderSignature()}
            </View>
            <AppFooter onBackButton={onBackButton} onNextButton={onNextButton} />
        </View>
    );
}
const styles = StyleSheet.create({
    headerText: {
        fontSize: 17,
        fontWeight: '700',
        color: colors.black,
    },
    titleText: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.black,
    },
    normlText: {
        fontSize: 14,
        textAlign: 'left',
        color: colors.medium,
        flex: 1,
    },
    dateView: {
        height: 40,
        width: '100%',
        marginVertical: 10,
        borderWidth: 1,
        borderColor: colors.borderColor,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
    },
    signature: {
        backgroundColor: colors.borderColor,
        marginTop: 10,
        height: 100,
        borderWidth: 1,
        borderColor: colors.borderColor,
    }
})
export default Page10;