import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import colors from '../config/colors';
import DropDownPicker from 'react-native-dropdown-picker';
import AppBackButton from '../components/AppBackButton';
import AppButton from '../components/AppButton';
import DropdownComponent from '../components/DropdownComponent';
import Kitchen from './components/Kitchen';
import Bedroom from './components/Bathroom';
import Bathroom from './components/Bedroom';
import Livingroom from './components/Livingroom';
import Laundry from './components/Laundry';
import Hallway from './components/Hallway';


const DATA = [
    {
        id: '1',
        title: 'Floor',
    },
    {
        id: '2',
        title: 'Wall',
    },
    {
        id: '3',
        title: 'Doors and windows',
    },
    {
        id: '4',
        title: 'Ceiling',
    },
    {
        id: '5',
        title: 'Benchtop',
    },
    {
        id: '6',
        title: 'Taps',
    },
    {
        id: '7',
        title: 'Cupboards',
    },
    {
        id: '8',
        title: 'Range hood',
    },
];
const BATHROOMS = [
    {
        id: '1',
        title: 'Wall tiles',
    },
    {
        id: '2',
        title: 'Floor tiles',
    },
    {
        id: '3',
        title: 'Vanity',
    },
    {
        id: '4',
        title: 'Shower',
    },
    {
        id: '5',
        title: 'Floor waste',
    },
    {
        id: '6',
        title: 'Door',
    },
    {
        id: '7',
        title: 'Window',
    },

];
const Page5 = ({ onBackButton, onNextButton }) => {

    //test drop
    //Type of Inspection
   
    const [kitchenArray, setKitchen] = useState([{
        id: 1
    }]);
    const [kitchenRef, setKitchenRef] = useState(false);

    const [bedroomArray, setBedroom] = useState([{
        id: 1
    }]);
    const [bedroomRef, setBedroomRef] = useState(false);

    const [bathroomArray, setBathroom] = useState([{
        id: 1
    }]);
    const [bathroomRef, setBathroomRef] = useState(false);

    const [livingRoomArray, setLivingroom] = useState([{
        id: 1
    }]);
    const [livingroomRef, setLivingroomRef] = useState(false);

    const [laundryArray, setLaundry] = useState([{
        id: 1
    }]);
    const [laundryRef, setLaundryRef] = useState(false);

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

    const [bathroomOpen, setBathroomOpen] = useState(false);
    const [bathroomValue, setBathroomValue] = useState(null);



    const addKitchenbutton = (title) => {
        return (
            <View style={{backgroundColor:kitchenArray.length===0?'#fbeaea':'white',padding:10}}>
            <TouchableOpacity
                onPress={() => {
                    const prevKit = kitchenArray
                    prevKit.push({
                        id: prevKit.length + 1
                    })
                    setKitchen(prevKit)
                    setKitchenRef(!kitchenRef)
                }}
                style={{ flex: 1, flexDirection: 'row', borderWidth: 1, borderColor: colors.primary, padding: 10, borderRadius: 5, alignSelf: 'flex-start' }}>
                <Text style={{
                    marginRight: 5, fontSize: 14,
                    color: colors.medium,
                }}>+</Text>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
           {kitchenArray.length===0&& <View style={{paddingTop:5}}>
            <View style={{backgroundColor:'#cb2a25',padding:10}}>
            <Text style={[styles.buttonText,{color:'white'}]}>{"Please specify at least 1 Kitchen."}</Text>
            </View>
            </View>}
            </View>
        );
    }
    const addBedroomButton = (title) => {
        return (
            <View style={{backgroundColor:bathroomArray.length===0?'#fbeaea':'white',padding:10}}>
            <TouchableOpacity
            onPress={() => {
                const prevBath = bathroomArray
                prevBath.push({
                    id: prevBath.length + 1
                })
                setBathroom(prevBath)
                setBathroomRef(!bathroomRef)
            }}
            style={{ flex: 1, flexDirection: 'row', borderWidth: 1, borderColor: colors.primary, padding: 10, borderRadius: 5, alignSelf: 'flex-start' }}>
                <Text style={{
                    marginRight: 5, fontSize: 14,
                    color: colors.medium,
                }}>+</Text>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
            {bathroomArray.length===0&& <View style={{paddingTop:5}}>
            <View style={{backgroundColor:'#cb2a25',padding:10}}>
            <Text style={[styles.buttonText,{color:'white'}]}>{"Please specify at least 1 Bathroom."}</Text>
            </View>
            </View>}
            </View>

        );
    }
    const addLivingroomButton = (title) => {
        return (
            <View style={{backgroundColor:livingRoomArray.length===0?'#fbeaea':'white',padding:10}}>
            <TouchableOpacity
            onPress={() => {
                const prevLiving = livingRoomArray
                prevLiving.push({
                    id: prevLiving.length + 1
                })
                setLivingroom(prevLiving)
                setLivingroomRef(!livingroomRef)
            }}
            style={{ flex: 1, flexDirection: 'row', borderWidth: 1, borderColor: colors.primary, padding: 10, borderRadius: 5, alignSelf: 'flex-start' }}>
                <Text style={{
                    marginRight: 5, fontSize: 14,
                    color: colors.medium,
                }}>+</Text>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
            {livingRoomArray.length===0&& <View style={{paddingTop:5}}>
            <View style={{backgroundColor:'#cb2a25',padding:10}}>
            <Text style={[styles.buttonText,{color:'white'}]}>{"Please specify at least 1 Living/dining area."}</Text>
            </View>
            </View>}
            </View>
        );
    }
    const addLaundryButton = (title) => {
        return (
            <View style={{backgroundColor:laundryArray.length===0?'#fbeaea':'white',padding:10}}>
            <TouchableOpacity
            onPress={() => {
                const prevLaundry = laundryArray
                prevLaundry.push({
                    id: prevLaundry.length + 1
                })
                setLaundry(prevLaundry)
                setLaundryRef(!laundryRef)
            }}
            style={{ flex: 1, flexDirection: 'row', borderWidth: 1, borderColor: colors.primary, padding: 10, borderRadius: 5, alignSelf: 'flex-start' }}>
                <Text style={{
                    marginRight: 5, fontSize: 14,
                    color: colors.medium,
                }}>+</Text>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
            {laundryArray.length===0&& <View style={{paddingTop:5}}>
            <View style={{backgroundColor:'#cb2a25',padding:10}}>
            <Text style={[styles.buttonText,{color:'white'}]}>{"Please specify at least 1 Laundry."}</Text>
            </View>
            </View>}
            </View>
        );
    }
 
    const addBathroomButton = (title) => {
        return (
            <TouchableOpacity
            onPress={() => {
                const prevBed = bedroomArray
                prevBed.push({
                    id: prevBed.length + 1
                })
                setBedroom(prevBed)
                setBedroomRef(!bedroomRef)
            }}
            style={{ flex: 1, flexDirection: 'row', borderWidth: 1, borderColor: colors.primary, padding: 10, borderRadius: 5, alignSelf: 'flex-start' }}>
                <Text style={{
                    marginRight: 5, fontSize: 14,
                    color: colors.medium,
                }}>+</Text>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
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

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
    ];

const cancelKitchen=(id)=>{
    const kitchen = kitchenArray
    const filteredKit = kitchen.filter((item) => item.id !== id);
    setKitchen(filteredKit)
    setKitchenRef(!kitchenRef)
}


const cancelBedroom=(id)=>{
    const bedroom = bedroomArray
    const filteredBed = bedroom.filter((item) => item.id !== id);
    setBedroom(filteredBed)
    setBedroomRef(!bedroomRef)
}

const cancelBathroom=(id)=>{
    const bathroom = bathroomArray
    const filteredBath = bathroom.filter((item) => item.id !== id);
    setBathroom(filteredBath)
    setBathroomRef(!bathroomRef)
}

const cancelLivingRoom=(id)=>{
    const living = livingRoomArray
    const filteredLiving = living.filter((item) => item.id !== id);
    setLivingroom(filteredLiving)
    setLivingroomRef(!livingroomRef)
}

const cancelLaundryRoom=(id)=>{
    const laundry = laundryArray
    const filteredLaundry = laundry.filter((item) => item.id !== id);
    setLaundry(filteredLaundry)
    setLaundryRef(!laundryRef)
}

    return (
        <View style={{ margin: 10 }}>
            <Text style={styles.headerText}>5. Inspection Results - Interior</Text>
            <FlatList
                data={kitchenArray}
                renderItem={({ item }) => <Kitchen 
                title={'Kitchen'} id={'1'} item={item}
                cancelKitchen={cancelKitchen} />}
                keyExtractor={item => item.id}
                extraData={kitchenRef}
                nestedScrollEnabled={true}
            />
            {addKitchenbutton('Add Kitchen')}
            <FlatList
                data={bathroomArray}
                renderItem={({ item }) => <Bedroom title={'Bathroom '} id={'1'} item={item}
                cancelBathroom={cancelBathroom}
                
                />}
                keyExtractor={item => item.id}
                extraData={bathroomRef}
                nestedScrollEnabled={true}
            />
            
            {addBedroomButton('Add Bathroom')}
            <FlatList
                data={bedroomArray}
                renderItem={({ item }) => <Bathroom  title={'Bedroom'} id={'1'}  item={item} cancelBedroom={cancelBedroom} />}
                keyExtractor={item => item.id}
                extraData={bedroomRef}
                nestedScrollEnabled={true}
            />
            {addBathroomButton('Add Bedroom')}
           


            <FlatList
                data={livingRoomArray}
                renderItem={({ item }) => <Livingroom title={'Living/dining area'} id={'1'} item={item} cancelLivingRoom={cancelLivingRoom} />}
                keyExtractor={item => item.id}
                extraData={livingroomRef}
                nestedScrollEnabled={true}
            />
            {addLivingroomButton('Add Living/dining area')}


            <FlatList
                data={laundryArray}
                renderItem={({ item }) => <Laundry title={'Laundry'} id={'1'} item={item} cancelLaundryRoom={cancelLaundryRoom} />}
                keyExtractor={item => item.id}
                extraData={laundryRef}
                nestedScrollEnabled={true}
            />
            {addLaundryButton('Add Laundry')}

            <Hallway title={'Hallway/Foyer etc'} id={'1'} />
            {renderBottomView()}
        </View>

    );

}
const styles = StyleSheet.create({
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
    title: {
        fontSize: 15,
        fontWeight: '600'
    },
    uploadView: {
        height: 50,
        backgroundColor:
            colors.borderColor,
        marginTop: 10,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.borderColor,
        borderRadius: 5,
    },
    uploadBtn: {
        marginLeft: 7,
        height: 35,
        width: 80,
        backgroundColor: colors.borderColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.borderColor,
        borderRadius: 5,
        padding: 7,
    },
})
export default Page5;