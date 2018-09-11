import React,{Component} from "react";
import {Text,StyleSheet,View,TextInput,Picker,Modal,TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
 
export default class Triangle extends Component {


render(){


    return(
 
    <View style={styles.triangle}>
       
       <TouchableOpacity onPress={() =>{console.log("this is temperature")}} >

       < Icon reverse={true} name='triangle-down'    size={50}  color="#FF9900"   />  
        
       </TouchableOpacity>   
    
    </View>

    )
} 

}


const styles=StyleSheet.create({
   
    triangle:{
        
        alignItems:"flex-end" ,    
        position:"absolute",
        right:15, 
        paddingBottom:7  
             
            
       
        
    }

})

