/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React,{
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
///进行导入NativeModules中的CalendarManger模块
import { NativeModules } from 'react-native';
var CalendarManager = NativeModules.CalendarManager;
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
class ModulesDemo extends Component {
  render() {
    return (
      <View style={{marginTop:20}}>
        <Text style={styles.welcome}>
            封装iOS原生模块实例
        </Text>
        <CustomButton text="点击调用原生模块addEvent方法"
            onPress={()=>CalendarManager.addEvent('生日聚会', '江苏南通 中天路')}
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
    padding: 10,
    borderWidth:1,
    borderColor: '#cdcdcd',
  },
});
AppRegistry.registerComponent('ModulesDemo', () => ModulesDemo);
