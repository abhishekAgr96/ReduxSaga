import React, { useEffect, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateName } from '../../redux/actions/authActions';

export default () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.authReducer.name);
  const [currentName, updateNameState] = useState('')

  useEffect(() => {
    // dispatch(updateName('abhishek'))
  }, [name]);
  return (
    <View style={{alignItems: 'center'}}>
      <Text>Basic Saga Integration</Text>
      <TextInput 
        style={{borderWidth: 1, margin: 10, width: 100}}
        value={currentName}
        onChangeText={updateNameState}
      />
      <Text >{name}</Text>
      <Text onPress={()=>{
         dispatch(updateName(currentName))
      }} style={{backgroundColor: 'blue'}}>Update your name</Text>
    </View>
  )
}