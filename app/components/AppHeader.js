import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import colors from '../config/colors';

function AppHeader(props) {
    return (
        <View style={styles.container}>
            <View style={{ width: '100%', height: 230, backgroundColor: colors.primary, }} />
            <View style={{ height: 80, width: '100%', position: 'absolute', padding: 20, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.buttonText}>Inner West Property Inspections Pty Ltd</Text>
                <Text style={styles.buttonText}>- Property Report</Text>
            </View>
            <View style={styles.part1} >
                <Image style={styles.imagelogo} source={require('../assets/IconF1.png')} />
                <Text style={styles.normlText}>This inspection and report meet
                    Australian Standard AS 4349.1-2007 Pre-Purchase Inspections - Residential
                    Buildings' and Australian Standard AS
                    4349.3 Inspections of Buildings - Timber
                    Pest Inspections. </Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        height: 330,
    },
    part1: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minHeight: 230,
        backgroundColor: 'white',
        position: 'absolute',
        borderWidth: 1,
        borderColor: colors.lightGray,
        borderRadius: 36, top: 80, padding: 10,
        marginLeft: 0.5,
        marginRight: 0.5,
    },
    imagelogo: {
        height: 96,
        width: 60,
        resizeMode: 'contain',
        alignSelf: 'center',

    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: colors.white,
        textAlign: 'center',
        letterSpacing: 1,
    },
    normlText: {
        fontSize: 16,
        letterSpacing: 1,
        lineHeight: 24,
        textAlign: 'center',
        color: 'darkgray',
        marginTop: 10,
    },
})
export default AppHeader;

/**
 *  <View style={{ flexDirection: 'column', marginHorizontal: 20, flex: 1 }}>
                    <Text style={styles.titleText} >Fast Inspections  Pty Ltd - Property Report</Text>
                    <Text style={styles.normlText}>This inspection and report meet Australian Standard AS 4349.1-2007 </Text>
                    <Text style={styles.normlText}>Pre-Purchase Inspections – Residential Buildings’ and Australian </Text>
                </View>
 */