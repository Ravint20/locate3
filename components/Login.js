import React,{Component} from 'react';
import {View,Text,Button,StyleSheet,TextInput} from 'react-native';
import {bindActionCreators} from "redux";
import * as Actions from "./action/index";


export default class Login extends Component {
    constructor(props) {
 
        super(props)
     
        this.state = {
     
          Name: '',
          password:"",
          
        }
     
      }

      cancell(){
      
         this.setState({


             Nmae="",
             password:""

         })


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


    ruturn(

         <View style={styles.container}>

         <TextInput placeholder="Enter Name"  onChangeText={Name => this.setState({Name})}/>
         <TextInput placeholder="Enter Password"  onChangeText={password => this.setState({password})}/>
         <Button title="Login" onPress={()=> this.props.navigation.navigate("Home")} />
        

         </View>


    )


}


}

const styles=StyleSheet.create({

       container:{

        justifyContent:"center",
        alignItems:"center"
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