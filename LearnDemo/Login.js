'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Dimensions,
  PixelRatio,
  Button,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
//获取屏幕的尺寸
var screen_width = Dimensions.get('window').width;
class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
      	<Image
      	  style={{height:80,width:80,alignSelf: 'center',borderRadius:40}}
      	  source={{uri: 'http://pic.qiantucdn.com/58pic/13/72/07/55Z58PICKka_1024.jpg'}}
      	/>
      	<TextInput style={[styles.input,styles.center,styles.textCenter,styles.marginTop]}
      				placeholder = 'QQ号/手机号/邮箱'
               clearButtonMode = 'while-editing'
      	>
      	</TextInput>
      		<TextInput style={[styles.input,styles.center,styles.textCenter,styles.lineHeight]}
      		placeholder     = '密码'
          secureTextEntry = {true}
          clearButtonMode = 'while-editing'
      		>
      		</TextInput>
          <TouchableHighlight
            onPress={() =>{
              console.log('login')
            }}
            style={[styles.loginButton,styles.center,styles.alignSelf,styles.marginTop]}
            underlayColor='#4682b4'>
            <Text style={styles.loginTextStyle}>
              登录
            </Text>
          </TouchableHighlight>
          <View style={[styles.assistBox,styles.marginTop]}>
           <TouchableOpacity
                    onPress={() =>{
                       console.log('assistButton clicked');
                    }}
                    style={[styles.assistButton,styles.marginLeft]}
                    activeOpacity={0.5}>
                    <Text style={[styles.assistText]}>
                      忘记密码?
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>{
                       console.log('assistButton clicked');
                    }}
                    style={[styles.assistButton]}
                    activeOpacity={0.5}>
                    <Text style={[styles.assistText]}>
                      新用户注册
                    </Text>
           </TouchableOpacity>
          </View>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
container:{
	flex:1,
	paddingTop:64,
  backgroundColor:'rgb(233,234,239)',
},
center:{
	justifyContent: 'center',
  alignItems: 'center',
},
loginTextStyle:{
	fontSize:20,
  color:'#ffffff',
},
alignSelf:{
	alignSelf:'center',
},
color:{
	color:'red',
},
input:{
	height:44,
	width:screen_width,//屏幕的宽度
	borderBottomWidth:1/PixelRatio.get(),
	borderBottomColor:'gray',
  backgroundColor:'#ffffff'
},
marginTop:{
	marginTop:15,
},
lineHeight:{
  marginTop:2/PixelRatio.get(),
},
textCenter:{
  textAlign:'center',
},
loginButton:{
  width:screen_width-30,
  height:40,
  backgroundColor:'rgb(0,163,234)',
  borderRadius:4,
},
assistBox:{
  width:screen_width,
  height:16,
  flexDirection:'row',
  justifyContent: 'space-around',
},
assistButton:{
  
},
assistText:{
  fontSize:14,
  color:'rgb(0,163,234)'
},
assistLeft:{
  marginLeft:-50,
}
});


module.exports = Login;