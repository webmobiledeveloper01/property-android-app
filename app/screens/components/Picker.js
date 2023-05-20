import React, { useState, useCallback } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity,Image } from 'react-native';
import colors from '../../config/colors';
import DropDownPicker from 'react-native-dropdown-picker';
import Row from './containers/row';
import Column from './containers/column';
import DocumentPicker from 'react-native-document-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { ImagePickerModal } from './ ImagePickerModal';

function Picker({ title, id ,getImagedata}) {
    const [imageuri, setImageuri] = useState("");
    const [showModal, setModal] = useState(false);

    const  selectFile = () => {
      var options = {
        title: 'Select Image',
        customButtons: [
          { 
            name: 'customOptionKey', 
            title: 'Choose file from Custom Option' 
          },
        ],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
      ImagePicker.showImagePicker(options, res => {
        console.log('Response = ', res);
        if (res.didCancel) {
          console.log('User cancelled image picker');
        } else if (res.error) {
          console.log('ImagePicker Error: ', res.error);
        } else if (res.customButton) {
          console.log('User tapped custom button: ', res.customButton);
          alert(res.customButton);
        } else {
          let source = res;
      
        }
      });
    };
    // Launch Camera
    const cameraLaunch = async() => {
      let options = {
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
      const result = await launchCamera(options);
     
      if(result?.assets){
        const response = result?.assets[0]
        const imageData = {
          uri: response.uri,
          type: response.type,
          name: response?.fileName,
          size: response?.size
        }
        getImagedata(imageData)
       setImageuri(imageData)
       setModal(false)
      }

    }
    const imageGalleryLaunch = async() => {
      let options = {
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
      const result = await launchImageLibrary(options);
      if(result?.assets){
        const response = result?.assets[0]
        const imageData = {
          uri: response.uri,
          type: response.type,
          name: response?.fileName,
          size: response?.size
        }
        getImagedata(imageData)
       setImageuri(imageData)
       setModal(false)
      }
    }  




    const uploadImage = async (option) => {
        try {
          let response = await DocumentPicker.pick({
            type: [DocumentPicker.types.images, DocumentPicker.types.pdf],
          });
          var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
          response = response[0]
          var i = parseInt(Math.floor(Math.log(response.size) / Math.log(1024)));
          let size = Math.round(response.size / Math.pow(1024, i), 2) + ' ' + sizes[i];
          let imageName = response.name
      
            const imageData = {
              uri: response.uri,
              type: response.type,
              name: imageName,
              size: size
            }
            getImagedata(imageData)
            setImageuri(imageData)
           
                
        } catch (err) {
          if (DocumentPicker.isCancel(err)) {
          } else {
            throw err;
          }
        }
      }
    
    return (
      <View style={[styles.uploadView,{height:imageuri?120:50}]}>
        <Row >
           <ImagePickerModal
        isVisible={showModal}
        onClose={() => setModal(false)}
        onImageLibraryPress={imageGalleryLaunch}
        onCameraPress={cameraLaunch}
      />
        <Column  noPadding size={12}>
                            <TouchableOpacity
                            onPress={()=>{
                              setModal(true)
                             //   uploadImage()
                            }}
                            >
                                <View style={styles.uploadBtn}>
                                    <Text style={styles.normlText}>Upload</Text>
                                </View>
                               
                            </TouchableOpacity>
        </Column>
        </Row>
        {imageuri!==""&&   
         <Row style={{paddingTop:10}}>     
         <View style={{marginLeft:10}}>       
          <Image style={styles.imageHeight}
          source={{uri:imageuri?.uri}}
          />
          </View>
          {/* <View style={{paddingHorizontal:20}}>
          <Text style={styles.normlText}>Upload</Text>
          </View> */}
          <View  style={{justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
          <TouchableOpacity
         
          onPress={()=>{
            setImageuri("")
          }}
          
          style={{marginLeft:10}}>
          <Image style={{height:15,width:15}} source={require('../../assets/cross.png')} />
          </TouchableOpacity>
          </View>
          </Row>
          }
        </View>
    );
}
const styles = StyleSheet.create({
    uploadView: {
        height: 120,
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
    imageHeight:{
        height:30,
        width:80
    }
})
export default Picker;