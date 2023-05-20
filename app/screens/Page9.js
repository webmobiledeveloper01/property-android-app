import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppFooter from '../components/AppFooter';
import colors from '../config/colors';

const Page9 = ({ onBackButton, onNextButton }) => {
    return (
        <View style={{ margin: 10 }}>
            <Text style={styles.headerText}>9. Risk management options for timber pests</Text>
            <View style={{ marginVertical: 10, backgroundColor: colors.borderColor, padding: 20, }}>
                <Text style={styles.titleText}>Risk management options for timber pests:{'\n\n'}</Text>
                <Text style={[styles.normlText, {}]}>To help protect against financial loss, it is essential that the building owner immediately control or rectify any evidence of destructive timber pest activity or damage identified in this Report.{'\n\n'}
                    The Client should further investigate any high-risk area where access was not gained. It is strongly advised that appropriate steps be taken to remove, rectify or monitor any evidence of conditions conducive to timber pest attack.{'\n\n'}
                    It is recommended that the client act on the following advice to further protect their investment against timber pest infestation:{'\n\n'}
                    Undertake thorough regular inspections at intervals not exceeding twelve months or more frequent inspections where the risk of timber pest attack is high or the building type is susceptible to attack. To further reduce the risk of subterranean termite attack, implement a management program in accordance with Australian Standard AS 3660.{'\n\n'}
                    This may include the installation of a monitoring and/or baiting system, or chemical and/or physical management system. However, AS 3660 stresses that subterranean termites can bridge or breach management systems and inspection zones and that thorough regular inspections of the building are necessary.{'\n\n'}
                    If the Client has any queries or concerns regarding this Report, or the Client requires further information on a risk management program, please do not hesitate to contact the person who carried out this Inspection.</Text>
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
export default Page9;