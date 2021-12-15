import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import ReactDOM from 'react-dom'
import { StyleSheet, Text, View, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import {useFonts} from 'expo-font';

let image1 = require('./assets/images/Rectangle_5.svg')




export default function App() {

  

  
  
  const [loaded] = useFonts({
    Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
    Montserrat: require('./assets/fonts/Montserrat-Regular.ttf')
  })

  
  class MenuItem extends React.Component {
    constructor(props) {
      super(props),
      this.state = {name: props.name}
    }
    
    render() {
      return (
        <View style={{left: this.props.left}}>
          <Text style={styles.navbar_item}>{this.props.name}</Text>
        </View>
      )
    }
  }
  class Menu extends React.Component {
    
    render() {
      return (
       <View style={styles.navbar}>
            <MenuItem name="Sobre" left={10}/>
            <MenuItem name="Contato" left={117}/>
            <MenuItem name="Aplicativo" left={230}/>
       </View>
      )
    }
  }

  class Home extends React.Component {
    render() {
      return (
        <View style={styles.home}>
          <Text style={styles.home_content}>
            Novos,
            Seminovos,
            Usados,
            Troque agora
          </Text>
        </View>
      )
    }
  }

  class Carrousel extends React.Component {
    
    render() {
      return (
       
        <View style={styles.carrousel}>

        </View>
      )
    }
  }

  if(!loaded) {
    return null;
  }

 
    return (

      
      <View style={styles.container}>
  
      <Menu/>
      <Home/>
      
  
       
        <StatusBar style="auto" />
  
      </View>
    );
 

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbar: {
    position: 'absolute',
    width: 652,
    height: 73,
    left: 699,
    top: 14,
    backgroundColor: '#ff0000'
  },
  navbar_item: {
    position: 'absolute',
    height: 24,
    top: 22,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
    color: '#000000'
  },
  carrousel: {
    position: 'absolute',
    width: 652,
    height: 973,
    left: 15,
    top: 14,    
  },
  home: {
    position: 'absolute',
    width: 652,
    height: 900,
    left: 699,
    top: 87
  },
  home_content: {
    position: 'absolute',
    width: 421,
    height: 296,
    left: 115,
    top: 111,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 48,
    lineHeight: 70,
    letterSpacing: '0.1em',
    color: '#000000'
  }
});
