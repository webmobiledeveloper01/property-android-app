import React,{useState,useCallback} from 'react';
import { View,Text,StyleSheet,TouchableOpacity,TextInput,FlatList } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import AppFooter from '../components/AppFooter';
import colors from '../config/colors';
import Picker from './components/Picker';
import BuildingExterior from './components/BuildingExterior';
import SubFloor from './components/SubFloor';
import RoofExterior from './components/RoofExterior';
import RoofInterior from './components/RoofInterior';
import Yard from './components/Yard';
const  Page6 = ({onBackButton, onNextButton}) => {

   
    const [yardOpen, setYardOpen] = useState(false);
    const [yardValue, setYardValue] = useState(null);
    const [yardOfitems, setYardItems] = useState([
       { label: 'Satisfactory', value: 'Satisfactory' },
       { label: 'Minor defect', value: 'Minor defect' },
       { label: 'Major defect', value: 'Major defectg' },
       { label: 'Building only', value: 'Building only' },
       { label: 'No access', value: 'No access' },
       { label: 'Limited access', value: 'Limited access' },
       { label: 'Notes', value: 'Notes' },
       { label: 'N/A', value: 'N/A' },

   ]);

   const [buildingArray, setBuilding] = useState([{
    id: 1
}]);
const [buildingRef, setBuildingRef] = useState(false);
     const [imageuri, setImageuri] = useState("");
   const getImagedata=(uri)=>{
    setImageuri(uri)
}


   const onYardandFences= useCallback(() => {
       //invisible previous dropdown
   }, []);
       const DATA = [
        {
          id: '1',
          title: 'Drainage',
        },
        {
          id: '2',
          title: 'Fences',
        },
        {
          id: '3',
          title: 'Retaining walls',
        },
        {
            id: '4',
            title: 'Garage/​carport',
          },
          {
            id: '5',
            title: 'Pavement',
          },
          {
            id: '6',
            title: 'Pavers',
          },
          
      ];
      
      const renderInputNotes = (notes) => {
        return (
            <View style={{ marginTop: 10, }}>
                <Text style={styles.titleText}>{notes}</Text>
                <View style={{ marginTop:5, borderWidth: 1, borderColor: colors.borderColor,   }}>
                    <View style={{backgroundColor:'white',margin:1}}>
                    <TextInput
                        multiline={true}
                        numberOfLines={10}
                        underlineColorAndroid="transparent"
                        placeholder="Type something"
                        placeholderTextColor="grey"
                        style={[styles.normlText, { height: 100, textAlignVertical: 'top', color: colors.dark,padding:5 }]} />
                    </View>
                </View>

            </View>
        );
    }
      const renderPictures = () => {
        return(
            <View style={{marginTop: 10  }}>
                    <Text style={styles.titleText}>Pictures</Text>
                    <Picker
    getImagedata={getImagedata}
    />
                    {/* <View style={styles.uploadView}>
                        <TouchableOpacity>
                            <View style={styles.uploadBtn}>
                                <Text style={{alignSelf:'center',fontSize:14, color:colors.medium}}>Upload</Text>
                            </View>
                        </TouchableOpacity>
                    </View> */}
                     {renderInputNotes('Notes')}
                </View>
        );
    }
    const YardandFencesItem = ({title, id}) => (
    
        <View key = {id} style={styles.item}>
          <Text  style={styles.titleText}>{title}</Text>
          <DropDownPicker 
                    listMode='SCROLLVIEW'
                    dropDownDirection='BOTTOM'
                    style={styles.dropDownstyle}
                    textStyle={styles.dropDownTextStyle}
                    placeholder="Building and pest"
                    dropDownContainerStyle={styles.dropDownContainerStyle}
                    dropDownMaxHeight={200}
                    containerProps={{
                        height: yardOpen == true ? 200 : 0,
                        marginBottom: 50,
                        marginTop:10,
                    }}
                    open={yardOpen}
                    value={yardValue}
                    items={yardOfitems}
                    setOpen={setYardOpen}
                    setValue={setYardValue}
                    setItems={setYardItems}
                    onOpen={onYardandFences}
                />
          
        </View>
      );

      
    const renderYardandFences  = () =>{
        return(
            <View style={{ marginVertical: 5, backgroundColor:colors.borderColor, padding:20, }}>
            <Text style={[styles.headerText, { marginVertical: 5 }]}>Yard and fences</Text>
            {DATA && (<View>
                {DATA.map((item) => <YardandFencesItem id={item.id}  title={item.title}/>)}
            </View>)}
            
            {renderPictures()}
            </View>
        );
    }
    const addBuildingButton = (title) => {
        return (
            <View style={{backgroundColor:buildingArray.length===0?'#fbeaea':'white',padding:10}}>
            <TouchableOpacity
            onPress={() => {
                const prevBuilding = buildingArray
                prevBuilding.push({
                    id: prevBuilding.length + 1
                })
                setBuilding(prevBuilding)
                setBuildingRef(!buildingRef)
            }}
            style={{ flex: 1, flexDirection: 'row', borderWidth: 1, borderColor: colors.primary, padding: 10, borderRadius: 5, alignSelf: 'flex-start' }}>
                <Text style={{
                    marginRight: 5, fontSize: 14,
                    color: colors.medium,
                }}>+</Text>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
            {buildingArray.length===0&& <View style={{paddingTop:5}}>
            <View style={{backgroundColor:'#cb2a25',padding:10}}>
            <Text style={[styles.buttonText,{color:'white'}]}>{"Please specify at least 1 Building exterior."}</Text>
            </View>
            </View>}
            </View>
        );
    }

    const cancelBuildingRoom=(id)=>{
        const building = buildingArray
        const filteredBuilding = building.filter((item) => item.id !== id);
        setBuilding(filteredBuilding)
        setBuildingRef(!buildingRef)
    }
    
       
    return (
        <View style={{ margin: 10 }}>
        <Text style={styles.headerText}>6. Inspection Results - Exterior</Text>
       
       {/* {renderYardandFences()} */}
       <Yard title={'Yard And Fences'} id={'1'} />
       {/* <BuildingExterior title={'Building exterior 1'} id={'1'} /> */}

       <FlatList
                data={buildingArray}
                renderItem={({ item }) =>  <BuildingExterior title={'Building exterior 1'} id={'1'} item={item} cancelBuildingRoom={cancelBuildingRoom} />}
                keyExtractor={item => item.id}
                extraData={buildingRef}
                nestedScrollEnabled={true}
            />
            {addBuildingButton('Add Building exterior')}
       <SubFloor title={'Sub Floor'} id={'1'} />
       <RoofExterior title={'Roof Exterior'} id={'1'} />
       <RoofInterior title={'Roof Interior'} id={'1'} />
        <AppFooter onBackButton={onBackButton} onNextButton={onNextButton}/>
        </View>
    );
}
const styles = StyleSheet.create({
    headerText: {
        fontSize: 17,
        fontWeight: '700',
        color:colors.black,
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
    buttonText:{
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
        opacity:0.8,
    },
    dropDownContainerStyle: {
        backgroundColor: colors.white,
        borderWidth: 0.5,
        borderColor: colors.borderColor,
        minHeight: 130,
    },
    item: {
      flexGrow:1,
        marginVertical: 8,
      },
      title: {
        fontSize: 15,
        fontWeight:'600'
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
        padding:7,
    },
})
export default Page6;