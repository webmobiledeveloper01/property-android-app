import React, { useState, useCallback } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import colors from '../../config/colors';
import DropDownPicker from 'react-native-dropdown-picker';
import Picker from './Picker';
function RoofExterior({ title, id }) {

    //Type of Inspection
    const [tilesopen, setTilesOpen] = useState(false);
    const [tilesValue, setTilesValue] = useState(null);
    const [sheetingOpen, setSheetingOpen] = useState(false);
    const [sheetingValue, setSheetingValue] = useState(null);
    const [flashingOpen, setFlashingOpen] = useState(false);
    const [flashingValue, setFlashingValue] = useState(null);
    const [ridgeOpen, setRidgeOpen] = useState(false);
    const [ridgeValue, setRidgeValue] = useState(null);
    const [gutterOpen, setGutterOpen] = useState(false);
    const [gutterValue, setGutterValue] = useState(null);
    const [levelOpen, setLevelOpen] = useState(false);
    const [levelValue, setLevelValue] = useState(null);

    const [TypeOfitems, setTypeItems] = useState([
        { label: 'Satisfactory', value: 'Satisfactory' },
        { label: 'Minor defect', value: 'Minor defect' },
        { label: 'Major defect', value: 'Major defect' },
        { label: 'No access', value: 'No access' },
        { label: 'N/A', value: 'N/A' },
    ]);

    const [imageuri, setImageuri] = useState("");
    const getImagedata=(uri)=>{
     setImageuri(uri)
 }


    const onOpenTiles = useCallback(() => {
        //invisible previous dropdown

    }, []);
    const onOpenSheeting = useCallback(() => {
        //invisible previous dropdown

    }, []);
    const onOpenFlashing = useCallback(() => {
        //invisible previous dropdown

    }, []);
    const onOpenRidge= useCallback(() => {
        //invisible previous dropdown

    }, []);
    const onOpenGutter = useCallback(() => {
        //invisible previous dropdown

    }, []);
    const onOpenLevel = useCallback(() => {
        //invisible previous dropdown

    }, []);


    const renderTilesItem = (title, id,) => {
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
                        height: tilesopen == true ? 200 : 35,
                        marginBottom: tilesopen == true ? 30 : 0,
                    }}
                    open={tilesopen}
                    value={tilesValue}
                    items={TypeOfitems}
                    setOpen={setTilesOpen}
                    setValue={setTilesValue}
                    setItems={setTypeItems}
                    onOpen={onOpenTiles}
                />

            </View>
        );
    }
    const renderSheetingItem = (title, id,) => {
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
                        height: sheetingOpen == true ? 200 : 35,
                        marginBottom: sheetingOpen == true ? 30 : 0,
                    }}
                    open={sheetingOpen}
                    value={sheetingValue}
                    items={TypeOfitems}
                    setOpen={setSheetingOpen}
                    setValue={setSheetingValue}
                    setItems={setTypeItems}
                    onOpen={onOpenSheeting}
                />

            </View>
        );
    }
    const renderFlashingItem = (title, id,) => {
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
                        height: flashingOpen == true ? 200 : 35,
                        marginBottom: flashingOpen == true ? 30 : 0,
                    }}
                    open={flashingOpen}
                    value={flashingValue}
                    items={TypeOfitems}
                    setOpen={setFlashingOpen}
                    setValue={setFlashingValue}
                    setItems={setTypeItems}
                    onOpen={onOpenFlashing}
                />

            </View>
        );
    }
    const renderRidgeItem = (title, id,) => {
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
                        height: ridgeOpen == true ? 200 : 35,
                        marginBottom: ridgeOpen == true ? 30 : 0,
                    }}
                    open={ridgeOpen}
                    value={ridgeValue}
                    items={TypeOfitems}
                    setOpen={setRidgeOpen}
                    setValue={setRidgeValue}
                    setItems={setTypeItems}
                    onOpen={onOpenRidge}
                />

            </View>
        );
    }
    const renderGutterItem = (title, id,) => {
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
                        height: gutterOpen == true ? 200 : 35,
                        marginBottom: gutterOpen == true ? 30 : 0,
                    }}
                    open={gutterOpen}
                    value={gutterValue}
                    items={TypeOfitems}
                    setOpen={setGutterOpen}
                    setValue={setGutterValue}
                    setItems={setTypeItems}
                    onOpen={onOpenGutter}
                />

            </View>
        );
    }


    const renderLevelItem = (title, id,) => {
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
                        height: levelOpen == true ? 200 : 35,
                        marginBottom: levelOpen == true ? 30 : 0,
                    }}
                    open={levelOpen}
                    value={levelValue}
                    items={TypeOfitems}
                    setOpen={setLevelOpen}
                    setValue={setLevelValue}
                    setItems={setTypeItems}
                    onOpen={onOpenLevel}
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
            <Text style={[styles.headerText, { marginVertical: 5 }]}>Roof Exterior</Text>
            {renderTilesItem(title = 'Tiles', id = '1')}
            {renderSheetingItem(title = 'Sheeting', id = '2')}
            {renderFlashingItem(title = 'Flashing', id = '3')}
            {renderRidgeItem(title = 'Ridge and mortar', id = '4')}
            {renderGutterItem(title = 'Gutters/Down Pipes', id = '5')}
            {renderLevelItem(title = 'Level', id = '6')}
            
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
export default RoofExterior;