import React,{useState,useCallback} from 'react';
import { View,Text,StyleSheet,TouchableOpacity,TextInput,FlatList } from 'react-native';
import AppFooter from '../components/AppFooter';
import colors from '../config/colors';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import DropDownPicker from 'react-native-dropdown-picker';
import Picker from './components/Picker';
const ConditionsTimber = {
    react: false,
    next: false,
    vue: false,
    angular: false,

}
const  Page7 = ({onBackButton, onNextButton}) => {

    //YES No
    const [evidenceYes, setEvidenceYes] = useState('No');
    const [evidenceYes2, setEvidenceYes2] = useState('No');
    const [evidenceYes3, setEvidenceYes3] = useState('No');
    const [evidenceYes4, setEvidenceYes4] = useState('No');
    const [evidenceYes5, setEvidenceYes5] = useState('No');
    const [evidenceYes6, setEvidenceYes6] = useState('No');
    const [evidenceYes7, setEvidenceYes7] = useState('No');
    const [evidenceYes8, setEvidenceYes8] = useState('No');
    //Dropdown of next inspection
    const [nextInspOpen, setNextOfInspOpen] = useState(false);
    const [nextOfInspValue, setNextOfInspValue] = useState(null);
    const [NextOfitems, setNextItems] = useState([
        { label: 'ASAP', value: 'ASAP' },
        // { label: '3 Month', value: '3 Month' },
        { label: '6 Month', value: '6 Month' },
        { label: '12 Month', value: '12 Month' },
    ]);

    const [level, setLevel] = useState([
        { label: 'Low', value: 'Low' },
       { label: 'Moderate', value: 'Moderate' },
        { label: 'Moderate high', value: 'Moderate high' },
        { label: 'High', value: 'High' },
    ]);
    const [levelInspOpen, setLevelOfInspOpen] = useState(false);
    const [levelOfInspValue, setLevelOfInspValue] = useState(null);

    const [riskInspOpen, setRiskOfInspOpen] = useState(false);
    const [riskOfInspValue, setRiskOfInspValue] = useState(null);

    const [imageuri, setImageuri] = useState("");
    const getImagedata=(uri)=>{
     setImageuri(uri)
 }
    ////Conditions conducive to timber 
    const [conditionTimber, setConditionTimber] = useState(ConditionsTimber);
    const [tickBox,setTickbox]=useState([]);
    const [key,setKey]= useState(0);
    const onNextOfInspection = useCallback(() => {
        //invisible previous dropdown
    }, []);

    const onlEVELOfInspection = useCallback(() => {
        //invisible previous dropdown
    }, []);

const Newdata=[
    {"text": "Garden against building"},
    {"text": "Tap(s) without drain under"},
    {"text": "Hot water system outlet draining to ground"},
    {"text": "Air conditioner unit outlet draining to ground"},
    {"text": "No ant caps installed on sub floor piers"},
    {"text": "Termite treatment label missing in meter box"},
    {"text": "Ground level above slab height"},
    {"text": "Lack of sub floor ventilation"},
    {"text": "Bridging or breaching of termite management systems and/​or inspection zones"},
]

    const renderRadioBtnWithText = (titleEvidence) => {
        return (
            <View style={{marginTop:20}}>
                <Text style={styles.titleText}>{titleEvidence}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => evidenceYes == 'Yes' ? setEvidenceYes('') : setEvidenceYes('Yes')} >
                            <MaterialIcon name={evidenceYes === 'Yes' ? 'radiobox-marked' : 'radiobox-blank'} size={26} color={colors.primary} />
                        </TouchableOpacity>
                        <Text style={[styles.titleText, { marginLeft: 5 }]}>Yes</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }}>
                        <TouchableOpacity onPress={() => evidenceYes == 'No' ? setEvidenceYes('') : setEvidenceYes('No')} >
                            <MaterialIcon name={evidenceYes === 'No' ? 'radiobox-marked' : 'radiobox-blank'} size={26} color={colors.primary} />
                        </TouchableOpacity>
                        <Text style={[styles.titleText, { marginLeft: 5 }]}>No</Text>
                    </View>
                </View>
            </View>
        );
    }
    const renderRadioBtnWithText2 = (titleEvidence) => {
        return (
            <View style={{marginTop:20}}>
                <Text style={styles.titleText}>{titleEvidence}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => evidenceYes2 == 'Yes' ? setEvidenceYes2('') : setEvidenceYes2('Yes')} >
                            <MaterialIcon name={evidenceYes2 === 'Yes' ? 'radiobox-marked' : 'radiobox-blank'} size={26} color={colors.primary} />
                        </TouchableOpacity>
                        <Text style={[styles.titleText, { marginLeft: 5 }]}>Yes</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }}>
                        <TouchableOpacity onPress={() => evidenceYes2 == 'No' ? setEvidenceYes2('') : setEvidenceYes2('No')} >
                            <MaterialIcon name={evidenceYes2 === 'No' ? 'radiobox-marked' : 'radiobox-blank'} size={26} color={colors.primary} />
                        </TouchableOpacity>
                        <Text style={[styles.titleText, { marginLeft: 5 }]}>No</Text>
                    </View>
                </View>
            </View>
        );
    }
    const renderRadioBtnWithText3 = (titleEvidence) => {
        return (
            <View style={{marginTop:20}}>
                <Text style={styles.titleText}>{titleEvidence}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => evidenceYes3 == 'Yes' ? setEvidenceYes3('') : setEvidenceYes3('Yes')} >
                            <MaterialIcon name={evidenceYes3 === 'Yes' ? 'radiobox-marked' : 'radiobox-blank'} size={26} color={colors.primary} />
                        </TouchableOpacity>
                        <Text style={[styles.titleText, { marginLeft: 5 }]}>Yes</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }}>
                        <TouchableOpacity onPress={() => evidenceYes3 == 'No' ? setEvidenceYes3('') : setEvidenceYes3('No')} >
                            <MaterialIcon name={evidenceYes3 === 'No' ? 'radiobox-marked' : 'radiobox-blank'} size={26} color={colors.primary} />
                        </TouchableOpacity>
                        <Text style={[styles.titleText, { marginLeft: 5 }]}>No</Text>
                    </View>
                </View>
            </View>
        );
    }
    const renderRadioBtnWithText4 = (titleEvidence) => {
        return (
            <View style={{marginTop:20}}>
                <Text style={styles.titleText}>{titleEvidence}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => evidenceYes4 == 'Yes' ? setEvidenceYes4('') : setEvidenceYes4('Yes')} >
                            <MaterialIcon name={evidenceYes4 === 'Yes' ? 'radiobox-marked' : 'radiobox-blank'} size={26} color={colors.primary} />
                        </TouchableOpacity>
                        <Text style={[styles.titleText, { marginLeft: 5 }]}>Yes</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }}>
                        <TouchableOpacity onPress={() => evidenceYes4 == 'No' ? setEvidenceYes4('') : setEvidenceYes4('No')} >
                            <MaterialIcon name={evidenceYes4 === 'No' ? 'radiobox-marked' : 'radiobox-blank'} size={26} color={colors.primary} />
                        </TouchableOpacity>
                        <Text style={[styles.titleText, { marginLeft: 5 }]}>No</Text>
                    </View>
                </View>
            </View>
        );
    }
    const renderRadioBtnWithText5 = (titleEvidence) => {
        return (
            <View style={{marginTop:20}}>
                <Text style={styles.titleText}>{titleEvidence}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => evidenceYes5 == 'Yes' ? setEvidenceYes5('') : setEvidenceYes5('Yes')} >
                            <MaterialIcon name={evidenceYes5 === 'Yes' ? 'radiobox-marked' : 'radiobox-blank'} size={26} color={colors.primary} />
                        </TouchableOpacity>
                        <Text style={[styles.titleText, { marginLeft: 5 }]}>Yes</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }}>
                        <TouchableOpacity onPress={() => evidenceYes5 == 'No' ? setEvidenceYes5('') : setEvidenceYes5('No')} >
                            <MaterialIcon name={evidenceYes5=== 'No' ? 'radiobox-marked' : 'radiobox-blank'} size={26} color={colors.primary} />
                        </TouchableOpacity>
                        <Text style={[styles.titleText, { marginLeft: 5 }]}>No</Text>
                    </View>
                </View>
            </View>
        );
    }
    const renderRadioBtnWithText6 = (titleEvidence) => {
        return (
            <View style={{marginTop:20}}>
                <Text style={styles.titleText}>{titleEvidence}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => evidenceYes6 == 'Yes' ? setEvidenceYes6('') : setEvidenceYes6('Yes')} >
                            <MaterialIcon name={evidenceYes6 === 'Yes' ? 'radiobox-marked' : 'radiobox-blank'} size={26} color={colors.primary} />
                        </TouchableOpacity>
                        <Text style={[styles.titleText, { marginLeft: 5 }]}>Yes</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }}>
                        <TouchableOpacity onPress={() => evidenceYes6 == 'No' ? setEvidenceYes6('') : setEvidenceYes6('No')} >
                            <MaterialIcon name={evidenceYes6 === 'No' ? 'radiobox-marked' : 'radiobox-blank'} size={26} color={colors.primary} />
                        </TouchableOpacity>
                        <Text style={[styles.titleText, { marginLeft: 5 }]}>No</Text>
                    </View>
                </View>
            </View>
        );
    }
    const renderRadioBtnWithText7 = (titleEvidence) => {
        return (
            <View style={{marginTop:20}}>
                <Text style={styles.titleText}>{titleEvidence}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => evidenceYes7 == 'Yes' ? setEvidenceYes7('') : setEvidenceYes7('Yes')} >
                            <MaterialIcon name={evidenceYes7 === 'Yes' ? 'radiobox-marked' : 'radiobox-blank'} size={26} color={colors.primary} />
                        </TouchableOpacity>
                        <Text style={[styles.titleText, { marginLeft: 5 }]}>Yes</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }}>
                        <TouchableOpacity onPress={() => evidenceYes7 == 'No' ? setEvidenceYes7('') : setEvidenceYes7('No')} >
                            <MaterialIcon name={evidenceYes7 === 'No' ? 'radiobox-marked' : 'radiobox-blank'} size={26} color={colors.primary} />
                        </TouchableOpacity>
                        <Text style={[styles.titleText, { marginLeft: 5 }]}>No</Text>
                    </View>
                </View>
            </View>
        );
    }
    const renderRadioBtnWithText8 = (titleEvidence) => {
        return (
            <View style={{marginTop:20}}>
                <Text style={styles.titleText}>{titleEvidence}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => evidenceYes8 == 'Yes' ? setEvidenceYes8('') : setEvidenceYes8('Yes')} >
                            <MaterialIcon name={evidenceYes8 === 'Yes' ? 'radiobox-marked' : 'radiobox-blank'} size={26} color={colors.primary} />
                        </TouchableOpacity>
                        <Text style={[styles.titleText, { marginLeft: 5 }]}>Yes</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }}>
                        <TouchableOpacity onPress={() => evidenceYes8 == 'No' ? setEvidenceYes8('') : setEvidenceYes8('No')} >
                            <MaterialIcon name={evidenceYes8 === 'No' ? 'radiobox-marked' : 'radiobox-blank'} size={26} color={colors.primary} />
                        </TouchableOpacity>
                        <Text style={[styles.titleText, { marginLeft: 5 }]}>No</Text>
                    </View>
                </View>
            </View>
        );
    }
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
    const renderNextInspection = () => {
       return(
        <View style={{ marginVertical: 20 }}>
        <Text style={[styles.titleText, { marginBottom: 15 }]}>The next inspection to help detect any future termite attack is recommended within:</Text>
        <DropDownPicker
            listMode='SCROLLVIEW'
            dropDownDirection='BOTTOM'
            style={styles.dropDownstyle}
            textStyle={styles.dropDownTextStyle}
            placeholder="ASAP"
            dropDownContainerStyle={styles.dropDownContainerStyle}
            dropDownMaxHeight={200}
            containerProps={{
                height: nextInspOpen == true ? 200 : 0,
                marginBottom: 20,
            }}
            open={nextInspOpen}
            value={nextOfInspValue}
            items={NextOfitems}
            setOpen={setNextOfInspOpen}
            setValue={setNextOfInspValue}
            setItems={setNextItems}
            onOpen={onNextOfInspection}
        />
        <View style={{ height: 20 }}></View>
    </View>
       );
    }
    const renderDuetolevelOfInspection = () => {
        return(
         <View style={{ marginVertical: 20 }}>
         <Text style={[styles.titleText, { marginBottom: 15 }]}>Due to the level of accessibility for inspection including the presence of obstructions, the overall degree of risk of undetected timber pest attack and conditions conducive to timber pest attack was considered</Text>
         <DropDownPicker
             listMode='SCROLLVIEW'
             dropDownDirection='BOTTOM'
             style={styles.dropDownstyle}
             textStyle={styles.dropDownTextStyle}
             placeholder="Low"
             dropDownContainerStyle={styles.dropDownContainerStyle}
             dropDownMaxHeight={200}
             containerProps={{
                 height: levelInspOpen == true ? 200 : 15,
                 marginBottom: 20,
             }}
             open={levelInspOpen}
             value={levelOfInspValue}
             items={level}
             setOpen={setLevelOfInspOpen}
             setValue={setLevelOfInspValue}
             setItems={setLevel}
             onOpen={onlEVELOfInspection}
             
         />
         <View style={{ height: 20 }}></View>
     </View>
        );
     }
     const renderTextDescript = () => {
        return(
            <View>
                 <Text style={styles.normlText}>A further inspection is strongly recommended of those areas that were not readily accessible and of inaccessible or obstructed areas once access has been provided or the obstruction removed. This will involve a separate visit to the site, permission from the owner of the property and additional cost. For further information or advice see Section C “Accessibility”.{"\n"}{"\n"}

Unless stated otherwise, any recommendation or advice given in this Report should be implemented as a matter of urgency.{"\n"}{"\n"}

For further information including advice on how to help protect against financial loss due to timber pest attack see Section F.{"\n"}{"\n"}</Text>
            </View>
        )
     }

     const renderTextDescriptMore = () => {
        return(
            <View>
                 <Text style={{
                      fontSize: 16,
                      fontWeight: '800',
                      color: colors.black,
                 }}>Section C Accessibility{"\n"}</Text>
                 <Text style={{
                      fontSize: 14,
                      fontWeight: '800',
                      color: colors.black,
                 }}>Areas inspected</Text>
                 <Text style={styles.normlText}>
                 The inspection covered the readily accessible and safe to access areas of the building and bite{"\n"}
                 </Text>
                 <Text style={{
                      fontSize: 16,
                      fontWeight: '800',
                      color: colors.black,
                 }}>Areas not inspected</Text>
                 <Text style={styles.normlText}>
                 The inspection did not include areas, which were inaccessible, not readily accessible or obstructed at the time of inspection.{"\n"}
                 </Text>
                 <Text style={styles.normlText}>
                 The Consultant did not move or remove any obstructions which may be concealing evidence of defects including timber pest attack.{"\n"}
                 </Text>
                 <Text style={styles.normlText}>
                 Areas, which are not normally accessible, were not inspected such as under slabs on ground as it is not “considered practical” to gain access to them.{"\n"}
                 </Text>
                 <Text style={styles.normlText}>
                 Evidence of timber pest attack in obstructed or concealed areas may only be revealed when the items are moved or removed or access has been provided..{"\n"}
                 </Text>
            </View>
        )
     }
    
