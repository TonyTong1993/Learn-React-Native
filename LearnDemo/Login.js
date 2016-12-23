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
      	<View style={[styles.input,styles.marginTop]}>
      	<TextInput style={[styles.input,styles.center,styles.textCenter]}
      				placeholder = 'QQ号/手机号/邮箱'
      	>
      	</TextInput>
      	</View>
      	<View style={[styles.input]}>
      		<TextInput style={[styles.input,styles.center,styles.textCenter]}
      		placeholder     = '密码'
      		>
      		</TextInput>
      	</View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
container:{
	flex:1,
	paddingTop:64,
},
center:{
	justifyContent: 'center',
  alignItems: 'center',
},
fontSize:{
	fontSize:20,
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
},
marginTop:{
	marginTop:10,
},
textCenter:{
  textAlign:'center',
},
});


module.exports = Login;