import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppFooter from '../components/AppFooter';
import colors from '../config/colors';

const Page8 = ({ onBackButton, onNextButton }) => {


    return (
        <View style={{ margin: 10 }}>
            <Text style={styles.headerText}>8. Timber pest definitions to help you better understand this report:</Text>
            <View style={{ marginVertical: 10, backgroundColor: colors.borderColor, padding: 20, }}>
                <Text style={styles.titleText}>Timber pest definitions to help you better understand this report:{'\n\n'}</Text>
                <Text style={[styles.normlText, {}]}>Timber Pest Attack” Timber Pest Activity and/or Timber Pest Damage.{'\n\n'}
                    “Timber Pest Activity” Telltale signs associated with ‘active’ (live) and/or ‘inactive’ (absence of live) Timber Pests at the time of inspection.{'\n\n'}
                    “Timber Pest Damage” Noticeable impairments to the integrity of timber and other susceptible materials resulting from attack by Timber Pests.{'\n\n'}
                    "Major Safety Hazard” Any item that may constitute an immediate or imminent risk to life, health or property resulting directly from Timber Pest Attack. Occupational, health and safety or any other consequence of these hazards has not been assessed.{'\n\n'}
                    “Conditions Conducive to Timber Pest Attack” Noticeable building deficiencies or environmental factors that may contribute to the presence of Timber Pests.{'\n\n'}
                    “Readily Accessible Areas” Areas which can be easily and safely inspected without injury to person or property, are up to 3.6 metres above ground or floor levels or accessible from a 3.6 metre ladder, in roof spaces where the minimum area of accessibility is not less than 600 mm high by 600 mm wide and subfloor spaces where the minimum area of accessibility is not less than 400 mm high by 600mm wide, providing the spaces or areas permit entry. The term ‘readily accessible’ also includes:
                    (a) accessible subfloor areas on a sloping site where the minimum clearance is not less than 150mm high, provided that the area is not more than 2 metres from a point with conforming clearance (i.e. 400 mm high by 600 mm wide); and (b) areas at the eaves of accessible roof spaces that are within the consultant’s unobstructed line of sight and within arm’s length from a point with conforming clearance (i.e. 600 mm high by 600
                    mm wide).{'\n\n'}
                    “Client” The person or persons for whom the Timber Pest Report was carried out or their Principal (i.e. the person or persons for whom the report was being obtained).{'\n\n'}
                    “Timber Pest Detection Consultant” A person who meets the minimum skills requirement set out in the current Australian Standard AS 4349.3 Inspections of Buildings. Part 3: Timber Pest Inspection Reports or state/territory legislation requirements beyond this Standard, where applicable.{'\n\n'}
                    “Building and Site” The main building (or main buildings in the case of a building complex) and all timber structures (such as outbuildings, landscaping, retaining walls, fences, bridges, trees and stumps with a diameter greater than 100 mm and timber embedded in soil) and the land within the property boundaries up to a distance of 50 metres from the main building(s).{'\n\n'}
                    “Timber Pests” One or more of the following wood destroying agents which attack timber in service and affect its structural properties: {'\n\n'}
                    (a) Chemical Delignification - the breakdown of timber through chemical action. {'\n\n'}
                    (b) Fungal Decay - the microbiological degradation of timber caused by soft rot fungi and decay fungi, but does not include mould, which is a type of fungus that does not structurally damage wood.{'\n\n'}
                    (c) Wood Borers - wood destroying insects belonging to the order ‘Coleoptera’ which commonly attack seasoned timber.{'\n\n'}
                    (d) Termites - wood destroying insects belonging to the order ‘Isoptera’ which commonly attack seasoned timber.{'\n\n'}
                    “Tests” Additional attention to the visual examination was given to those accessible areas which the consultant’s experience has shown to be particularly susceptible to attack by Timber Pests. Instrument Testing of those areas and other visible accessible timbers/materials/areas showing
                    evidence of attack was performed.{'\n\n'}
                    “Instrument Testing” Where appropriate the carrying out of Tests using the following techniques and instruments:{'\n\n'}
                    (a) electronic moisture detecting meter - an instrument used for assessing the moisture content of building elements;{'\n\n'}
                    (b) stethoscope - an instrument used to hear sounds made by termites within building elements;{'\n\n'}
                    (c) probing - a technique where timber and other materials/areas are penetrated with a sharp instrument (e.g. bradawl or pocket knife), but does not include probing of decorative timbers or finishes, or the drilling of timber and trees; and {'\n\n'}
                    (d) sounding - a technique where timber is tapped with a solid object.{'\n\n'}
                    “Subterranean Termite Management Proposal” A written proposal in accordance with Australian Standard AS 3660.2 to treat a known subterranean termite infestation and/or manage the risk of concealed subterranean termite access to buildings and structures {'\n\n'}.</Text>
                <Text style={styles.titleText}>Terms on which this report was prepared:{'\n\n'}</Text>
                <Text style={styles.normlText}>SERVICE: As requested by the Client, the inspection carried out by the Timber Pest Detection Consultant (“the Consultant”) was a “Standard Timber Pest Report”.{'\n\n'}
                    PURPOSE: The purpose of this inspection is to assist the Client to identify and understand any Timber Pest issues observed at the time of inspection.{'\n\n'}
                    SCOPE OF INSPECTION: This Report only deals with the detection or non detection of Timber Pest Attack and Conditions Conducive to Timber Pest Attack discernible at the time of inspection. The inspecion was limited to the Readily Accessible Areas of the Building & Site (see Note below) and was based on a visual examination of surface work (excluding furniture and stored items), and the
                    carrying out of Tests.{'\n\n'}
                    Note. With strata and company title properties, the inspection was limited to the interior and the immediate exterior of the particular residence inspected. Common property was not inspected.{'\n\n'}
                    ACCEPTANCE CRITERIA: Unless noted in “Special Conditions or Instructions”, the building being inspected was compared with a similar building. To the Consultant's knowledge the similar building used for comparison was constructed in accordance with generally accepted timber pest management practices and has since been maintained during all its life not to attract or support timber pest infestation.{'\n\n'}
                    Unless noted in “Special Conditions or Instructions”, this Report assumes that the existing use of the building will continue.{'\n\n'}
                    This Report only records the observations and conclusions of the Consultant about the readily
                    observable state of the property at the time of inspection. This Report therefore cannot deal with:{'\n\n'}
                    (a) possible concealment of timber pest attack, including but not limited to, timber pest attack
                    concealed by lack of accessibility, obstructions such as furniture, wall linings and floor
                    coverings, or by applied finishes such as render and paint; and {'\n\n'}
                    (b) undetectable or latent timber pest attack, including but not limited to, timber pest attack that may not be apparent at the time of inspection due to seasonal changes, recent or prevailing weather conditions, and whether or not services have been used some time prior to the inspection being carried out.{'\n\n'}
                    These matters outlined above in (a) & (b) are excluded from consideration in this Report. If the Client has any doubt about the purpose, scope and acceptance criteria on which this Report was based please discuss your concerns with the Consultant on receipt of this Report.{'\n\n'}
                    The Client acknowledges that, unless stated otherwise, the Client as a matter of urgency should implement any recommendation or advice given in this Report.{'\n\n'}
                    LIMITATIONS:{'\n\n'}
                    The Client acknowledges:{'\n\n'}
                    1. This Report does not include the inspection and assessment of matters outside the scope of the requested inspection and report.{'\n\n'}
                    2. The inspection only covered the Readily Accessible Areas of the Building and Site. The
                    inspection did not include areas which were inaccessible, not readily accessible or obstructed at the time of inspection.{'\n\n'}
                    Obstructions are defined as any condition or physical limitation which inhibits or prevents inspection and may include – but are not limited to – roofing, fixed ceilings,
                    wall linings, floor coverings, fixtures, fittings, furniture, clothes, stored articles/materials, thermal insulation, sarking, pipe/duct work, builder’s debris, vegetation, pavements or earth.{'\n\n'}
                    3. The detection of drywood termites may be extremely difficult due to the small size of the
                    colonies. No warranty of absence of these termites is given.{'\n\n'}

                    4. European House Borer (Hylotrupes bajulus) attack is difficult to detect in the early stages of
                    infestation as the galleries of boring larvae rarely break through the affected timber surface. No warranty of absence of these borers is given. Regular inspections including the carrying out of appropriate tests are required to help monitor susceptible timbers.{'\n\n'}
                    5. This is not a structural damage report. Neither is this a warranty as to the absence of Timber Pest Attack.{'\n\n'}
                    6. If the inspection was limited to any particular type(s) of timber pest (e.g. subterranean termites), then this would be the subject of a Special-Purpose Inspection Report, which is adequately specified.{'\n\n'}
                    7. This Report does not cover or deal with environmental risk assessment or biological risks not associated with Timber Pests (e.g. toxic mould) or occupational, health or safety issues. Such advice may be the subject of a Special-Purpose Inspection Report which is adequately specified and must be undertaken by an appropriately qualified inspector. The choice of such inspector is a matter for the Client.{'\n\n'}
                    8. This Report has been produced for the use of the Client. The Consultant or their firm or
                    company are not liable for any reliance placed on this report by any third party.{'\n\n'}

                    EXCLUSIONS:{'\n\n'}
                    The Client acknowledges that:{'\n\n'}
                    1. This Report does not deal with any timber pest preventative or treatment measures, or provide costs for the control, rectification or prevention of attack by timber pests. However, this additional information or advice may be the subject of a timber pest management proposal
                    which is adequately specified.</Text>
            </View>
            <AppFooter onBackButton={onBackButton} onNextButton={onNextButton} />
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
export default Page8;