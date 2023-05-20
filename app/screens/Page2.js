import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import AppTextInput from '../components/AppTextInput';
import AppTextInput1 from '../components/AppTextInput1';
import colors from '../config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from '../components/CheckBox';
import AppFooter from '../components/AppFooter';

const Wallconstruction = {
    brick_venee: false,
    full_brick: false,
    timber_frame: false,
    clad: false,
    sheet: false,
    combination: false,
    Brick_venee: 'Brick venee',
    Full_brick: 'Full brick',
    Timber_frame: 'Timber frame',
    Clad: 'Clad',
    Sheet: 'Sheet',
    Combination: 'Combination',
}
const Roofconstruction = {
    metal_corrugated: false,
    Metal_corrugated: 'Metal corrugated',
    concrete_tile: false,
    Concrete_tile: 'Concrete tile',
    asbestos: false,
    Asbestos: 'Asbestos',
    terracotta_tile: false,
    Terracotta_tile: 'Terracotta tile',
    flat: false,
    Flat: 'Flat',
    pitched: false,
    Pitched: 'Pitched',
    combination: false,
    Combination: 'Combination',
    other: false,
    Other: 'Other'
}
const Floorconstruction = {
    Timber_on_brick: 'Timber on brick piers',
    timber_on_brick: false,
    timber_on_sand: false,
    Timber_on_sand: 'Timber on sandstone piers',
    Concrete_slab: 'Concrete slab',
    concrete_slab: false,
    combination: false,
    Combination: 'Combination',
    other: false,
    Other: 'Other'


}
function Page2({ onBackButton, onNextButton }) {

    //Dropdown of Property Faced
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'North', value: 'North' },
        { label: 'East', value: 'East' },
        { label: 'South', value: 'South' },
        { label: 'West', value: 'West' },
        { label: 'North east', value: 'North east' },
        { label: 'South east', value: 'South east' },
        { label: 'South west', value: 'South west' },

    ]);
    //Type of property
    const [propertyTypeOpen, setPropertyTypeOpen] = useState(false);
    const [propertyTypeValue, setPropertyTypeValue] = useState(null);
    const [proptypeItems, setproptypeItems] = useState([
        { label: 'Free standing house', value: 'Free standing house' },
        { label: 'Unit', value: 'Unit' },
        { label: 'Terrace', value: 'Terrace' },
        { label: 'Semi duplex', value: 'Semi duplex' },
        { label: 'Townhouse', value: 'Townhouse' },
        { label: 'Commercial/retail', value: 'Commercial/retail' },
        { label: 'Other', value: 'Other' },
    ]);

    //YES No
    const [propetyYes, setPropetyYes] = useState('No');
    const [propYear, setPropYear] = useState(0);

    //occupied and furnished
    const [occupiedOpen, setOccupiedOpen] = useState(false);
    const [occupiedValue, setOccupiedValue] = useState(null);
    const [occupiedItems, setOccupiedItems] = useState([
        { label: 'Occupied and furnished', value: 'Occupied and furnished' },
        { label: 'Unoccupied and furnished', value: 'Unoccupied and furnished' },
        { label: 'Unccupied and unfurnished', value: 'Unoccupied and unfurnished' },

    ]);
    //Checkbox 
    //wall construction
    const [wallstate, setWallState] = useState(Wallconstruction);
    const [roofstate, setRoofState] = useState(Roofconstruction);
    const [floorstate, setFloorState] = useState(Floorconstruction);
    //Dropdown No of 
    const [bedroomOpen, setBedRoomOpen] = useState(false);
    const [bedroomValue, setBedRoomValue] = useState(null);
    const [bedroomItems, setBedRoomItems] = useState([
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5 or more', value: '5 or more' },
    ]);
    const [livingroomOpen, setLivingRoomOpen] = useState(false);
    const [livingroomValue, setLivingRoomValue] = useState(null);
    const [livingroomItems, setLivingRoomItems] = useState([
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3 or more', value: '3 or more' },
    ]);
    const [kitchenOpen, setKitchenOpen] = useState(false);
    const [kitchenValue, setKitchenValue] = useState(null);
    const [kitchenItems, setKitchenItems] = useState([
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3 or more', value: '3 or more' },
    ]);
    const [bathroomOpen, setBathRoomOpen] = useState(false);
    const [bathroomValue, setBathRoomValue] = useState(null);
    const [bathroomItems, setBathRoomItems] = useState([
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3 or more', value: '3 or more' },
    ]);
    const [toiletOpen, setToiletRoomOpen] = useState(false);
    const [toiletValue, setToiletRoomValue] = useState(null);
    const [toiletItems, setToiletRoomItems] = useState([
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3 or more', value: '3 or more' },
    ]);
    //Laundry
    const [laundryOpen, setLaundryOpen] = useState(false);
    const [laundryValue, setLaundryValue] = useState(null);
    const [laundryItems, setLaundryItems] = useState([
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3 or more', value: '3 or more' },
    ]);
    //Dropdown hide
    const onPropertyfaces = useCallback(() => {
        setPropertyTypeOpen(false);
        setOccupiedOpen(false);
        setBedRoomOpen(false)
    }, []);
    const onPropertyType = useCallback(() => {
        setOpen(false);
        setOccupiedOpen(false);
        setBedRoomOpen(false)
    }, []);
    const onOccupiedType = useCallback(() => {
        setOpen(false);
        setPropertyTypeOpen(false);
        setBedRoomOpen(false)
    }, []);
    const onNoOfBedRoom = useCallback(() => {
        setOpen(false);
        setPropertyTypeOpen(false);
        setOccupiedOpen(false);
        setLivingRoomOpen(false);
        setKitchenOpen(false);
        setBathRoomOpen(false);
        setToiletRoomOpen(false);
        setLaundryOpen(false);
    }, []);

    const onNoOfLivingRoom = useCallback(() => {
        setOpen(false);
        setPropertyTypeOpen(false);
        setOccupiedOpen(false);
        setBedRoomOpen(false);
        setKitchenOpen(false);
        setBathRoomOpen(false);
        setToiletRoomOpen(false);
        setLaundryOpen(false);
    }, []);
    const onKitchenRoom = useCallback(() => {
        setOpen(false);
        setPropertyTypeOpen(false);
        setOccupiedOpen(false);
        setBedRoomOpen(false);
        setLivingRoomOpen(false);
        setBathRoomOpen(false);
        setToiletRoomOpen(false);
        setLaundryOpen(false);
    }, []);
    const onBathRoom = useCallback(() => {
        setOpen(false);
        setPropertyTypeOpen(false);
        setOccupiedOpen(false);
        setBedRoomOpen(false);
        setLivingRoomOpen(false);
        setKitchenOpen(false);
        setToiletRoomOpen(false);
        setLaundryOpen(false);
    }, []);
    const onToiletRoom = useCallback(() => {
        setOpen(false);
        setPropertyTypeOpen(false);
        setOccupiedOpen(false);
        setBedRoomOpen(false);
        setLivingRoomOpen(false);
        setKitchenOpen(false);
        setBathRoomOpen(false);
        setLaundryOpen(false);
    }, []);
    const onLaundryRoom = useCallback(() => {
        setOpen(false);
        setPropertyTypeOpen(false);
        setOccupiedOpen(false);
        setBedRoomOpen(false);
        setLivingRoomOpen(false);
        setKitchenOpen(false);
        setBathRoomOpen(false);
        setToiletRoomOpen(false);

    }, []);
    const renderClientDetail = () => {
        return (
            <View style={{ backgroundColor: colors.borderColor, padding: 20, }}>
                <Text style={styles.headerText}>1. Client Details</Text>

                <View style={{ marginVertical: 10 }}>
                    <Text style={[styles.titleText, {}]}>Client name</Text>
                    <View style={{ marginTop: 10 }}>

                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="email-address"
                            name="email"
                            placeholder='First Name'
                            textContentType="emailAddress"
                        />
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="email-address"
                            name="email"
                            placeholder='Last Name'
                            textContentType="emailAddress"
                        />
                    </View>
                </View>

                <View style={{ marginVertical: 10 }}>
                    <Text style={styles.titleText}>Client address</Text>
                    <View style={{ marginTop: 10 }}>

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
                            placeholder='Address Line 2'
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
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.titleText}>Client phone</Text>
                    <View style={{ marginVertical: 10 }}>
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="numeric"
                            name="email"
                            placeholder='Phone'
                            textContentType="emailAddress"
                        />

                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.titleText}>Client email</Text>
                    <View style={{ marginTop: 10 }}>
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="email-address"
                            name="email"
                            placeholder='email'
                            textContentType="emailAddress"
                        />
                    </View>
                </View>
            </View >
        );
    }
    const renderPropertyfaces = () => {
        return (
            <View style={{ marginVertical: 20, flex: 1 }}>
                <Text style={[styles.titleText, { marginBottom: 10 }]}>Property facade faces</Text>
                <DropDownPicker
                    listMode='SCROLLVIEW'
                    dropDownDirection='BOTTOM'
                    style={styles.dropDownstyle}
                    textStyle={styles.dropDownTextStyle}
                    placeholder="North"
                    dropDownContainerStyle={styles.dropDownContainerStyle}
                    containerProps={{
                        height: open == true ? 200 : 35,
                        marginBottom: open == true ? 30 : 0,
                    }}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    onOpen={onPropertyfaces}
                />
            </View>
        );
    }
    const renderPropertyType = () => {
        return (
            <View style={{ marginVertical: 20 }}>
                <Text style={[styles.titleText, { marginBottom: 10 }]}>Type of property</Text>
                <DropDownPicker
                    listMode='SCROLLVIEW'
                    dropDownDirection='BOTTOM'
                    style={styles.dropDownstyle}
                    textStyle={styles.dropDownTextStyle}
                    placeholder="Free standing house"
                    dropDownContainerStyle={styles.dropDownContainerStyle}
                    containerProps={{
                        height: propertyTypeOpen == true ? 200 : 35,
                        marginBottom: propertyTypeOpen == true ? 30 : 0,
                    }}
                    open={propertyTypeOpen}
                    value={propertyTypeValue}
                    items={proptypeItems}
                    setOpen={setPropertyTypeOpen}
                    setValue={setPropertyTypeValue}
                    setItems={setproptypeItems}
                    onOpen={onPropertyType}
                />
            </View>
        );
    }
    const renderRadioBtnWithText = () => {
        return (
            <View style={{ marginTop: 20 }}>
                <Text style={styles.titleText}> Is the property strata or company title? (If the property is under strata or company title only the unit and immediate surrounds were inspected. No inspection of common areas was carried out)</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => propetyYes == 'Yes' ? setPropetyYes('') : setPropetyYes('Yes')} >
                            <Icon name={propetyYes === 'Yes' ? 'radiobox-marked' : 'radiobox-blank'} size={26} color={colors.primary} />
                        </TouchableOpacity>
                        <Text style={[styles.titleText, { marginLeft: 5 }]}>Yes</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }}>
                        <TouchableOpacity onPress={() => propetyYes == 'No' ? setPropetyYes('') : setPropetyYes('No')} >
                            <Icon name={propetyYes === 'No' ? 'radiobox-marked' : 'radiobox-blank'} size={26} color={colors.primary} />
                        </TouchableOpacity>
                        <Text style={[styles.titleText, { marginLeft: 5 }]}>No</Text>
                    </View>
                </View>
            </View>
        );
    }
    const renderOccupiedStatus = () => {
        return (
            <View style={{ marginVertical: 20 }}>
                <Text style={[styles.titleText, { marginBottom: 10 }]}>Occupancy status</Text>
                <DropDownPicker
                    listMode='SCROLLVIEW'
                    dropDownDirection='BOTTOM'
                    style={styles.dropDownstyle}
                    textStyle={styles.dropDownTextStyle}
                    placeholder="Occupied and furnished"
                    dropDownContainerStyle={styles.dropDownContainerStyle}
                    containerProps={{
                        height: occupiedOpen == true ? 130 : 35,
                        marginBottom: occupiedOpen == true ? 30 : 0,
                    }}
                    open={occupiedOpen}
                    value={occupiedValue}
                    items={occupiedItems}
                    setOpen={setOccupiedOpen}
                    setValue={setOccupiedValue}
                    setItems={setOccupiedItems}
                    onOpen={onOccupiedType}
                />
            </View>
        );
    }
    const renderWallconstruction = () => {
        return (

            <View style={{ marginTop: 20 }}>
                <Text style={[styles.titleText, { marginBottom: 10 }]}>Wall construction</Text>
                <View style={{ backgroundColor: 'white', padding: 10 }}>
                    <CheckBox title={'Brick veneer'} isselected={wallstate.brick_venee} onPress={() => {
                        setWallState({
                            ...wallstate,
                            brick_venee: !wallstate.brick_venee
                        })
                    }} />
                    <CheckBox title={'Full brick'} isselected={wallstate.full_brick} onPress={() => {
                        setWallState({
                            ...wallstate,
                            full_brick: !wallstate.full_brick
                        })
                    }} />
                    <CheckBox title={'Timber frame'} isselected={wallstate.timber_frame} onPress={() => {
                        setWallState({
                            ...wallstate,
                            timber_frame: !wallstate.timber_frame
                        })
                    }} />
                    <CheckBox title={'Clad'} isselected={wallstate.clad} onPress={() => {
                        setWallState({
                            ...wallstate,
                            clad: !wallstate.clad
                        })
                    }} />
                    <CheckBox title={'Sheet'} isselected={wallstate.sheet} onPress={() => {
                        setWallState({
                            ...wallstate,
                            sheet: !wallstate.sheet
                        })
                    }} />
                    <CheckBox title={'Combination'} isselected={wallstate.combination} onPress={() => {
                        setWallState({
                            ...wallstate,
                            combination: !wallstate.combination
                        })
                    }} />
                </View>

            </View>
        );
    }
    const renderRoofconstruction = () => {
        return (

            <View style={{ marginTop: 20 }}>
                <Text style={[styles.titleText, { marginBottom: 10 }]}>Roof construction</Text>
                <View style={{ backgroundColor: 'white', padding: 10 }}>
                    <CheckBox title={roofstate.Metal_corrugated} isselected={roofstate.metal_corrugated} onPress={() => {
                        setRoofState({
                            ...roofstate,
                            metal_corrugated: !roofstate.metal_corrugated
                        })
                    }} />
                    <CheckBox title={roofstate.Concrete_tile} isselected={roofstate.concrete_tile} onPress={() => {
                        setRoofState({
                            ...roofstate,
                            concrete_tile: !roofstate.concrete_tile
                        })
                    }} />
                    <CheckBox title={roofstate.Asbestos} isselected={roofstate.asbestos} onPress={() => {
                        setRoofState({
                            ...roofstate,
                            asbestos: !roofstate.asbestos
                        })
                    }} />
                    <CheckBox title={roofstate.Terracotta_tile} isselected={roofstate.terracotta_tile} onPress={() => {
                        setRoofState({
                            ...roofstate,
                            terracotta_tile: !roofstate.terracotta_tile
                        })
                    }} />
                    <CheckBox title={roofstate.Flat} isselected={roofstate.flat} onPress={() => {
                        setRoofState({
                            ...roofstate,
                            flat: !roofstate.flat
                        })
                    }} />
                    <CheckBox title={roofstate.Pitched} isselected={roofstate.pitched} onPress={() => {
                        setRoofState({
                            ...roofstate,
                            pitched: !roofstate.pitched
                        })
                    }} />
                    <CheckBox title={roofstate.Combination} isselected={roofstate.combination} onPress={() => {
                        setRoofState({
                            ...roofstate,
                            combination: !roofstate.combination
                        })
                    }} />
                    <CheckBox title={roofstate.Other} isselected={roofstate.other} onPress={() => {
                        setRoofState({
                            ...roofstate,
                            other: !roofstate.other
                        })
                    }} />
                </View>

            </View>
        );
    }
    const renderFloorconstruction = () => {
        return (

            <View style={{ marginTop: 20 }}>
                <Text style={[styles.titleText, { marginBottom: 10 }]}>Floor construction</Text>
                <View style={{ backgroundColor: 'white', padding: 10 }}>
                    <CheckBox title={floorstate.Timber_on_brick} isselected={floorstate.timber_on_brick} onPress={() => {
                        setFloorState({
                            ...floorstate,
                            timber_on_brick: !floorstate.timber_on_brick
                        })
                    }} />
                    <CheckBox title={floorstate.Timber_on_sand} isselected={floorstate.timber_on_sand} onPress={() => {
                        setFloorState({
                            ...floorstate,
                            timber_on_sand: !floorstate.timber_on_sand
                        })
                    }} />
                    <CheckBox title={floorstate.Concrete_slab} isselected={floorstate.concrete_slab} onPress={() => {
                        setFloorState({
                            ...floorstate,
                            concrete_slab: !floorstate.concrete_slab
                        })
                    }} />

                    <CheckBox title={floorstate.Combination} isselected={floorstate.combination} onPress={() => {
                        setFloorState({
                            ...floorstate,
                            combination: !floorstate.combination
                        })
                    }} />
                    <CheckBox title={floorstate.Other} isselected={floorstate.other} onPress={() => {
                        setFloorState({
                            ...floorstate,
                            other: !floorstate.other
                        })
                    }} />
                </View>

            </View>
        );
    }
    const renderNoOfBedroom = () => {
        return (
            <View style={{ marginVertical: 20, flex: 1 }}>
                <Text style={[styles.titleText, { marginBottom: 10 }]}>No of bedrooms</Text>
                <DropDownPicker
                    listMode='SCROLLVIEW'
                    dropDownDirection='BOTTOM'
                    style={styles.dropDownstyle}
                    textStyle={styles.dropDownTextStyle}
                    placeholder="1"
                    dropDownContainerStyle={styles.dropDownContainerStyle}
                    containerProps={{
                        height: bedroomOpen == true ? 200 : 35,
                        marginBottom: bedroomOpen == true ? 30 : 0,
                    }}
                    open={bedroomOpen}
                    value={bedroomValue}
                    items={bedroomItems}
                    setOpen={setBedRoomOpen}
                    setValue={setBedRoomValue}
                    setItems={setBedRoomItems}
                    onOpen={onNoOfBedRoom}
                />
            </View>
        );
    }
    const renderNoOfLivingroom = () => {
        return (
            <View style={{ marginVertical: 20, flex: 1 }}>
                <Text style={[styles.titleText, { marginBottom: 10 }]}>No of living rooms</Text>
                <DropDownPicker
                    listMode='SCROLLVIEW'
                    dropDownDirection='BOTTOM'
                    style={styles.dropDownstyle}
                    textStyle={styles.dropDownTextStyle}
                    placeholder="1"
                    dropDownContainerStyle={styles.dropDownContainerStyle}
                    containerProps={{
                        height: livingroomOpen == true ? 120 : 35,
                        marginBottom: livingroomOpen == true ? 30 : 0,
                    }}
                    open={livingroomOpen}
                    value={livingroomValue}
                    items={livingroomItems}
                    setOpen={setLivingRoomOpen}
                    setValue={setLivingRoomValue}
                    setItems={setLivingRoomItems}
                    onOpen={onNoOfLivingRoom}
                />
            </View>
        );
    }
    const renderNoOfKitchen = () => {
        return (
            <View style={{ marginVertical: 20, flex: 1 }}>
                <Text style={[styles.titleText, { marginBottom: 10 }]}>No of kitchens</Text>
                <DropDownPicker
                    listMode='SCROLLVIEW'
                    dropDownDirection='BOTTOM'
                    style={styles.dropDownstyle}
                    textStyle={styles.dropDownTextStyle}
                    placeholder="1"
                    dropDownContainerStyle={styles.dropDownContainerStyle}
                    containerProps={{
                        height: kitchenOpen == true ? 120 : 35,
                        marginBottom: kitchenOpen == true ? 30 : 0,
                    }}
                    open={kitchenOpen}
                    value={kitchenValue}
                    items={kitchenItems}
                    setOpen={setKitchenOpen}
                    setValue={setKitchenValue}
                    setItems={setKitchenItems}
                    onOpen={onKitchenRoom}
                />
            </View>
        );
    }
    const renderNoOfBathroom = () => {
        return (
            <View style={{ marginVertical: 20, flex: 1 }}>
                <Text style={[styles.titleText, { marginBottom: 10 }]}>No of bathrooms</Text>
                <DropDownPicker
                    listMode='SCROLLVIEW'
                    dropDownDirection='BOTTOM'
                    style={styles.dropDownstyle}
                    textStyle={styles.dropDownTextStyle}
                    placeholder="1"
                    dropDownContainerStyle={styles.dropDownContainerStyle}
                    containerProps={{
                        height: bathroomOpen == true ? 120 : 35,
                        marginBottom: bathroomOpen == true ? 30 : 0,
                    }}
                    open={bathroomOpen}
                    value={bathroomValue}
                    items={bathroomItems}
                    setOpen={setBathRoomOpen}
                    setValue={setBathRoomValue}
                    setItems={setBathRoomItems}
                    onOpen={onBathRoom}
                />
            </View>
        );
    }
    const renderNoOfToilet = () => {
        return (
            <View style={{ marginVertical: 20, flex: 1 }}>
                <Text style={[styles.titleText, { marginBottom: 10 }]}>No of toilets</Text>
                <DropDownPicker
                    listMode='SCROLLVIEW'
                    dropDownDirection='BOTTOM'
                    style={styles.dropDownstyle}
                    textStyle={styles.dropDownTextStyle}
                    placeholder="1"
                    dropDownContainerStyle={styles.dropDownContainerStyle}
                    containerProps={{
                        height: toiletOpen == true ? 120 : 35,
                        marginBottom: toiletOpen == true ? 30 : 0,
                    }}
                    open={toiletOpen}
                    value={toiletValue}
                    items={toiletItems}
                    setOpen={setToiletRoomOpen}
                    setValue={setToiletRoomValue}
                    setItems={setToiletRoomItems}
                    onOpen={onToiletRoom}
                />
            </View>
        );
    }
    const renderNoOfLaundry = () => {
        return (
            <View style={{ marginVertical: 20, flex: 1 }}>
                <Text style={[styles.titleText, { marginBottom: 10 }]}>No of laundries</Text>
                <DropDownPicker
                    listMode='SCROLLVIEW'
                    dropDownDirection='BOTTOM'
                    style={styles.dropDownstyle}
                    textStyle={styles.dropDownTextStyle}
                    placeholder="1"
                    dropDownContainerStyle={styles.dropDownContainerStyle}
                    containerProps={{
                        height: laundryOpen == true ? 120 : 35,
                        marginBottom: laundryOpen == true ? 30 : 0,
                    }}
                    open={laundryOpen}
                    value={laundryValue}
                    items={laundryItems}
                    setOpen={setLaundryOpen}
                    setValue={setLaundryValue}
                    setItems={setLaundryItems}
                    onOpen={onLaundryRoom}
                />
            </View>
        );
    }
    const renderPropertyDetail = () => {
        return (
            <View style={{ marginVertical: 10 }}>
                <View style={{ backgroundColor: colors.borderColor, padding: 20, }}>
                    <Text style={styles.headerText}>2. Property Details</Text>
                    <Text style={[styles.titleText, { marginTop: 10 }]}>Approx age of property - years</Text>
                    <View style={styles.steperView}>
                        <TouchableOpacity onPress={() => {
                            if (propYear > 0) {
                                setPropYear(propYear - 1)
                            }
                        }}>
                            <View style={[styles.steperBtn]}>
                                <Text style={styles.titleText}>-</Text>
                            </View>
                        </TouchableOpacity>
                        {/* <TextInput
                            placeholderTextColor={colors.medium}
                            placeholder={'0'}
                            style={{ width: 40, height: 28, margin: 1, borderWidth: 1, borderColor: colors.borderColor, textAlign: 'center' }}
                        /> */}
                        <View style={{ width: 40, height: 28, margin: 1, borderWidth: 1, borderColor: colors.borderColor, justifyContent: 'center' }}>
                            <Text style={[styles.titleText, { textAlign: 'center' }]}>{propYear}</Text>
                        </View>

                        <TouchableOpacity onPress={() => {
                            if (propYear < 99) {
                                setPropYear(propYear + 1)
                            }
                        }}>
                            <View style={[styles.steperBtn]}>
                                <Text style={styles.titleText}>+</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {renderPropertyfaces()}
                    {renderPropertyType()}
                    {renderRadioBtnWithText()}
                    {renderOccupiedStatus()}
                    {renderWallconstruction()}
                    {renderRoofconstruction()}
                    {renderFloorconstruction()}
                    {renderNoOfBedroom()}
                    {renderNoOfLivingroom()}
                    {renderNoOfKitchen()}
                    {renderNoOfBathroom()}
                    {renderNoOfToilet()}
                    {renderNoOfLaundry()}

                </View>
                <AppFooter onBackButton={onBackButton} onNextButton={onNextButton} />
            </View>
        );
    }
    return (
        <View style={{ margin: 10 }}>
            {renderClientDetail()}
            {renderPropertyDetail()}

        </View>
    );
}
const styles = StyleSheet.create({
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
    steperView: {
        borderWidth: 1,
        borderColor: colors.borderColor,
        borderRadius: 5,
        height: 50, width: 130, flexDirection: 'row', marginTop: 20, backgroundColor: colors.borderColor, padding: 10
    },
    steperBtn: {
        height: 30,
        width: 30,
        backgroundColor: colors.borderColor,
        justifyContent: 'center', alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.borderColor,
        borderRadius: 5,
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
    },

})
export default Page2;