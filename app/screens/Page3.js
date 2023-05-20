import React, { useState, useCallback } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import colors from '../config/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from 'react-native-modal-datetime-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import moment from 'moment';
import AppTextInput from '../components/AppTextInput';
import AppBackButton from '../components/AppBackButton';
import AppButton from '../components/AppButton';
import CheckBox from '../components/CheckBox';
import Picker from './components/Picker';
const InaccessibleArea = {
    Roof_exterior: 'Roof exterior',
    roof_exterior: false,
    Part_roof_exterior: 'Part roof exterior',
    part_roof_exterior: false,
    Roof_interior: 'Roof interior',
    roof_interior: false,
    Part_roof_interior: 'Part roof interior',
    part_roof_interior: false,
    Sub_floor: 'Sub floor',
    sub_floor: false,
    Part_sub_floor: 'Part sub floor',
    part_sub_floor: false,
    Locked_room: 'Locked room',
    locked_room: false,
    Locked_garage: 'Locked garage',
    locked_garage: false,
    Locked_granny_flat: 'Locked granny flat',
    locked_granny_flat: false,
}
const VisualInspection = {
    Built_in_cupboards: 'Built in cupboards',
    built_in_cupboards: false,

    Floor_coverings: 'Floor coverings',
    floor_coverings: false,

    Furniture: 'Furniture',
    furniture: false,

    Stored_items: 'Stored items',
    stored_items: false,

    Exterior_vegetation: 'Exterior vegetation',
    exterior_vegetation: false,

    AC_roof_interior: 'A/​C in roof interior',
    ac_roof_interior: false,

    Insulation_roof_interior: 'Insulation in roof interior',
    insulation_roof_interior: false,
}
//ios-calendar-outline
const Page3 = ({ onNextButton, onBackButton }) => {
    //date 
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isdtReportVisible, setdtReportVisibility] = useState(false);
    const [dateOfInspec, setdateOfInspec] = useState('');
    const [dateOfReport, setdateOfReport] = useState('');
    const [isTO, setisTO] = useState(true);
    const [isTO1, setisTO1] = useState(true);

    //Type of Inspection
    const [typeOfInspOpen, setTypeOfInspOpen] = useState(false);
    const [typeOfInspValue, setTypeOfInspValue] = useState(null);
    //Weather Inspection
    const [weatherOpen, setWeatherOpen] = useState(false);
    const [weatherValue, setWeatherValue] = useState(null);
    //Property conditions
    const [propcondOpen, setPropCondOpen] = useState(false);
    const [propcondValue, setPropCondValue] = useState(null);
    //Inaccesible area
    //wall construction
    const [inaccesibleArea, setInaccesibleArea] = useState(InaccessibleArea);
    const [visualInspection, setVisualInspection] = useState(VisualInspection);
    //YES No
    const [propetyYes, setPropetyYes] = useState('No');

    const [TypeOfitems, setTypeItems] = useState([
        { label: 'Building and pest', value: 'Building and pest' },
        { label: 'Building, pest & electrical', value: 'Building, pest & electrical' },
        { label: 'Building, pest, electrical and thermal imaging', value: 'Building, pest, electrical and thermal imaging' },
        { label: 'Building only', value: 'Building only' },
        { label: 'Pest only', value: 'Pest only' },
        { label: 'Electrical only', value: 'Electrical only' },
        { label: 'Specialised inspection', value: 'Specialised inspection' },

    ]);
    const [WeatherOfitems, setWeatherItems] = useState([
        { label: 'Fine', value: 'Fine' },
        { label: 'Overcast', value: 'Overcast' },
        { label: 'Light rain', value: 'Light rain' },
        { label: 'Heavy rain', value: 'Heavy rain' },
    ]);
    const [PropertycondItems, setPropertycondItems] = useState([
        { label: 'Poor', value: 'Poor' },
        { label: 'Below average', value: 'Below average' },
        { label: 'Average', value: 'Average' },
        { label: 'Above average', value: 'Above average' },
        { label: 'Excellent', value: 'Excellent' },
    ]);
    const [imageuri, setImageuri] = useState("");
    const getImagedata=(uri)=>{
     setImageuri(uri)
 }
    const onTypeOfInspection = useCallback(() => {
        //invisible previous dropdown
        setWeatherOpen(false);
        setPropCondOpen(false);

    }, []);
    const onWeatherOfInspection = useCallback(() => {
        //invisible previous dropdown
        setTypeOfInspOpen(false);
        setPropCondOpen(false);

    }, []);
    const onPropertyCondition = useCallback(() => {
        //invisible previous dropdown
        setTypeOfInspOpen(false);
        setWeatherOpen(false);

    }, []);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    }
    const showDatePickerReport = () => {
        setdtReportVisibility(true);
    }
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
        setdtReportVisibility(false);
    }
    const handleDateConfirm = date => {
        if (isTO) {
            const dt = moment(date).format('MMM-DD-YYYY');
            setdateOfInspec(dt);
        }
        hideDatePicker();
    }
    const handleDateOfReport = date => {

        if (isTO1) {
            const dt = moment(date).format('MMM-DD-YYYY');
            setdateOfReport(dt);
        }
        hideDatePicker();
    }
    const renderDataOfInspection = () => {
        return (
            <View style={{ marginVertical: 10 }}>
                <Text style={styles.titleText}>Date of inspection</Text>
                <TouchableOpacity onPress={() => {
                    showDatePicker(),
                        setisTO(true)
                }}>
                    <View style={styles.dateView}>
                        <Text style={styles.normlText}>{dateOfInspec}</Text>
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
    const renderDataOfReport = () => {
        return (
            <View style={{ marginVertical: 0 }}>
                <Text style={styles.titleText}>Date of Report</Text>
                <TouchableOpacity onPress={() => {
                    showDatePickerReport(),
                        setisTO1(true)
                }}>
                    <View style={styles.dateView}>
                        <Text style={styles.normlText}>{dateOfReport}</Text>
                        <Icon name='ios-calendar-outline' size={20} color={colors.primary} />
                    </View>
                </TouchableOpacity>
                <DateTimePicker
                    isVisible={isdtReportVisible}
                    mode='date'
                    onConfirm={handleDateOfReport}
                    onCancel={hideDatePicker}
                />
            </View>
        );
    }
    const renderTypeOfInspection = () => {
        return (
            <View style={{ marginVertical: 20 }}>
                <Text style={[styles.titleText, { marginBottom: 15 }]}>Type of inspection</Text>
                <DropDownPicker
                    listMode='SCROLLVIEW'
                    dropDownDirection='BOTTOM'
                    style={styles.dropDownstyle}
                    textStyle={styles.dropDownTextStyle}
                    placeholder="Building and pest"
                    dropDownContainerStyle={styles.dropDownContainerStyle}
                    // dropDownMaxHeight={200}
                    containerProps={{
                        height: typeOfInspOpen == true ? 200 : 15,
                        marginBottom: 20,
                    }}
                    open={typeOfInspOpen}
                    value={typeOfInspValue}
                    items={TypeOfitems}
                    setOpen={setTypeOfInspOpen}
                    setValue={setTypeOfInspValue}
                    setItems={setTypeItems}
                    onOpen={onTypeOfInspection}
                />
                <View style={{ height: 20 }}></View>
            </View>
        );
    }

    const renderWeatherInspection = () => {
        return (
            <View style={{ marginVertical: 20 }}>
                <Text style={[styles.titleText, { marginBottom: 15 }]}>Weather at time of inspection</Text>
                <DropDownPicker
                    listMode='SCROLLVIEW'
                    dropDownDirection='BOTTOM'
                    style={styles.dropDownstyle}
                    textStyle={styles.dropDownTextStyle}
                    placeholder="Fine"
                    dropDownContainerStyle={styles.dropDownContainerStyle}
                    dropDownMaxHeight={200}
                    containerProps={{
                        height: weatherOpen == true ? 200 : 15,
                        marginBottom: 20,
                    }}
                    open={weatherOpen}
                    value={weatherValue}
                    items={WeatherOfitems}
                    setOpen={setWeatherOpen}
                    setValue={setWeatherValue}
                    setItems={setWeatherItems}
                    onOpen={onWeatherOfInspection}
                />
                <View style={{ height: 20 }}></View>
            </View>
        );
    }
    const renderInspector = () => {
        return (
            <View style={{ marginVertical: 10 }}>
                <Text style={styles.titleText}>Inspectors name</Text>
                <View style={{ marginVertical: 10 }}>
                    <AppTextInput
                        autoCorrect={false}
                        name="email"
                        placeholder='Name'
                    />
                </View>
            </View>
        );
    }
    const renderInaccessibleArea = () => {
        return (
            <View style={{}}>
                <Text style={styles.titleText}>Inaccessible areas</Text>
                <View style={{ backgroundColor: 'white', padding: 10, marginVertical: 10 }}>
                    <CheckBox title={'Roof exterior'} isselected={inaccesibleArea.roof_exterior} onPress={() => {
                        setInaccesibleArea({
                            ...inaccesibleArea,
                            roof_exterior: !inaccesibleArea.roof_exterior
                        })
                    }} />
                    <CheckBox title={'Part roof exterior'} isselected={inaccesibleArea.part_roof_exterior} onPress={() => {
                        setInaccesibleArea({
                            ...inaccesibleArea,
                            part_roof_exterior: !inaccesibleArea.part_roof_exterior
                        })
                    }} />
                    <CheckBox title={'Roof interior'} isselected={inaccesibleArea.roof_interior} onPress={() => {
                        setInaccesibleArea({
                            ...inaccesibleArea,
                            roof_interior: !inaccesibleArea.roof_interior
                        })
                    }} />
                    <CheckBox title={'Part roof interior'} isselected={inaccesibleArea.part_roof_interior} onPress={() => {
                        setInaccesibleArea({
                            ...inaccesibleArea,
                            part_roof_interior: !inaccesibleArea.part_roof_interior
                        })
                    }} />
                    <CheckBox title={'Sub floor'} isselected={inaccesibleArea.sub_floor} onPress={() => {
                        setInaccesibleArea({
                            ...inaccesibleArea,
                            sub_floor: !inaccesibleArea.sub_floor
                        })
                    }} />
                    <CheckBox title={'Part sub floor'} isselected={inaccesibleArea.part_sub_floor} onPress={() => {
                        setInaccesibleArea({
                            ...inaccesibleArea,
                            part_sub_floor: !inaccesibleArea.part_sub_floor
                        })
                    }} />
                    <CheckBox title={'Locked room'} isselected={inaccesibleArea.locked_room} onPress={() => {
                        setInaccesibleArea({
                            ...inaccesibleArea,
                            locked_room: !inaccesibleArea.locked_room
                        })
                    }} />
                    <CheckBox title={'Locked garage'} isselected={inaccesibleArea.locked_garage} onPress={() => {
                        setInaccesibleArea({
                            ...inaccesibleArea,
                            locked_garage: !inaccesibleArea.locked_garage
                        })
                    }} />
                    <CheckBox title={'Locked granny flat'} isselected={inaccesibleArea.locked_granny_flat} onPress={() => {
                        setInaccesibleArea({
                            ...inaccesibleArea,
                            locked_granny_flat: !inaccesibleArea.locked_granny_flat
                        })
                    }} />
                </View>
                {renderInputNotes('Notes on inaccessible areas')}
            </View>
        );
    }
    const renderVisualInspection = () => {
        return (
            <View style={{}}>
                <Text style={styles.titleText}>Which items obstructed visual inspection of building elements</Text>
                <View style={{ backgroundColor: 'white', padding: 10, marginVertical: 10 }}>
                    <CheckBox title={'Built in cupboards'} isselected={visualInspection.built_in_cupboards} onPress={() => {
                        setVisualInspection({
                            ...visualInspection,
                            built_in_cupboards: !visualInspection.built_in_cupboards
                        })
                    }} />
                    <CheckBox title={'Floor coverings'} isselected={visualInspection.floor_coverings} onPress={() => {
                        setVisualInspection({
                            ...visualInspection,
                            floor_coverings: !visualInspection.floor_coverings
                        })
                    }} />
                    <CheckBox title={'Furniture'} isselected={visualInspection.furniture} onPress={() => {
                        setVisualInspection({
                            ...visualInspection,
                            furniture: !visualInspection.furniture
                        })
                    }} />
                    <CheckBox title={'Stored items'} isselected={visualInspection.stored_items} onPress={() => {
                        setVisualInspection({
                            ...visualInspection,
                            stored_items: !visualInspection.stored_items
                        })
                    }} />
                    <CheckBox title={'Exterior vegetation'} isselected={visualInspection.exterior_vegetation} onPress={() => {
                        setVisualInspection({
                            ...visualInspection,
                            exterior_vegetation: !visualInspection.exterior_vegetation
                        })
                    }} />
                    <CheckBox title={'A/​C in roof interior'} isselected={visualInspection.ac_roof_interior} onPress={() => {
                        setVisualInspection({
                            ...visualInspection,
                            ac_roof_interior: !visualInspection.ac_roof_interior
                        })
                    }} />
                    <CheckBox title={'Insulation in roof interior'} isselected={visualInspection.locked_room} onPress={() => {
                        setVisualInspection({
                            ...visualInspection,
                            insulation_roof_interior: !visualInspection.insulation_roof_interior
                        })
                    }} />
                </View>
                {renderInputNotes('Notes on inaccessible areas')}
            </View>
        );
    }
    const renderRadioBtnWithText = () => {
        return (
            <View>
                <Text style={styles.titleText}> Was there evidence of major or structural defects</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => propetyYes == 'Yes' ? setPropetyYes('') : setPropetyYes('Yes')} >
                            <MaterialIcon name={propetyYes === 'Yes' ? 'radiobox-marked' : 'radiobox-blank'} size={26} color={colors.primary} />
                        </TouchableOpacity>
                        <Text style={[styles.titleText, { marginLeft: 5 }]}>Yes</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }}>
                        <TouchableOpacity onPress={() => propetyYes == 'No' ? setPropetyYes('') : setPropetyYes('No')} >
                            <MaterialIcon name={propetyYes === 'No' ? 'radiobox-marked' : 'radiobox-blank'} size={26} color={colors.primary} />
                        </TouchableOpacity>
                        <Text style={[styles.titleText, { marginLeft: 5 }]}>No</Text>
                    </View>
                </View>
                {renderInputNotes('What were the major or structural defects')}
            </View>
        );
    }


    const renderInputNotes = (notes) => {
        return (
            <View style={{ marginVertical: 10 }}>
                <Text style={styles.titleText}>{notes}</Text>
                <View style={{ marginVertical: 10, borderWidth: 1, borderColor: colors.borderColor, padding: 5 }}>
                    <TextInput
                        multiline={true}
                        numberOfLines={10}
                        underlineColorAndroid="transparent"
                        placeholder="Type something"
                        placeholderTextColor="grey"
                        style={[styles.normlText, { height: 100, textAlignVertical: 'top', color: colors.dark, }]} />
                </View>

            </View>
        );
    }
    const renderPropertyConditions = () => {
        return (
            <View style={{ marginVertical: 20 }}>
                <Text style={[styles.titleText, { marginBottom: 15 }]}>The property presents in condition</Text>
                <DropDownPicker
                    listMode='SCROLLVIEW'
                    dropDownDirection='BOTTOM'
                    style={styles.dropDownstyle}
                    textStyle={styles.dropDownTextStyle}
                    placeholder="Fine"
                    dropDownContainerStyle={styles.dropDownContainerStyle}
                    dropDownMaxHeight={200}
                    containerProps={{
                        height: propcondOpen == true ? 200 : 15,
                        marginBottom: 20,
                    }}
                    open={propcondOpen}
                    value={propcondValue}
                    items={PropertycondItems}
                    setOpen={setPropCondOpen}
                    setValue={setPropCondValue}
                    setItems={setPropertycondItems}
                    onOpen={onPropertyCondition}
                />
                <View style={{ height: 20 }}></View>
            </View>
        );
    }
    const renderPictures = () => {
        return (
            <View style={{ marginVertical: 10 }}>
                <Text style={styles.titleText}>Pictures</Text>
                <Picker
    getImagedata={getImagedata}
    />
                {/* <View style={styles.uploadView}>
                    <TouchableOpacity>
                        <View style={styles.uploadBtn}>
                            <Text style={{ alignSelf: 'center', fontSize: 14, color: colors.medium }}>Upload111</Text>
                        </View>
                    </TouchableOpacity>
                </View> */}
                {renderInputNotes('Notes')}
            </View>
        );
    }
    const renderBottomView = () => {
        return (

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}>
                <AppBackButton title={'Back'} onPress={onBackButton} />
                <AppButton title={'Next'} onPress={onNextButton} />
            </View>
        );
    }
    return (
        <View style={{ margin: 10 }}>
            <View style={{ backgroundColor: colors.borderColor, padding: 20, }}>

                <Text style={styles.headerText}>3. Inspection Details</Text>
                {renderDataOfInspection()}
                {renderDataOfReport()}
                {renderTypeOfInspection()}
                {renderWeatherInspection()}
                {renderInspector()}
                {renderInaccessibleArea()}
                {renderVisualInspection()}
                {renderRadioBtnWithText()}
                {renderRadioBtnWithText()}
                {renderRadioBtnWithText()}
                {renderPropertyConditions()}
                {renderPictures()}
            </View>
            {renderBottomView()}

        </View>
    );
}
const styles = StyleSheet.create({

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
    dropDownstyle: {
        borderWidth: 1,
        borderColor: colors.borderColor,
        borderRadius: 5,
        backgroundColor: colors.borderColor,
    },
    dropDownTextStyle: {
        fontSize: 15,
        color: colors.dark,
    },
    dropDownContainerStyle: {
        backgroundColor: colors.white,
        borderWidth: 0.5,
        borderColor: colors.borderColor,
        marginTop: 0,
        minHeight: 130,
    },
    checkboxWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        width: '50%'
    },
    uploadView: {
        height: 60,
        backgroundColor:
            colors.borderColor,
        marginTop: 10,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.borderColor,
        borderRadius: 5,
    },
    uploadBtn: {
        marginLeft: 10,
        height: 35,
        width: 70,
        backgroundColor: colors.borderColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.borderColor,
        borderRadius: 5,
        padding: 7,
    },

})
export default Page3;