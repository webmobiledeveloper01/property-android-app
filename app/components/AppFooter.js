import React from 'react';
import { View } from 'react-native';
import AppBackButton from './AppBackButton';
import AppButton from './AppButton';

const AppFooter = ({onBackButton, onNextButton}) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}>
                <AppBackButton title={'Back'} onPress={onBackButton} />
                <AppButton title={'Next'} onPress={onNextButton} />
            </View>
    );
}

export default AppFooter;