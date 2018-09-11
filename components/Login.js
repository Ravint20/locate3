import React,{Component} from 'react';
import {View,Text,Button,StyleSheet,TextInput} from 'react-native';
import {bindActionCreators} from "redux";
import * as Actions from "./action/index";
import {connect} from 'react-redux';

 class Login extends Component {
    constructor(props) {
 
        super(props)
     
        this.state = {
     
          Name: '',
          password:"",   
          
        }
     
      }

      
      InsertDataToServer = () =>{
     
     
     const { Name }  = this.state ;
     const {password} =this.state;
     
     
     
     
    fetch('API', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
     
        name:Name,
        password:password,
     
             
     
      })
     
    }).then((response) => response.json())
          .then((responseJson) => {
           
    
            Alert.alert(responseJson);
     
          }).catch((error) => {
            console.error(error);
          });
     
        
      }

render(){


    return(

         <View style={styles.container}>
         <View style={styles.Name}>
         <TextInput placeholder="Enter Name"  underlineColorAndroid='transparent' onChangeText={Name => this.setState({Name})}/>
         </View>
         <View style={styles.password}>
         <TextInput placeholder="Enter Password" secureTextEntry={true} underlineColorAndroid='transparent' onChangeText={password => this.setState({password})}/>
         </View>
         <View style={styles.login}>
         <Button title="Login" onPress={()=> this.props.navigation.navigate("Home")} />
        
         </View>
         </View>
 
  
    )


}


}

const styles=StyleSheet.create({

       container:{
         position:"absolute",
         justifyContent:"center",
         width:"100%",
      height:"100%"     
      
       },

       Name:{
         
        borderWidth:2,
    width:"75%",
    left:"15%",
    paddingHorizontal:"5%"

   
       },
   
       password:{
        

          
    borderWidth:2,
    width:"75%",
    left:"15%",
    marginTop:"6%",  
    paddingHorizontal:"5%",   
   


       },  

       login:{

        width:"50%",
 
        marginTop:"6%",
       borderRadius:5,

       left:"25%" 
       }



})



function mapStateToProps(state, props) {
    return {
    //loading: state.getProjectsReducer.loading,
    //projects: state.getProjectsReducer.projects
    }
    }
    
    function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(Login);