import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppBackButton from '../components/AppBackButton';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

const Page4 = ({ onNextButton, onBackButton }) => {

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
             <View style={{ backgroundColor:colors.borderColor, padding:20, }}>
            <Text style={styles.headerText}>4. Terms and Conditions</Text>
            <View style={{ marginVertical: 10 }}>
                <Text style={[styles.titleText, { marginVertical: 5 }]}>PURPOSE OF INSPECTION</Text>
                <Text style={styles.normlText}>The purpose of this inspection is to provide advice to the Client regarding the condition of the Building & Site at the time of inspection. </Text>
            </View>
            <View style={{ marginVertical: 10 }}>
                <Text style={[styles.titleText, { marginVertical: 5 }]}>SCOPE OF INSPECTION</Text>
                <Text style={styles.normlText}>This Report only covers or deals with any evidence of: Structural Damage; Conditions Conducive to Structural Damage; any Major Defect in the condition of Secondary Elements and Finishing Elements; collective (but not individual) Minor Defects; and any Serious Safety Hazard discernible at the time of inspection. The inspection is limited to  the Readily Accessible Areas of the Building & Site (see Note below) and is based on a visual examination of surface work (excluding furniture and stored items), and the carrying out of Tests. </Text>
            </View>
            <View style={{ marginVertical: 10 }}>
                <Text style={[styles.titleText, { marginVertical: 5 }]}>Note</Text>
                <Text style={styles.normlText}>With strata and company title properties, the inspection was limited to the interior and the immediate exterior of the particular residence inspected. Common property was not inspected.{'\n\n'}
                    “Structural Damage” means a significant impairment to the integrity of the whole or part of the Structure falling into one or more of the following categories:{'\n\n'}
                    (a) Structural Cracking and Movement – major (full depth) cracking forming in Primary Elements resulting from differential movement between or within the elements of construction, such as foundations, footings, floors, walls and roofs.{'\n\n'}
                    Deformation – an abnormal change of shape of Primary Elements resulting from the application of load(s).{'\n\n'}
                    Dampness – the presence of moisture within the building, which is causing consequential damage to Primary Elements.{'\n\n'}
                    Structural Timber Pest Damage – structural failure, i.e. an obvious weak spot, deformation or even collapse of timber Primary Elements resulting from attack by one or more of the following wood destroying agents: chemical delignification; fungal decay; wood borers; and termites.{'\n\n'}
                    “Structure” means the loadbearing part of the building, comprising the Primary Elements.{'\n\n'}
                    “Primary Elements” means those parts of the building providing the basic loadbearing capacity to the Structure, such as foundations, footings, floor framing, loadbearing walls, beams or columns. The term ‘Primary Elements’ also includes other structural building elements including: those that provide a level of personal protection such as handrails; floor-to-floor access such as stairways; and the structural flooring of the building such as floorboards.{'\n\n'}
                    “Conditions Conducive to Structural Damage” means noticeable building deficiencies or environmental factors that may contribute to the occurrence of Structural Damage.{'\n\n'}
                    “Major Defect” means defect of significant magnitude where rectification has to be carried out in order to avoid unsafe conditions, loss of utility or further deterioration of the property.{'\n\n'}
                    “Secondary Elements” means those parts of the building not providing loadbearing capacity to the Structure, or those non- essential elements which, in the main, perform a completion role around openings in Primary Elements and the building in   general such as non-loadbearing walls, partitions, wall linings, ceilings, chimneys, flashings, windows, glazing or doors.{'\n\n'}
                    “Finishing Elements” means the fixtures, fittings and finishes applied or affixed to Primary Elements and Secondary Elements  such as baths, water closets, vanity basins, kitchen cupboards, door furniture, window hardware, render, floor and wall tiles, trim or paint. The term ‘Finishing Elements’ does not include furniture or soft floor coverings such as carpet and lino.{'\n\n'}
                    “Minor Defect” means defect other than a Major Defect.{'\n\n'}
                    “Serious Safety Hazard” means any item that may constitute an immediate or imminent risk to life, health or property. Occupational, health and safety or any other consequence of these hazards has not been assessed.{'\n\n'}
                    “Tests” means where appropriate the carrying out of tests using the following procedures and instruments:{'\n\n'}
                    (a) Dampness Tests - additional attention to the visual examination was given to those accessible areas which the consultant’s experience has shown to be particularly susceptible to damp problems. Instrument testing using electronic moisture detecting meter of those areas and other visible accessible elements of construction showing evidence of dampness was performed.{'\n\n'}
                    Physical Tests - the following physical actions undertaken by the consultant: opening and shutting of doors, windows and draws; operation of taps; water testing of shower recesses; and the tapping of tiles and wall plaster. {'\n\n'} </Text>
            </View>
            <View style={{ marginVertical: 10 }}>
                <Text style={[styles.titleText, { marginVertical: 5 }]}>ACCEPTANCE CRITERIA:</Text>
                <Text style={styles.normlText}>The building was compared with a building that was constructed in accordance with the generally accepted practice at the time of construction and which has been maintained such that there has been no significant loss of strength and serviceability. Unless noted in “Special Conditions or Instructions”, the Report assumes that the existing use of the building will continue.{'\n\n'}
                    This Report only records the observations and conclusions of the Consultant about the readily observable state of the property at the time of inspection. The Report therefore cannot deal with:{'\n\n'}
                    (a) possible concealment of defects, including but not limited to, defects concealed by lack of accessibility, obstructions such as furniture, wall linings and floor coverings, or by applied finishes such as render and paint; and{'\n\n'}
                    undetectable or latent defects, including but not limited to, defects that may not be apparent at the time of inspection due to seasonal changes, recent or prevailing weather conditions, and whether or not services have been used some time prior to the inspection being carried out.{'\n\n'}
                    These matters outlined above in (a) & (b) are excluded from consideration in this Report.{'\n\n'}
                    If the Client has any doubt about the purpose, scope and acceptance criteria on which the Report was based please discuss your concerns with the Consultant on receipt of the Report.{'\n\n'}
                    The Client acknowledges that, unless stated otherwise, the Client as a matter of urgency should implement any recommendation or advice given in this Report. </Text>
            </View>
            <View style={{ marginVertical: 10 }}>
                <Text style={[styles.titleText, { marginVertical: 5 }]}>LIMITATIONS:</Text>
                <Text style={styles.normlText}>The Client acknowledges:

                    ‘Visual only’ inspections are not recommended. A visual only inspection may be of limited use to the Client. In addition to a visual inspection, to thoroughly inspect the Readily Accessible Areas of the property requires the Consultant to carry out when ever necessary appropriate Tests.{'\n\n'}
                    This Report does not include the inspection and assessment of items or matters outside the scope of the requested inspection and report. Other items or matters may be the subject of a Special-Purpose Inspection Report, which is adequately specified (see Exclusions below).{'\n\n'}
                    This Report does not include the inspection and assessment of items or matters that do not fall within the Consultant’s direct expertise.{'\n\n'}
                    The inspection only covered the Readily Accessible Areas of the property. The inspection did not include areas, which were inaccessible, not readily accessible or obstructed at the time of inspection. Obstructions are defined as any condition or physical limitation which inhibits or prevents inspection and may include – but are not limited to – roofing, fixed ceilings, wall linings, floor coverings, fixtures, fittings, furniture, clothes, stored articles/materials, thermal insulation, sarking, pipe/duct work,  builder’s debris, vegetation, pavements or earth.{'\n\n'}
                    Australian Standard AS4349.0-2007 Inspection of Buildings, Part 0: General Requirements recognises that a property report is  not a warranty or an insurance policy against problems developing with the building in the future.{'\n\n'}
                    This Report was produced for the use of the Client. The Consultant is not liable for any reliance placed on this report by any third party.</Text>
            </View>
            <View style={{ marginVertical: 10 }}>
                <Text style={[styles.titleText, { marginVertical: 5 }]}>EXCLUSIONS::</Text>
                <Text style={styles.normlText}>The Client acknowledges that this Report does not cover or deal with:{'\n\n'}
                    (i) any individual Minor Defect;{'\n\n'}
                    solving or providing costs for any rectification or repair work;{'\n\n'}
                    the structural design or adequacy of any element of construction;{'\n\n'}
                    detection of wood destroying insects such as termites and wood borers;{'\n\n'}
                    the operation of fireplaces and chimneys;{'\n\n'}
                    any services including building, engineering (electronic), fire and smoke detection or mechanical;{'\n\n'}
                    lighting or energy efficiency;{'\n\n'}
                    any swimming pools and associated pool equipment or spa baths and spa equipment or the like;{'\n\n'}
                    any appliances such as dishwashers, insinkerators, ovens, stoves and ducted vacuum systems;{'\n\n'}
                    a review of occupational, health or safety issues such as asbestos content, the provision of safety glass or the use of lead  based paints;{'\n\n'}
                    a review of environmental or health or biological risks such as toxic mould;{'\n\n'}
                    whether the building complies with the provisions of any building Act, code, regulation(s) or by-laws;{'\n\n'}
                    whether the ground on which the building rests has been filled, is liable to subside, swell or shrink, is subject to landslip or tidal inundation, or if it is flood prone; ; and{'\n\n'}
                    in the case of strata and company title properties, the inspection of common property areas or strata/company records.{'\n\n'}
                    Any of the above matters may be the subject of a special-purpose inspection report, which is adequately specified and undertaken by an appropriately qualified inspector.</Text>
            </View>
            </View>
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
})
export default Page4;