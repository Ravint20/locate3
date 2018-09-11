import React from 'react';
import { StyleSheet, Text, View,TextInput,Platform,StatusBar,KeyboardAvoidingView} from 'react-native';
import { Constants } from 'expo';

import Map from './components/Map';

import PickerSelect from './components/Picker';
import Container from './components/Container';
import Input from './components/Input';
import {createStackNavigator} from 'react-navigation';
import Home from './components/Home';
import AddItem from './components/AddItem';
import {Provider} from 'react-redux';
import store from './components/store/index';
import Login from "./components/Login";


  export default   class App extends React.Component {

    constructor(props){

      super(props);

    }
  render() {
    
    return (  
      
      <KeyboardAvoidingView style={styles.container}
      
      behavior="padding">

        <Provider store={store}>
          <Navigator />   
       </Provider>

        

     </KeyboardAvoidingView>
      
    )
  }
}

const styles = StyleSheet.create({

  container: {
   flex:1,
   justifyContent:"center",
          

  },

         



});

const Navigator =createStackNavigator({
  Login:{screen:Login},
  Home:{screen:Home,},
  AddItem:{screen:AddItem},
 
},

{
 headerMode:'none',
},


)
