import React, { useState } from 'react';
import { View } from 'react-native';
import DropDownPicker
    from 'react-native-dropdown-picker';
const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
];
const [TypeOfitems, setTypeItems] = useState([
    { label: 'Building and pest', value: 'Building and pest' },
    { label: 'Building, pest & electrical', value: 'Building, pest & electrical' },
    { label: 'Building, pest, electrical and thermal imaging', value: 'Building, pest, electrical and thermal imaging' },
    { label: 'Building only', value: 'Building only' },
    { label: 'Pest only', value: 'Pest only' },
    { label: 'Electrical only', value: 'Electrical only' },
    { label: 'Specialised inspection', value: 'Specialised inspection' },
]);
const [Open, setOpen] = useState(false);
const [Value, setValue] = useState(null);

const DropDownPicker = (props) => {



    return (
        <DropDownPicker
            listMode='SCROLLVIEW'
            dropDownDirection='BOTTOM'
            style={styles.dropDownstyle}
            textStyle={styles.dropDownTextStyle}
            placeholder="Building and pest"
            dropDownContainerStyle={styles.dropDownContainerStyle}
            dropDownMaxHeight={200}
            containerProps={{
                height: Open == true ? 200 : 35,
                marginBottom: Open == true ? 30 : 0,
            }}
            open={Open}
            value={Value}
            items={TypeOfitems}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setTypeItems}
        //onOpen={onTypeOfInspection}
        />
    );
}

export default DropDownPicker;