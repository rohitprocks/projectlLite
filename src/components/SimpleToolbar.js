import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import Colors from '../utils/colors';
import StringUtils from '../utils/strings';



const SimpleToolbar = ({ title }) => {
    return (
        <View style={{width:'100%', height:100}}>
        
             <View style={{height:100,justifyContent:'center'}}>
                <Text style={localStyles.textViewContainer}>{title}</Text>
          </View>
          </View>
         
      )
}
const localStyles = StyleSheet.create({
    
  
    backIconContainer:{
      height:'30%',
      width: '70%',
      height: 25,
      resizeMode:'contain',
    },
    
    textViewContainer: {
        alignSelf:'center', 
        marginTop:25,
        fontSize:23, 
        color:Colors.white
    },
  })
  export { SimpleToolbar };
  