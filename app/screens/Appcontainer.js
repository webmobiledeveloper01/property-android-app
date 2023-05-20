import React from 'react';
import { SafeAreaView, View, Image, Text, StyleSheet } from 'react-native';
import colors from '../config/colors';

function Appcontainer(props) {
    return (

        <SafeAreaView style={{ backgroundColor: 'white' }}>
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
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    part1: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minHeight: 230,
        backgroundColor: 'white',
        position: 'absolute',
        borderWidth: 1,
        borderColor: colors.lightGray,
        borderRadius: 36, top: 80, padding: 20
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
        lineHeight: 23,
        textAlign: 'center',
        color: 'darkgray',
        marginTop: 10,
    },

})
export default Appcontainer;