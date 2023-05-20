import React from 'react';
import { SafeAreaView,  } from 'react-native-safe-area-context';
import { StyleSheet, StatusBar, View,ImageBackground,Image, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { useNetInfo } from "@react-native-community/netinfo";
import {
   viewStyleType,wp,hp, messageList,internet,launcher
} from '../../utils';
import { useSelector } from 'react-redux';
import { Column, Text, Row } from '../../components'
import { lang } from 'moment';
const Container = ({
  children,
  centerAlignItems,
  style,
  image,
  whiteStatusbar,
  ...props
}) => 
{
const preference = useSelector(state => state.userPref);
const { theme, language } = preference
const netInfo = useNetInfo();
const allLanguage = useSelector(state => state.allLanguage);
 const messages=Object.keys(allLanguage).length!==0?allLanguage:messageList
return(
  
  <>
<StatusBar backgroundColor = {"#ffffff"}  barStyle = {whiteStatusbar?"dark-content":"light-content"}/>

{netInfo?.isConnected && netInfo?.isInternetReachable?
<ImageBackground source={image} style={[styles.container, {backgroundColor:"#ffffff"}]}>
{children}
</ImageBackground>:
!netInfo?.isConnected && !netInfo?.isInternetReachable&&
 <View style={[styles.alignCenter,{ backgroundColor: "#ffffff", flex:1 }]}>
   <Image style={{height:hp(20),width:hp(20)}} resizeMode='center'
   source={launcher}
   />      
   <View style={{paddingTop:15}}>
      <Text  
      centerAlign
        type='hs1'
        color='#000000'>
        {messages[language]?.internet}
      </Text>
      </View>
    </View>
 } 

  </>

);};
Container.propTypes = {
  style: viewStyleType,
  children: PropTypes.node,
  centerAlignItems: PropTypes.bool,
  whiteStatusbar : PropTypes.bool
};

Container.defaultProps = {
  style: {},
  children: null,
  centerAlignItems: false,
  whiteStatusbar : true
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
   
    marginTop:Platform.OS==="ios" ? -10 : -20

  },
  alignCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Container;
