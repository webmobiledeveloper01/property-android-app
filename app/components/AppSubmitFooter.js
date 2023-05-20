import React from 'react';
import { View } from 'react-native';
import AppBackButton from './AppBackButton';
import AppButton from './AppButton';

const AppSubmitFooter = ({ onBackButton, onSubmitButton, }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}>
            <AppBackButton title={'Back'} onPress={onBackButton} />
            <AppButton title={'Submit'} onPress={onSubmitButton} />

        </View>
    );
}

export default AppSubmitFooter;