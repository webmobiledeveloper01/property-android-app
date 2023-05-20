import React, { useState, useRef } from 'react';
import { SafeAreaView, View, StyleSheet, Text, ScrollView, TouchableOpacity, Animated } from 'react-native';

import colors from '../config/colors';
import Page3 from './Page3';
import Page4 from './Page4';
import AppHeader from '../components/AppHeader';
import Page5 from './Page5';
import Page1 from './Page1';
import Page6 from './Page6';
import Page7 from './Page7';
import Page8 from './Page8';
import Page9 from './Page9';
import Page10 from './Page10';
import Page11 from './Page11';
import Page2 from './Page2';

const HomeScreen = ({ navigation }) => {

    const [currentIndex, setcurrentIndex] = useState(1);



    const handlePage1 = () => {
        setcurrentIndex(1);
    }
    const handlePage2 = () => {
        setcurrentIndex(2);
    }
    const handlePage3 = () => {
        setcurrentIndex(3);
    }
    const handlePage4 = () => {
        setcurrentIndex(4);
    }
    const handlePage5 = () => {
        setcurrentIndex(5);
    }
    const handlePage6 = () => {
        setcurrentIndex(6);
    }
    const handlePage7 = () => {
        setcurrentIndex(7);
    }
    const handlePage8 = () => {
        setcurrentIndex(8);
    }
    const handlePage9 = () => {
        setcurrentIndex(9);
    }
    const handlePage10 = () => {
        setcurrentIndex(10);
    }
    const handlePage11 = () => {
        setcurrentIndex(11);
    }

    //Handle BACK AND NEXT BUTTONS
    const handleNextButton1 = () => {
        setcurrentIndex(2);
    }
    const handleBackButton2 = () => {
        setcurrentIndex(1);
    }
    const handleNextButton2 = () => {
        setcurrentIndex(3);
    }
    const handleBackButton3 = () => {
        setcurrentIndex(2);
    }
    const handleNextButton3 = () => {
        setcurrentIndex(4);
    }
    const handleBackButton4 = () => {
        setcurrentIndex(3);
    }
    const handleNextButton4 = () => {
        setcurrentIndex(5);
    }
    const handleBackButton5 = () => {
        setcurrentIndex(4);
    }
    const handleNextButton5 = () => {
        setcurrentIndex(6);
    }
    const handleBackButton6 = () => {
        setcurrentIndex(5);
    }
    const handleNextButton6 = () => {
        setcurrentIndex(7);
    }
    const handleBackButton7 = () => {
        setcurrentIndex(6);
    }
    const handleNextButton7 = () => {
        setcurrentIndex(8);
    }
    const handleBackButton8 = () => {
        setcurrentIndex(7);
    }
    const handleNextButton8 = () => {
        setcurrentIndex(9);
    }
    const handleBackButton9 = () => {
        setcurrentIndex(8);
    }
    const handleNextButton9 = () => {
        setcurrentIndex(10);
    }
    const handleBackButton10 = () => {
        setcurrentIndex(9);
    }
    const handleNextButton10 = () => {
        setcurrentIndex(11);
    }
    const handleBackButton11 = () => {
        setcurrentIndex(10);
    }
    const handleSubmitbutton = () => {
        //setcurrentIndex(11);
    }
    const renderTopscroll = () => {
        return (
            <View style={{ height: 69 }}>
                <ScrollView style={{ height: 49, margin: 10, }}
                    contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity onPress={() => handlePage1()}>
                        <View style={[styles.tab, { backgroundColor: currentIndex == 1 ? colors.primary : colors.medium }]}>
                            <Text style={[styles.pagestyle]}>Page 1</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePage2()}>
                        <View style={[styles.tab, { backgroundColor: currentIndex == 2 ? colors.primary : colors.medium }]}>
                            <Text style={[styles.pagestyle]}>Page 2</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePage3()}>
                        <View style={[styles.tab, { backgroundColor: currentIndex == 3 ? colors.primary : colors.medium }]}>
                            <Text style={[styles.pagestyle]}>Page 3</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePage4()}>
                        <View style={[styles.tab, { backgroundColor: currentIndex == 4 ? colors.primary : colors.medium }]}>
                            <Text style={[styles.pagestyle]}>Page 4</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePage5()}>
                        <View style={[styles.tab, { backgroundColor: currentIndex == 5 ? colors.primary : colors.medium }]}>
                            <Text style={[styles.pagestyle]}>Page 5</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePage6()}>
                        <View style={[styles.tab, { backgroundColor: currentIndex == 6 ? colors.primary : colors.medium }]}>
                            <Text style={[styles.pagestyle]}>Page 6</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePage7()}>
                        <View style={[styles.tab, { backgroundColor: currentIndex == 7 ? colors.primary : colors.medium }]}>
                            <Text style={[styles.pagestyle]}>Page 7</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePage8()}>
                        <View style={[styles.tab, { backgroundColor: currentIndex == 8 ? colors.primary : colors.medium }]}>
                            <Text style={[styles.pagestyle]}>Page 8</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePage9()}>
                        <View style={[styles.tab, { backgroundColor: currentIndex == 9 ? colors.primary : colors.medium }]}>
                            <Text style={[styles.pagestyle]}>Page 9</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePage10()}>
                        <View style={[styles.tab, { backgroundColor: currentIndex == 10 ? colors.primary : colors.medium }]}>
                            <Text style={[styles.pagestyle]}>Page 10</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePage11()}>
                        <View style={[styles.tab, { backgroundColor: currentIndex == 11 ? colors.primary : colors.medium }]}>
                            <Text style={[styles.pagestyle]}>Page 11</Text>
                        </View>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        );
    }
    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
                <ScrollView>
                    <AppHeader />
                    <View style={{ flex: 1, backgroundColor: colors.white }}>
                        <View style={styles.container}>

                            {renderTopscroll()}
                           
                                {currentIndex == 1 && <Page1 onNextButton={handleNextButton1} />}
                                {currentIndex == 2 && <Page2 onBackButton={handleBackButton2} onNextButton={handleNextButton2} />}
                                {currentIndex == 3 && <Page3 onBackButton={handleBackButton3} onNextButton={handleNextButton3} />}
                                {currentIndex == 4 && <Page4 onBackButton={handleBackButton4} onNextButton={handleNextButton4} />}
                                {currentIndex == 5 && <Page5 onBackButton={handleBackButton5} onNextButton={handleNextButton5} />}
                                {currentIndex == 6 && <Page6 onBackButton={handleBackButton6} onNextButton={handleNextButton6} />}
                                {currentIndex == 7 && <Page7 onBackButton={handleBackButton7} onNextButton={handleNextButton7} />}
                                {currentIndex == 8 && <Page8 onBackButton={handleBackButton8} onNextButton={handleNextButton8} />}
                                {currentIndex == 9 && <Page9 onBackButton={handleBackButton9} onNextButton={handleNextButton9} />}
                                {currentIndex == 10 && <Page10 onBackButton={handleBackButton10} onNextButton={handleNextButton10} />}
                                {currentIndex == 11 && <Page11 onBackButton={handleBackButton11} onSubmitButton={handleSubmitbutton} onActionButton={() => { }} />}

                          

                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView >


        </>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 1,
        borderColor: colors.borderColor,
        borderRadius: 10,
        marginTop: 20,

    },
    part1: {
        flex: 1,
        backgroundColor: colors.primary,
        zIndex: 2,
    },
    pagestyle: {
        fontSize: 15,
        fontWeight: '500',
        color: colors.white,
    },
    uploadView: {
        height: 60,
        backgroundColor:
            colors.borderColor,
        marginTop: 10, justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.borderColor,
        borderRadius: 5,
    },
    uploadBtn: {
        marginLeft: 10,
        height: 35,
        width: 70,
        backgroundColor: colors.borderColor, justifyContent: 'center', alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.borderColor,
        borderRadius: 5,
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
    tab: {
        borderWidth: 1,
        borderColor: colors.borderColor,
        borderRadius: 5,
        height: 36,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        marginHorizontal: 5,
    },
    header: {
        flexDirection: 'row',
        backgroundColor: 'orange',

    },
    imagelogo1: {
        height: 36,
        width: 89,
        resizeMode: 'contain'
    },
    imagelogo: {
        height: 106,
        width: 70,
        resizeMode: 'contain',
    },
    titleText: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.black,
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
    checkboxWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        width: '50%'
    },
})
export default HomeScreen;