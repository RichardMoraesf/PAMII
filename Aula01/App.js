import React from "react";
import { View, Text, Image, ScrollView, TextInput } from "react-native";
import  image from './assets/img/Resident.jpg'

const Pokemon = () => {
  return(
    <ScrollView>
      <View>
        <text 
        style={{
          fontSize: 45,
          alignSelf: "center",
          color: "green",
        }}
        >
          Resident Evil 4 Remake
        </text>
        <Image
            source={{uri:image,}}
            style={{ width: 200, height: 210, alignSelf: 'center'}}
            />
      </View> 
      <TextInput
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 5,
        margin: 15,
      }}
      />
    </ScrollView>
  );
}
export default Pokemon;
