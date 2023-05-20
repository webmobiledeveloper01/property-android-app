import React, { useState, useCallback } from 'react';
import {View,Text,TouchableOpacity,StyleSheet, Image} from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import AppTextInput1 from '../components/AppTextInput1';
import colors from '../config/colors';
import Picker from './components/Picker';
function Page1({onNextButton}) {

    const [imageuri, setImageuri] = useState("");
   const getImagedata=(uri)=>{
    setImageuri(uri)
}

    return (
        <View style={{ margin: 10 }}>
             <View style={{ backgroundColor:colors.borderColor, padding:20, }}>
                <Text style={styles.titleText}>PO Box 573 Newtown NSW 2042</Text>
                <Text style={styles.titleText}>Ph: 0492 961 622</Text>
                <Text style={styles.titleText}>email: info@innerwestpropertyinspections.com.au</Text>
                <Text style={styles.titleText} >www.innerwestpropertyinspections.com.au</Text>
            </View>
            <View style={{ marginVertical:10,backgroundColor:colors.borderColor, padding:20, }}>
                    <Text style={styles.titleText}>Property facade</Text>
    <Picker
    getImagedata={getImagedata}
    />
                </View>
                <View style={{ marginVertical:10,backgroundColor:colors.borderColor, padding:20, }}>
                    <Text style={[styles.titleText, { marginVertical: 10 }]}>Inspection address</Text>
                    <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        name="email"
                        placeholder='Address Line 1'
                        textContentType="emailAddress"
                    />
                    <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        name="email"
                        placeholder='City'
                        textContentType="emailAddress"
                    />
                    <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        name="email"
                        placeholder='State / Province / Region'
                        textContentType="emailAddress"
                    />
                    <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        name="email"
                        placeholder='Postal / Zip Code'
                        textContentType="emailAddress"
                    />

                </View>
                <View style={{marginVertical:10,backgroundColor:colors.borderColor, padding:20,}}>
              
                    <Text style={[styles.titleText, { marginVertical: 10 }]}>Report number</Text>
                    <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        name="email"
                        placeholder='#12346'
                        textContentType="emailAddress"
                    />


                </View>
                <View style={{marginVertical:10,backgroundColor:colors.borderColor, padding:20,marginBottom:20 }}>
                
                    <Text style={styles.normlText}>As requested and agreed with the Client, the inspection carried out by the Building Consultant and Timber Pest Detection Consultant is a Standard Property & Timber Pest Report comprising a Property Report and a Timber Pest Report.{'\n\n'}
                        “Client” means the person or persons, for whom the Report was carried out or their Principal (i.e. the person or persons for whom the report is being obtained).{'\n\n'}
                        “Building Consultant” means a person, business or company who is qualified and experienced to undertake a pre-purchase inspection in accordance with Australian Standard AS 4349.1-2007 ‘Inspection of Buildings. Part 1: Pre-Purchase Inspections – Residential Buildings’. The consultant must also meet any Government licensing requirement, where applicable.{'\n\n'}
                        “Timber Pest Detection Consultant” means person who meets the minimum skills requirement set out in the current Australian Standard AS 4349.3 Inspections of Buildings. Part 3: Timber Pest Inspection Reports or state/territory legislation requirements beyond this Standard, where applicable.{'\n\n'}
                        This Standard Property & Timber Pest Report was produced for the exclusive use of the Client. The consultant, their company or firm is not liable for any reliance placed on this report by any third party.</Text>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                    <AppButton title={'Next'} onPress={onNextButton} />
                </View>
            </View>
    );
}
const styles = StyleSheet.create({
    imagelogo: {
        height: 106,
        width: 70,
        resizeMode: 'contain',
    },
    titleText: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.black
    },
    headerText: {
        fontSize: 17,
        fontWeight: '700',
        color: colors.black,
    },
    normlText: {
        fontSize: 14,
        textAlign: 'left',
        color: colors.medium
    },
    uploadView: {
        height: 60,
        backgroundColor:
            colors.borderColor,
        marginTop: 10, justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.borderColor,
        borderRadius: 5,
    },
    uploadBtn: {
        marginLeft: 10,
        height: 35,
        width: 70,
        backgroundColor: colors.borderColor, justifyContent: 'center', alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.borderColor,
        borderRadius: 5,
    },
})
export default Page1;