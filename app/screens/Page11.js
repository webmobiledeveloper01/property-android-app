import React,{useState,useCallback} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import AppActionButton from '../components/AppActionButton';
import AppButton from '../components/AppButton';
import AppFooter from '../components/AppFooter';
import AppSubmitFooter from '../components/AppSubmitFooter';
import colors from '../config/colors';
import Picker from './components/Picker';
function Page11({ onBackButton, onSubmitButton, onActionButton }) {


    const [imageuri, setImageuri] = useState("");
    console.log("image is",imageuri)
    const getImagedata=(uri)=>{
     setImageuri(uri)
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
            <View style={{ marginTop: 10 }}>
                <Text style={styles.titleText}>Untitled</Text>
                <Picker
    getImagedata={getImagedata}
    />
                {/* <View style={styles.uploadView}>
                    <TouchableOpacity>
                        <View style={styles.uploadBtn}>
                            <Text style={{ alignSelf: 'center', fontSize: 14, color: colors.medium }}>Upload</Text>
                        </View>
                    </TouchableOpacity>
                </View> */}
                {renderInputNotes('Notes')}
            </View>
        );
    }
    const renderTextlabel = (title, subTitle) => {
        return (
            <View>
                <Text style={[styles.titleText, { marginBottom: 5, }]}>{title}</Text>
                <Text style={[styles.normlText, { marginBottom: 15 }]}>{subTitle}</Text>
            </View>
        );
    }
    const renderTextDescript = () => {
        return (
            <View style={{ marginTop: 10 }}>
                <Text style={styles.headerText}>Terms and Conditions of Thermal Imaging Photography Report{'\n'}</Text>
                {renderTextlabel('Orders:', 'Orders for Inspections and Reports can be made by telephone, by email or by fax.')}
                {renderTextlabel('Access:', 'We will organise access to the property using the information You provide.')}
                {renderTextlabel('Payment:', 'Payment is required at the time that the Inspection is ordered.')}
                {renderTextlabel('Payment Method:', 'Payment can be made by credit card or internet banking.')}
                {renderTextlabel('Cancellations:', 'We require 24 hours notice for cancellations or You will be charged the full Inspection Fee.')}
                {renderTextlabel('Cancellation Method:', 'Cancellation can be made by telephone, text or email.')}
                {renderTextlabel('Purpose of Report:', 'The Thermal Imaging Inspection Report is solely undertaken for the purpose of detecting thermal irregularities or anomalies that may be caused by current termite infestation.')}
                <Text style={[styles.normlText, { marginBottom: 25 }]}>{'Thermal Images of every accessible room in the property were taken. Images included in this report are a selection of the images taken of the property. Since thermal images are large files that cannot be emailed easily, not all images are inserted in the report. Any images that indicate thermal anomalies are definitely inserted in the report. If no thermal anomalies are present, a selection of images are used. Images not used in the report are kept on file.'}</Text>
                {renderTextlabel('Not a Guarantee:', 'This Report is not a guarantee that an infestation and/or defect does not exist in any inaccessible or partly inaccessible area or section of the property. Nor is it a guarantee that a future infestation of Timber Pests will not occur or be found. The Australian Standard for Termite Management Part 2: In and Around Existing Buildings And Structures, AS 3660.2-2000, recommends that properties should be inspected at least every 12 months but more frequent inspections are strongly recommended.')}
                {renderTextlabel('Sample Report::', 'In accordance with the Australian Standard AS4349.0 Part 0: General requirements Section 2 Inspection Agreement, 2.1 General, C2.1, you confirm that you, or your Solicitor or Conveyancer, have seen a sample of our Report on our website, or elsewhere, and acknowledge that you are satisfied with the aspects covered in the Sample Report and the extent of reporting in the Sample Report which is similar to the Report you have received.')}
                {renderTextlabel('Thermal Imaging Camera:', 'The thermal imaging camera uses infrared technology to detect variances in infrared radiation being emitted from the surface being surveyed. It cannot see through walls and therefore cannot determine the presence of any damage.')}
                {renderTextlabel('Thermal Anomalies:', 'When thermal anomalies are identified, we strongly recommend that a more invasive inspection should be undertaken which may include a boroscope inspection*, removing wall linings, removing brickwork or other claddings, cutting traps and lifting carpets so that the timber structure can be inspected for the presence of damage.')}
                <Text style={[styles.normlText, { marginBottom: 25 }]}>{'*A borescope inspection is an intrusive inspection involving the insertion of a probe through holes that are made in the ceilings, walls and floors so that the concealed timbers in these areas can be examined to determine whether termite damage or termite infestation is present. Permission should be obtained from the owner because this process causes damage to the property.'}</Text>
                {renderTextlabel('Recommendations:', 'Where recommendations are made for further investigation of any section of this property, including recommendations to undertake a more invasive inspection, remove wall linings, remove brickwork or other claddings, cut traps and lift carpets so that further access is gained, such access and further inspections subsequent to access being gained must be carried out before this purchase proceeds.')}
                {renderTextlabel('Thermal Imaging Limitations:', 'Thermal imaging is a diagnostic technique that may detect variations in temperature that may indicate the presence of termite infestation in a building. Thermal imaging is not a conclusive test for the presence of termites because variations in temperature can be influenced by a variety of factors including but not limited to the temperature on the day of the inspection, the temperature inside the property, heaters and air conditioners in the property, plumbing pipes and electric cables in the walls of the property, light switches, powerpoints and electrical appliances such as ovens, refrigerators and hotplates. The thermal camera may also not be able detect a small number of termites that may be present since they may not produce sufficient heat for detection. For all the reasons stated above, this report is not a guarantee that termites are not present in the property. Accordingly, this report can only be relied upon if termite infestation is discovered in the property.')}

                {renderTextlabel('Detection Of Damage:', 'Thermal imaging cannot detect damage due to termites in the timber structure of a building. For this reason, it is not the purpose of this Report to identify termite damage. Any termite damage that may be present in the building can only be assessed by a visual inspection of the termite damaged areas.')}
                {renderTextlabel('Areas Not Inspected:', 'This Thermal Imaging Inspection Report covers all accessible internal areas of the dwelling. The Report does not include the roof void, subfloor (area below the property), trees, fences, sheds, pergolas and landscaping timber. These areas are areas that must be inspected by a pest inspector and reported on in a Visual Timber Pest Inspection and Report.')}
                {renderTextlabel('Inaccessible Areas:', 'This Report will not disclose termite infestation in inaccessible areas or areas that are not reasonably visible.')}
                <Text style={[styles.normlText, { marginBottom: 25 }]}>{'Restricted Access: Only the readily accessible and readily visible areas of this building were inspected and reported on. The Report therefore does not extend to any areas where there were physical limitations which inhibit or prevent access and inspection, including but not limited to, fixtures, fittings and furniture containing clothes and other stored articles/materials, thermal insulation, sarking, pipe/duct work, and areas covered by or containing builders debris. Any section of the building that is not readily accessible, such as garages, laundries, sheds, other rooms, or any other areas that are locked, cannot be reported on and no responsibility will therefore be taken in respect of termite infestation that may be present in these parts of the building. The client will be charged an additional fee to inspect these areas if access becomes available at a later date.'}</Text>

                {renderTextlabel('Reasonable Access:', 'The Australian Standard AS4349.1-2007 Inspection of Buildings Part 1: Pre-purchase Inspections— Residential Buildings states that Reasonable Access is defined as "areas where safe unobstructed access is provided". Reasonable access does not include removing screws or bolts to access covers. Reasonable access does not include destructive or invasive inspection methods nor does it include cutting or making access traps or moving furniture, floor coverings or stored goods. Access to any areas of the building as detailed above must be made by the owner. We recommend you arrange for us to gain access to any areas of the building that were not accessible to determine whether any termite infestation is present in these areas. However, we advise that this will require a second visit to the property at an additional fee.')}
                {renderTextlabel('Further Access:', 'Where we recommend that further access to sections of the property be arranged for us, you should urgently arrange for such further access to be provided so that further inspections of those sections can be carried out BEFORE you proceed with a purchase of this property. No inspection of any furnishings or household items was made for the purposes of this Report.')}

                {renderTextlabel('Right Of Entry:', 'In accordance with the Australian Standard AS4349.1 Part 1: Pre-purchase inspections— buildings, please note that Section 2.3.2 Areas for inspection says that the inspection covers accessible areas only. The client must arrange right of entry, facilitate physical entry to the property and supply necessary information to enable the inspector to undertake the inspection and prepare a report. The inspector is not responsible for arranging entry to property or parts of property. Areas where reasonable entry is denied to the inspector, or where reasonable access is not available, are excluded from, and do not form part of, the inspection. Accordingly, any areas of the building that are not accessible will be excluded from the Report and the client will be charged an additional fee if those areas become accessible and an inspection of those areas are requested.')}
                {renderTextlabel('Movement Of Objects:', 'Our inspectors are not authorised to move any items on the properties we inspect including but not limited to furniture, fittings, floor coverings, white goods, debris, vegetation or any personal effects. These items can conceal termite infestation. Accordingly, the client will be charged an additional fee to inspect these areas if access becomes available at a later date as a result of the movement of these items.')}
                {renderTextlabel('Vacation Of Property::', 'Occupied properties invariably present restrictions to access due to the presence of furniture, furnishings, floor and wall coverings, insulation, appliances, foliage and personal possessions. Accordingly, we will accept no responsibility for the presence of any termite infestation or for the repair of any termite damage that may become apparent when a property is vacated by the former occupants of the property.')}
                {renderTextlabel('Termite Damage:', 'Should the presence of termite infestation be identified or suspected, it is not the purpose of the Report to assess any damage due to termites.')}

                {renderTextlabel('Future Damage::', 'This Report is based only on the condition of the building at the time of the inspection. The Australian Standard AS4349.1 Part 1: Pre-purchase inspections— buildings states in section 2.2 Purpose of Inspection that the purpose of the inspection is to provide advice to a prospective purchaser regarding the condition of the property at the time of inspection. Accordingly, this Report is a Report on the condition of the property at the time of the inspection and we accept no responsibility for any termite infestation that may appear at any time in the future.')}
                {renderTextlabel('Termite Attack Awareness:', 'Please be aware that termites can attack, infest and cause structural damage to a property in a very short period of time, often in a matter of weeks, and for this reason this Thermal Imaging Inspection and Report is only valid for 6 weeks from the date on the Report.')}
                {renderTextlabel('Repair Costs:', 'Should the presence of termite infestation be identified or suspected, it is not the purpose of the Report to assess the costs of repairs.')}
                {renderTextlabel('Undertaking of Repairs:', ' It is not part of our engagement to undertake any repairs of any termite damage that may be present in this property.')}
                {renderTextlabel('Termite Treatment:', 'It is not part of our engagement to undertake any treatment where Timber Pests infestation is found and it is not part of our engagement to undertake any repairs where damage caused by Timber Pests is discovered.')}

                {renderTextlabel('Evidence Of a Treatment:', 'Where evidence of a termite treatment is present, you should assume that the treatment was applied as a curative measure and not as a preventative measure. You should obtain a statement from the owner as to any treatments that have been carried out to the property. It is important to obtain copies of any paperwork issued. ')}
                <Text style={[styles.normlText, { marginBottom: 25 }]}>{'Conditions Conducive to Termite Infestation: This Report has identified a number of conditions that are conducive to termite infestation and ALL the recommendations listed in the Report must be fully implemented immediately to reduce the risk of Timber Pests entry and damage.'}</Text>
                {renderTextlabel('Preventative Treatment:', 'Please note carefully that the only way to protect a property from being attacked by Timber Pests is to have a complete preventative treatment carried out in accordance with Australian Standard AS3660. Non-active Timber Pests can re-infest at any time unless a treatment is carried out regularly and in accordance with the Australian Standard by a reputable Pest Control firm.')}
                {renderTextlabel('High Risk Categorisation:', 'We may categorise this property as being of high risk that termite damage or infestation may be present in any timber floor, wall and roof framing not exposed to view. Please note carefully that should you undertake any alterations or additions to this property and discover any termite damage or infestation, we will accept no responsibility for the presence of any termite damage or infestation.')}
                {renderTextlabel('Pest Inspection and Report:', 'This Thermal Imaging Report cannot be relied upon on its own and must be read in conjunction with the Visual Timber Pest Inspection and Report in accordance with AS3660.2 and AS4349.3.')}
                <Text style={[styles.normlText, { marginBottom: 25 }]}>{'Reliance on Report: In the event of any dispute or claim arising out of, or relating to the Inspection or the Report, or any alleged negligent act or omission on our part or on the part of the individual conducting the Inspection, you may rely on the Report to make a claim, however, you are required to rely on every part of the report and you cannot be selective in the parts of the Report that you rely on Verbal Report: This Report overrides any verbal report provided by our inspectors or any conversation that may take place between our inspectors and the client. We strongly recommend that you do not exchange contracts on the strength of a verbal report with the inspector and that every section of the Report is thoroughly read before the purchase proceeds.'}</Text>
                {renderTextlabel('Disputes:', 'In the event of any dispute or claim arising out of, or relating to the Inspection or the Report, or any alleged negligent act or omission on our part or on the part of the individual conducting the Inspection, either party must give written Notice of the dispute or claim to the other party. If the dispute is not resolved within 21 days from the service of the Notice then either party may refer the dispute or claim to a mediator nominated by this Company. Should the dispute or claim not be resolved by mediation then this Company may refer the dispute or claim to the Institute of Arbitrators and Mediators of Australia who will appoint an Arbitrator who will resolve the dispute by arbitration. The Arbitrators fees with be shared equally by the Company and the client and the client is required to forward half of the cost of the Arbitrators fees to the Company before the Arbitrator is engaged. The Arbitrator will also determine what costs each of the parties are to pay.')}
                <Text style={[styles.titleText, { marginBottom: 5, }]}>{'Vexatious claims:'}</Text>
                <Text style={[styles.normlText, { marginBottom: 15 }]}>You must read every section of the Report before you consider making a claim against our Company. A vexatious claim is defined by the Courts as a claim that is without merit, ill conceived and/or fraudulent. Should we categorise your claim as being without merit, ill conceived and/or fraudulent, please note carefully that our response to your claim will incur a cost.{'\n'}Conditions: The client agrees that they accept the report with all the conditions stated therein. Should the Client not agree to any condition in this Report, a written Notice must be received in the Company's registered office within 7 days of the date of the Report.'</Text>
                {renderTextlabel('Liability To Third Parties:', 'This Report is made for the use and benefit of the client named on the front of the Report and no liability or responsibility whatsoever is accepted to any third party who may rely on the Report, wholly or in part. Any third party seeking to rely or acting in reliance on this Report, whether in whole or in part, does so at their own risk.')}

                {renderTextlabel('Agreed Areas Of Inspection:', 'For the purposes of any inspection where, regardless of whether access is actually restricted, the client has instructed our inspector, or agreed with our inspector, that certain areas of the property need not be inspected to fulfill their requirements for the inspection to have been completed adequately. No liability or responsibility is accepted for termite infestation consequently found in any areas that the inspector was not instructed to inspect by the client at the time of the inspection.')}

            </View>
        )
    }
    return (
        <View style={{ margin: 10 }}>
            <Text style={styles.headerText}>Thermal Imaging Pictures</Text>
            <View style={{ marginVertical: 10, backgroundColor: colors.borderColor, padding: 20, }}>
                {renderPictures()}
                {renderPictures()}
                {renderPictures()}
                {renderPictures()}
                {renderPictures()}
                {renderPictures()}
                {renderPictures()}
                {renderPictures()}
                {renderPictures()}
                {renderPictures()}
                {renderTextDescript()}
            </View>
            <AppSubmitFooter onBackButton={onBackButton} onSubmitButton={() => { }} onActionButton={() => {
console.log("click")

             }} />
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <AppActionButton title={'Action'} onPress={() => { }} />
            </View>

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
export default Page11;