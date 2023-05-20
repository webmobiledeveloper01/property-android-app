import React, { useState, useCallback } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import colors from '../../config/colors';
import DropDownPicker from 'react-native-dropdown-picker';
import Picker from './Picker';
import { Column,Row } from './containers';
function Bathroom({ title, id,item,cancelBathroom }) {

    //Type of Inspection
    const [floorOpen, setFloorOpen] = useState(false);
    const [floorValue, setFloorValue] = useState(null);
    const [wallOpen, setWallOpen] = useState(false);
    const [wallValue, setWallValue] = useState(null);
    const [doorOpen, setDoorOpen] = useState(false);
    const [doorValue, setDoorValue] = useState(null);
    const [celingOpen, setCelingOpen] = useState(false);
    const [celingValue, setCelingValue] = useState(null);
    const [benchOpen, setBenchOpen] = useState(false);
    const [benchValue, setBenchValue] = useState(null);
    const [tapsOpen, setTapsOpen] = useState(false);
    const [tapsValue, setTapsValue] = useState(null);
    const [cupOpen, setCupOpen] = useState(false);
    const [cupValue, setCupValue] = useState(null);
    const [rangeOpen, setRangeOpen] = useState(false);
    const [rangeValue, setRangeValue] = useState(null);

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

    const onTypeOfInspection = useCallback(() => {
        //invisible previous dropdown
    }, []);

    const renderFloorItem = (title, id,) => {
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
                        height: floorOpen == true ? 200 : 35,
                        marginBottom: floorOpen == true ? 30 : 0,
                    }}
                    open={floorOpen}
                    value={floorValue}
                    items={TypeOfitems}
                    setOpen={setFloorOpen}
                    setValue={setFloorValue}
                    setItems={setTypeItems}
                    onOpen={onTypeOfInspection}
                />

            </View>
        );
    }
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
                    dropDownMaxHeight={200}
                    containerProps={{
                        height: wallOpen == true ? 200 : 35,
                        marginBottom: wallOpen == true ? 30 : 0,
                    }}
                    open={wallOpen}
                    value={wallValue}
                    items={TypeOfitems}
                    setOpen={setWallOpen}
                    setValue={setWallValue}
                    setItems={setTypeItems}
                    onOpen={onTypeOfInspection}
                />

            </View>
        );
    }
    const renderDoorItem = (title, id,) => {
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
                        height: doorOpen == true ? 200 : 35,
                        marginBottom: doorOpen == true ? 30 : 0,
                    }}
                    open={doorOpen}
                    value={doorValue}
                    items={TypeOfitems}
                    setOpen={setDoorOpen}
                    setValue={setDoorValue}
                    setItems={setTypeItems}
                    onOpen={onTypeOfInspection}
                />

            </View>
        );
    }
    const renderCeilingItem = (title, id,) => {
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
                        height: celingOpen == true ? 200 : 35,
                        marginBottom: celingOpen == true ? 30 : 0,
                    }}
                    open={celingOpen}
                    value={celingValue}
                    items={TypeOfitems}
                    setOpen={setCelingOpen}
                    setValue={setCelingValue}
                    setItems={setTypeItems}
                    onOpen={onTypeOfInspection}
                />

            </View>
        );
    }
    const renderBenchtopItem = (title, id,) => {
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
                        height: benchOpen == true ? 200 : 35,
                        marginBottom: benchOpen == true ? 30 : 0,
                    }}
                    open={benchOpen}
                    value={benchValue}
                    items={TypeOfitems}
                    setOpen={setBenchOpen}
                    setValue={setBenchValue}
                    setItems={setTypeItems}
                    onOpen={onTypeOfInspection}
                />

            </View>
        );
    }
    const renderTapsItem = (title, id,) => {
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
                        height: tapsOpen == true ? 200 : 35,
                        marginBottom: tapsOpen == true ? 30 : 0,
                    }}
                    open={tapsOpen}
                    value={tapsValue}
                    items={TypeOfitems}
                    setOpen={setTapsOpen}
                    setValue={setTapsValue}
                    setItems={setTypeItems}
                    onOpen={onTypeOfInspection}
                />

            </View>
        );
    }
    const renderCupboardsItem = (title, id,) => {
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
                        height: cupOpen == true ? 200 : 35,
                        marginBottom: cupOpen == true ? 30 : 0,
                    }}
                    open={cupOpen}
                    value={cupValue}
                    items={TypeOfitems}
                    setOpen={setCupOpen}
                    setValue={setCupValue}
                    setItems={setTypeItems}
                    onOpen={onTypeOfInspection}
                />

            </View>
        );
    }
    const renderRangehoodItem = (title, id,) => {
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
                        height: rangeOpen == true ? 200 : 35,
                        marginBottom: rangeOpen == true ? 30 : 0,
                    }}
                    open={rangeOpen}
                    value={rangeValue}
                    items={TypeOfitems}
                    setOpen={setRangeOpen}
                    setValue={setRangeValue}
                    setItems={setTypeItems}
                    onOpen={onTypeOfInspection}
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
             cancelBathroom(item?.id)
         }}
         >
         <Image style={{height:20,width:20}} source={require('../../assets/cross.png')} />
         </TouchableOpacity>
        
        
             </Column> 
             <Column noPadding size={11}>
                <Text style={[styles.headerText, { marginVertical: 5 }]}>{title+" "+item?.id}</Text> 
                </Column>
                </Row>
            {renderFloorItem(title = 'Wall tiles', id = '1')}
            {renderWallItem(title = 'Floor tiles', id = '2')}
            {renderDoorItem(title = 'Vanity', id = '3')}
            {renderCeilingItem(title = 'Shower', id = '4')}
            {renderBenchtopItem(title = 'Floor waste', id = '5')}
            {renderTapsItem(title = 'Door', id = '6')}
            {renderCupboardsItem(titi = 'Window', id = '7')}
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
export default Bathroom;