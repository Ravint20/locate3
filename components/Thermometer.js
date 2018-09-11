import React,{Component} from "react";
import {Text,StyleSheet,View,TextInput,Picker,Modal,TouchableOpacity,Dimensions} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
 
export default class Thermometer extends Component {


render(){


    return(
 
    <View style={styles.thermo}>
       
       <TouchableOpacity onPress={() =>{console.log("this is temperature")}} 
        style = {{
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 4,
        width: Dimensions.get('window').width * 0.15,
        height: Dimensions.get('window').width * 0.15,
        backgroundColor:'#434343',
        justifyContent: 'center',  
        alignItems: 'center',
        opacity:0.4,
        left:"42%",
        bottom:0 ,
        position:"absolute",
        borderColor:"#434343",
        borderWidth:1.5,
       
      }}
      underlayColor = '#ccc'>

       < Icon reverse={true} name='thermometer-3'    size={30}  color="red"   />  
        
       </TouchableOpacity>   
    
    </View>

    )
}

}


const styles=StyleSheet.create({

    thermo:{
        
       paddingBottom:"11%",          
        alignItems:"center" ,  
        
        
    }

})

   
