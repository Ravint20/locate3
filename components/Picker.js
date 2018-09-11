import React,{Component} from "react";
import {Text,StyleSheet,View,TextInput,Picker,Modal,ScrollView} from 'react-native';
import Triangle from './Triangle';


export default class PickerSelect extends Component {

    

       delete(item, url) {
        return fetch(url + '/' + item, {
          method: 'delete'
        })
        .then(response => response.json());
      }


      onValueChange2(){
      
        



      }


    render(){    
      
      const description =[]

      {

        this.state.dataSource.map((y,x) =>{

          description.push(<Picker.Item label={y.ID} key={x} value={y.ID} />,<button title="DELETE" onPress={() => this.delete()} />)

        })

      }
        
 return(

    <ScrollView style={styles.container}> 

    
        
    <Picker  style={{padding:20,width:"100%",backgroundColor:"#434343"}} itemStyle={{paddingHorizontal:20,textAlign:"center"}} mode="dropdown"  
      
      selectedValue={this.state.ID}
      onValueChange={() => this.onValueChange2}>
        
       {description} 

       </Picker> 
       
          
         
 
             
 <Triangle />    

{/*
<Modal visible={true} transparent={true} style={{backgroundColor:"efefef"}} onRequestClose={() => console.log("hi")}></Modal>
*/}
  </ScrollView>       
 
 )}}

 
 const styles=StyleSheet.create({
    container:{
       top:"0%",
       position:'absolute', 
       width:"100%",
       
    },
    picker:{

       
       
        height:20,
         width:"100%",
        padding:10          
          
         
    }
 }) 
