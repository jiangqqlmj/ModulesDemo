/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ToastAndroid,
} from 'react-native';
var { NativeModules } = require('react-native');
class CustomButton extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#a5a5a5"
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}
//onPress={()=>NativeModules.ToastCustomAndroid.show("我是ToastCustomAndroid弹出消息",NativeModules.ToastCustomAndroid.SHORT)}
class ModulesDemo extends Component {
  render() {
    return (
      <View>
        <Text style={styles.welcome}>
          自定义弹出Toast消息
        </Text>
        <CustomButton
           text="点击自定义Toast方法"
           onPress={()=>NativeModules.ToastCustomAndroid.show("我是ToastCustomAndroid弹出消息",NativeModules.ToastCustomAndroid.SHORT)}
        />
        <CustomButton 
          text="点击测试封装方法"
          onPress={()=>NativeModules.ToastCustomAndroid.measureLayout((msg) => {
                    console.log(msg);
                  },
                   (x, y, width, height) => {
                    console.log(x + '坐标,' + y + '坐标,' + width + '宽,' + height+'高');
                  })}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
   button: {
    margin:5,
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#cdcdcd',
  },
});

AppRegistry.registerComponent('ModulesDemo', () => ModulesDemo);
