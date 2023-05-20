import React, { useState, useCallback } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import colors from '../../config/colors';
import DropDownPicker from 'react-native-dropdown-picker';
import Picker from './Picker';
import { Column,Row } from './containers';
function BuildingExterior({ title, id,item, cancelBuildingRoom }) {

    //Type of Inspection
    const [wallsopen, setWallsOpen] = useState(false);
    const [wallsValue, setwallsValue] = useState(null);
    const [windowsOpen, setWindowsOpen] = useState(false);
    const [windowsValue, setWindowsValue] = useState(null);
    const [eavesOpen, setEavesOpen] = useState(false);
    const [eavesValue, setEavesValue] = useState(null);
    const [pergolaOpen, setPergolaOpen] = useState(false);
    const [pergolaValue, setPergolaValue] = useState(null);
    const [deckOpen, setDeckOpen] = useState(false);
    const [deckValue, setDeckValue] = useState(null);

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


    const onOpenWalls = useCallback(() => {
        //invisible previous dropdown

    }, []);
    const onOpenWindows = useCallback(() => {
        //invisible previous dropdown

    }, []);
    const onOpenEaves = useCallback(() => {
        //invisible previous dropdown

    }, []);
    const onOpenPergola = useCallback(() => {
        //invisible previous dropdown

    }, []);
    const onOpenDeck = useCallback(() => {
        //invisible previous dropdown

    }, []);
    


    const renderWallItem = (title, id,) => {
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
                        height: wallsopen == true ? 200 : 35,
                        marginBottom: wallsopen == true ? 30 : 0,
                    }}
                    open={wallsopen}
                    value={wallsValue}
                    items={TypeOfitems}
                    setOpen={setWallsOpen}
                    setValue={setwallsValue}
                    setItems={setTypeItems}
                    onOpen={onOpenWalls}
                />

            </View>
        );
    }
    const renderWindowsItem = (title, id,) => {
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
                        height: windowsOpen == true ? 200 : 35,
                        marginBottom: windowsOpen == true ? 30 : 0,
                    }}
                    open={windowsOpen}
                    value={windowsValue}
                    items={TypeOfitems}
                    setOpen={setWindowsOpen}
                    setValue={setWindowsValue}
                    setItems={setTypeItems}
                    onOpen={onOpenWindows}
                />

            </View>
        );
    }
    const renderEavesItem = (title, id,) => {
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
                        height: eavesOpen == true ? 200 : 35,
                        marginBottom: eavesOpen == true ? 30 : 0,
                    }}
                    open={eavesOpen}
                    value={eavesValue}
                    items={TypeOfitems}
                    setOpen={setEavesOpen}
                    setValue={setEavesValue}
                    setItems={setTypeItems}
                    onOpen={onOpenEaves}
                />

            </View>
        );
    }
    const renderPergolaItem = (title, id,) => {
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
                        height: pergolaOpen == true ? 200 : 35,
                        marginBottom: pergolaOpen == true ? 30 : 0,
                    }}
                    open={pergolaOpen}
                    value={pergolaValue}
                    items={TypeOfitems}
                    setOpen={setPergolaOpen}
                    setValue={setPergolaValue}
                    setItems={setTypeItems}
                    onOpen={onOpenPergola}
                />

            </View>
        );
    }
    const renderDeckItem = (title, id,) => {
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
                        height: deckOpen == true ? 200 : 35,
                        marginBottom: deckOpen == true ? 30 : 0,
                    }}
                    open={deckOpen}
                    value={deckValue}
                    items={TypeOfitems}
                    setOpen={setDeckOpen}
                    setValue={setDeckValue}
                    setItems={setTypeItems}
                    onOpen={onOpenDeck}
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
             <Row  centerAlignItems>
        <Column noPadding size={1}>
         
            <TouchableOpacity
            onPress={()=>{
                cancelBuildingRoom(item?.id)
            }}
            >
            <Image style={{height:20,width:20}} source={require('../../assets/cross.png')} />
            </TouchableOpacity>
           
           
                </Column> 
                <Column noPadding size={11}>
                <Text style={[styles.headerText, { marginVertical: 5 }]}>Building exterior {item?.id}</Text>
                </Column>
                </Row>
            {renderWallItem(title = 'Walls', id = '1')}
            {renderWindowsItem(title = 'Windows', id = '2')}
            {renderEavesItem(title = 'Eaves', id = '3')}
            {renderPergolaItem(title = 'Pergola', id = '4')}
            {renderDeckItem(title = 'Deck', id = '5')}
            
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
export default BuildingExterior;