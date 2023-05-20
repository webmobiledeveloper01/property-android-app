import React, { useState, useCallback } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import colors from '../../config/colors';
import DropDownPicker from 'react-native-dropdown-picker';
import Picker from './Picker';
function Yard({ title, id }) {

    //Type of Inspection
    const [drainageopen, setDrainageOpen] = useState(false);
    const [drainageValue, setDrainageValue] = useState(null);
    const [fenceOpen, setFenceOpen] = useState(false);
    const [fenceValue, setFenceValue] = useState(null);
    const [retainingOpen, setRetainingOpen] = useState(false);
    const [retainingValue, setRetainingValue] = useState(null);
    const [garageOpen, setGarageOpen] = useState(false);
    const [garageValue, setGarageValue] = useState(null);
    const [PavementOpen, setPavementOpen] = useState(false);
    const [pavementValue, setPavementValue] = useState(null);
    const [PaversOpen, setPaversOpen] = useState(false);
    const [paversValue, setPaversValue] = useState(null);

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


    const onOpenDrainage = useCallback(() => {
        //invisible previous dropdown

    }, []);
    const onOpenFences = useCallback(() => {
        //invisible previous dropdown

    }, []);
    const onOpenretaining = useCallback(() => {
        //invisible previous dropdown

    }, []);
    const onOpenGarage = useCallback(() => {
        //invisible previous dropdown

    }, []);
    const onOpenpavement = useCallback(() => {
        //invisible previous dropdown

    }, []);
    const onOpenpavers = useCallback(() => {
        //invisible previous dropdown

    }, []);
    


    const renderDrainageItem = (title, id,) => {
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
                        height: drainageopen == true ? 200 : 35,
                        marginBottom: drainageopen == true ? 30 : 0,
                    }}
                    open={drainageopen}
                    value={drainageValue}
                    items={TypeOfitems}
                    setOpen={setDrainageOpen}
                    setValue={setDrainageValue}
                    setItems={setTypeItems}
                    onOpen={onOpenDrainage}
                />

            </View>
        );
    }
    const renderFencesItem = (title, id,) => {
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
                        height: fenceOpen == true ? 200 : 35,
                        marginBottom: fenceOpen == true ? 30 : 0,
                    }}
                    open={fenceOpen}
                    value={fenceValue}
                    items={TypeOfitems}
                    setOpen={setFenceOpen}
                    setValue={setFenceValue}
                    setItems={setTypeItems}
                    onOpen={onOpenFences}
                />

            </View>
        );
    }
    const renderRetainingItem = (title, id,) => {
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
                        height: retainingOpen == true ? 200 : 35,
                        marginBottom: retainingOpen == true ? 30 : 0,
                    }}
                    open={retainingOpen}
                    value={retainingValue}
                    items={TypeOfitems}
                    setOpen={setRetainingOpen}
                    setValue={setRetainingValue}
                    setItems={setTypeItems}
                    onOpen={onOpenretaining}
                />

            </View>
        );
    }
    const renderGarageItem = (title, id,) => {
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
                        height: garageOpen == true ? 200 : 35,
                        marginBottom: garageOpen == true ? 30 : 0,
                    }}
                    open={garageOpen}
                    value={garageValue}
                    items={TypeOfitems}
                    setOpen={setGarageOpen}
                    setValue={setGarageValue}
                    setItems={setTypeItems}
                    onOpen={onOpenGarage}
                />

            </View>
        );
    }
    const renderPavementItem = (title, id,) => {
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
                        height: PavementOpen == true ? 200 : 35,
                        marginBottom: PavementOpen == true ? 30 : 0,
                    }}
                    open={PavementOpen}
                    value={pavementValue}
                    items={TypeOfitems}
                    setOpen={setPavementOpen}
                    setValue={setPavementValue}
                    setItems={setTypeItems}
                    onOpen={onOpenpavement}
                />

            </View>
        );
    }

    const renderPaversItem = (title, id,) => {
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
                        height: PaversOpen == true ? 200 : 35,
                        marginBottom: PaversOpen == true ? 30 : 0,
                    }}
                    open={PaversOpen}
                    value={paversValue}
                    items={TypeOfitems}
                    setOpen={setPaversOpen}
                    setValue={setPaversValue}
                    setItems={setTypeItems}
                    onOpen={onOpenpavers}
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
            <Text style={[styles.headerText, { marginVertical: 5 }]}>Yard and Fences</Text>
            {renderDrainageItem(title = 'Drainage', id = '1')}
            {renderFencesItem(title = 'Fences', id = '2')}
            {renderRetainingItem(title = 'Retaining Walls', id = '3')}
            {renderGarageItem(title = 'Garage/carport', id = '4')}
            {renderPavementItem(title = 'Pavement', id = '5')}
            {renderPaversItem(title = 'Pavers', id = '6')}
            
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
export default Yard;