const renderCheckBoxItem=(data)=>{
    
    let titleText=data?.item?.text
    let filter = tickBox.filter(function (item) { 
        return item.text===titleText
      });  
          return (
            <View style={{paddingTop:5}}>
        <View style={{ flexDirection: 'row', backgroundColor: colors.borderColor,padding:5 }}>
             <TouchableOpacity style={styles.checkboxWrapper} onPress={() => {
                 let filteredData = tickBox.filter(function (item) { 
                    return item.text===titleText
                  });       
              let optionArray = tickBox
              let obj={
               text:titleText,
              }
              if(filteredData[0]?.text!==titleText){      
                optionArray.push(obj)
                setTickbox(optionArray)
                setKey(key+1)
                   }
                        else{
                          let itemData = tickBox?tickBox:[]
                          const findIndex = tickBox.findIndex(a => a.text === titleText)
                      itemData.splice(findIndex , 1)
                          // itemData.push(obj)
                          setTickbox(itemData)
                          setKey(key+1)
                        }

             }}>
                <MaterialIcon
                    name={filter[0]?.text===titleText? 'checkbox-marked' : 'checkbox-blank-outline'} size={24} color={colors.primary} />
                <Text style={[styles.normlText, { marginLeft: 5, flex: 1 }]}>{titleText}</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
}


const renderDuetolevelOfInspectionMore = () => {
    return(
     <View style={{ marginVertical: 20 }}>
     <Text style={[styles.titleText, { marginBottom: 15 }]}>Undetected timber pest risk assessment</Text>
     <DropDownPicker
         listMode='SCROLLVIEW'
         dropDownDirection='BOTTOM'
         style={styles.dropDownstyle}
         textStyle={styles.dropDownTextStyle}
         placeholder="Low"
         dropDownContainerStyle={styles.dropDownContainerStyle}
         dropDownMaxHeight={200}
         containerProps={{
             height: riskInspOpen == true ? 200 : 15,
             marginBottom: 20,
         }}
         open={riskInspOpen}
         value={riskOfInspValue}
         items={level}
         setOpen={setRiskOfInspOpen}
         setValue={setRiskOfInspValue}
         setItems={setLevel}
         onOpen={onlEVELOfInspection}
         
     />
    <Text style={[styles.normlText,{paddingTop:20}]}>
    A further inspection is strongly recommended of areas that were not readily accessible, and of 
inaccessible or obstructed areas once access has been provided or the obstruction removed.{"\n"}
                 </Text>
                 <Text style={[styles.normlText,{paddingTop:0}]}>
                 This may require the moving, lifting or removal of obstructions such as floor coverings, furniture, stored items foliage and insulation. In some instances, it may also require the removal of ceiling and wall linings, and the cutting of traps and access holes.{"\n"}
                 </Text>
                 <Text style={[styles.normlText,{paddingTop:0}]}>
                 For further advice consult the person who carried out this report.
                 </Text>
 </View>
    );
 }



     const renderConditionBox = () =>{
        return(
            <View>
                 <Text style={[styles.titleText, {marginBottom:15 }]}>Conditions conducive to timber pest attack</Text>
              {/* {renderCheckBoxItem('Garden against building')}
               <View style={{height:5}}></View>
               {renderCheckBoxItem('Tap(s) without drain under')}
               <View style={{height:5}}></View>
               {renderCheckBoxItem('Hot water system outlet draining to ground')}
               <View style={{height:5}}></View>
               {renderCheckBoxItem('Air conditioner unit outlet draining to ground')}
               <View style={{height:5}}></View>
               {renderCheckBoxItem('No ant caps installed on sub floor piers')}
               <View style={{height:5}}></View>
               {renderCheckBoxItem('Termite treatment label missing in meter box')}
               <View style={{height:5}}></View>
               {renderCheckBoxItem('Ground level above slab height')}
               <View style={{height:5}}></View>
               {renderCheckBoxItem('Lack of sub floor ventilation')}
               <View style={{height:5}}></View>
               {renderCheckBoxItem('Bridging or breaching of termite management systems and/​or inspection zones')} */}
               <FlatList
 data={Newdata}
 renderItem={renderCheckBoxItem} 
 showsVerticalScrollIndicator={false}
 disableLeftSwipe={true}     
 key={key}
 nestedScrollEnabled={true}
              />
              
            </View>
        
        );
     }
    const renderResultOfInspection = () =>{
       return(
        <View style={{ marginVertical: 10, backgroundColor:colors.borderColor, padding:20, }}>
        <Text style={[styles.titleText, { }]}>Results of inspection - Summary</Text>
        <Text style={styles.normlText}>This Summary is not the Report. The following Report MUST be read in full in conjunction with this Summary. If there is a discrepancy between the information provided in this Summary and that contained within the body of the Report, the information in the body of the Report shall override this</Text>
        {renderRadioBtnWithText('Evidence of active (live) termites was found?')}
        {renderRadioBtnWithText2('Evidence of termite activity (including workings) and/​or damage was found?')}
        {renderRadioBtnWithText3('Evidence of a possible previous termite management program was found?')}
        {renderNextInspection()}
        {renderRadioBtnWithText4('Evidence of chemical delignification damage was found')}
        {renderRadioBtnWithText5('Evidence of fungal decay (timber rot) and/​or damage was found?')}
        {renderRadioBtnWithText6('Evidence of wood borer activity and/​or damage was found?')}
        {renderRadioBtnWithText7('Evidence of conditions conducive to timber pest attack was found?')}
        {renderRadioBtnWithText8('Evidence of major safety hazards was found?')}
        {renderPictures()}
        {renderDuetolevelOfInspection()}
        {renderTextDescript()}
        {renderTextDescriptMore()}
        {renderDuetolevelOfInspectionMore()}
        {renderConditionBox()}
        {renderPictures()}
        </View>
       );
    }
   
    return (
        <View style={{ margin: 10 }}>
        <Text style={styles.headerText}>7. Timber Pest Report</Text>
        {renderResultOfInspection()}
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
    checkboxWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        width: '90%'
    },
})
export default Page7;