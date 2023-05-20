import React, { useState, useCallback } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import colors from '../../config/colors';
import DropDownPicker from 'react-native-dropdown-picker';
import Picker from './Picker';
function RoofInterior({ title, id }) {

    //Type of Inspection
    const [drynessopen, setDrynessOpen] = useState(false);
    const [drynessValue, setDrynessValue] = useState(null);
    const [insulationOpen, setInsulationOpen] = useState(false);
    const [insulationValue, setInsulationValue] = useState(null);
    const [sarkingOpen, setSarkingOpen] = useState(false);
    const [SarkingValue, setSarkingValue] = useState(null);
  

    const [TypeOfitems, setTypeItems] = useState([
        { label: 'Satisfactory', value: 'Satisfactory' },
        { label: 'Minor defect', value: 'Minor defect' },
        { label: 'Major defect', value: 'Major defect' },
        { label: 'No access', value: 'No access' },
        { label: 'Limited access', value: 'Limited access' },
        { label: 'Notes', value: 'Notes' },
        { label: 'N/A', value: 'N/A' },
    ]);

    const [imageuri, setImageuri] = useState("");
    const getImagedata=(uri)=>{
     setImageuri(uri)
 }


    const onOpenDryness = useCallback(() => {
        //invisible previous dropdown

    }, []);
   
    const onOpenInsulation = useCallback(() => {
        //invisible previous dropdown

    }, []);
    const onOpenSarking = useCallback(() => {
        //invisible previous dropdown

    }, []);
       


    const renderDrynessItem = (title, id,) => {
        return (
            <View key={id} style={styles.item}>
                <Text style={[styles.titleText, { marginVertical: 10 }]}>{title}</Text>
                <DropDownPicker
                    listMode='SCROLLVIEW'
                    dropDownDirection='BOTTOM'
                    style={styles.dropDownstyle}
                    textStyle={styles.dropDownTextStyle}
                    placeholder=''
                    dropDownContainerStyle={styles.dropDownContainerStyle}

                    containerProps={{
                        height: drynessopen == true ? 200 : 35,
                        marginBottom: drynessopen == true ? 30 : 0,
                    }}
                    open={drynessopen}
                    value={drynessValue}
                    items={TypeOfitems}
                    setOpen={setDrynessOpen}
                    setValue={setDrynessValue}
                    setItems={setTypeItems}
                    onOpen={onOpenDryness}
                />

            </View>
        );
    }
    
    const renderInsulationItem = (title, id,) => {
        return (
            <View key={id} style={styles.item}>
                <Text style={[styles.titleText, { marginVertical: 10 }]}>{title}</Text>
                <DropDownPicker
                    listMode='SCROLLVIEW'
                    dropDownDirection='BOTTOM'
                    style={styles.dropDownstyle}
                    textStyle={styles.dropDownTextStyle}
                    placeholder=''
                    dropDownContainerStyle={styles.dropDownContainerStyle}
                    dropDownMaxHeight={200}
                    containerProps={{
                        height: insulationOpen == true ? 200 : 35,
                        marginBottom: insulationOpen == true ? 30 : 0,
                    }}
                    open={insulationOpen}
                    value={insulationValue}
                    items={TypeOfitems}
                    setOpen={setInsulationOpen}
                    setValue={setInsulationValue}
                    setItems={setTypeItems}
                    onOpen={onOpenInsulation}
                />

            </View>
        );
    }
    const renderSarkingItem = (title, id,) => {
        return (
            <View key={id} style={styles.item}>
                <Text style={[styles.titleText, { marginVertical: 10 }]}>{title}</Text>
                <DropDownPicker
                    listMode='SCROLLVIEW'
                    dropDownDirection='BOTTOM'
                    style={styles.dropDownstyle}
                    textStyle={styles.dropDownTextStyle}
                    placeholder=''
                    dropDownContainerStyle={styles.dropDownContainerStyle}
                    dropDownMaxHeight={200}
                    containerProps={{
                        height: sarkingOpen == true ? 200 : 35,
                        marginBottom: sarkingOpen == true ? 30 : 0,
                    }}
                    open={sarkingOpen}
                    value={SarkingValue}
                    items={TypeOfitems}
                    setOpen={setSarkingOpen}
                    setValue={setSarkingValue}
                    setItems={setTypeItems}
                    onOpen={onOpenSarking}
                />

            </View>
        );
    }
       
    const renderInputNotes = (notes) => {
        return (
            <View style={{ marginTop: 10, }}>
                <Text style={styles.titleText}>{notes}</Text>
                <View style={{ marginTop: 5, borderWidth: 1, borderColor: colors.borderColor, }}>
                    <View style={{ backgroundColor: 'white', margin: 1 }}>
                        <TextInput
                            multiline={true}
                            numberOfLines={10}
                            underlineColorAndroid="transparent"
                            placeholder="Type something"
                            placeholderTextColor="grey"
                            style={[styles.normlText, { height: 100, textAlignVertical: 'top', color: colors.dark, padding: 5 }]} />
                    </View>
                </View>

            </View>
        );
    }
    const renderPictures = () => {
        return (
            <View style={{ marginTop: 20 }}>
                <Text style={styles.titleText}>Pictures</Text>
                <Picker
    getImagedata={getImagedata}
    />
                {renderInputNotes('Notes')}
            </View>
        );
    }
    return (
        <View style={{ marginVertical: 20, backgroundColor: colors.borderColor, padding: 20, }}>
            <Text style={[styles.headerText, { marginVertical: 5 }]}>Roof interior</Text>
            {renderDrynessItem(title = 'Dryness', id = '1')}
            {renderInsulationItem(title = 'Insulation', id = '3')}
            {renderSarkingItem(title = 'Sarkng', id = '4')}
                        
            {renderPictures()}
        </View>
    );
}
const styles = StyleSheet.create({
    headerText: {
        fontSize: 17,
        fontWeight: '700',
        color: colors.black,
    },
    dropDownstyle: {
        borderWidth: 1,
        borderColor: colors.borderColor,
        borderRadius: 5,
        backgroundColor: colors.borderColor,
    },
    dropDownTextStyle: {
        fontSize: 14,
        color: colors.dark,
        opacity: 0.8,
    },
    dropDownContainerStyle: {
        backgroundColor: colors.white,
        borderWidth: 0.5,
        borderColor: colors.borderColor,
        minHeight: 130,
    },
    item: {
        flexGrow: 1,
        marginVertical: 8,
    },
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
    buttonText: {
        fontSize: 14,
        textAlign: 'left',
        color: colors.medium,

    },

})
export default RoofInterior;