import React,{Component} from "react";
import {Text,StyleSheet,View,TextInput,Picker,Modal} from 'react-native';
import {MapView} from "expo";

export default class Map extends Component {

render(){


return(
     
      
     
      


    <MapView 
       style={styles.map}
       initialRegion={{
        latitude: 6.9173,
        longitude: 79.8484,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421 }}

      
    
       
       />

)

}

}

const styles = StyleSheet.create({

    
     
       
    

    map:{
        left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute'
          
       },
     

})
