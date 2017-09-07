import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import {increment, decrement, reset} from './action.js'

class Counter extends Component {
  // render() {
  //   return (
  //     <View>
  //       <Button
  //         title="Up"
  //         onPress={this.props.increment}/>
  //       <Text
  //         style={styles.counter}
  //         onPress={this.props.reset}>
  //         {this.props.count}
  //       </Text>
  //       <Button
  //         title="Down"
  //         onPress={this.props.decrement}/>
  //     </View>
  //   );
  // }
  render() {
    return (
        <View style={{ height: '100%'}}>
            <Image style={{ width: '100%', height: '100%'}} source={require('../../images/bg_login.png')}>
                <View style={styles.subcontainer}>
                    <Text style={styles.titleLogin}>
                        {this.props.count}
                    </Text>
                    <TextInput editable={true} placeholder='Username...' style={styles.textinput} underlineColorAndroid='transparent' 
                        placeholderTextColor='#ffffff'/>
                    <TextInput editable={true} placeholder='Password...' style={styles.textinput} underlineColorAndroid='transparent' 
                        placeholderTextColor='#ffffff' secureTextEntry={true}/>

                    <ButtonComponent style={styles.btnComponent} text="LOGIN" shape='rectangle' width={'80%'} 
                        backgroundColors={['#F1404B', '#F1404B']} type='primary' onPress={this.props.increment}>
                    </ButtonComponent>
                    <ButtonComponent style={styles.btnComponent} text="CREATE ACCOUNT" shape='rectangle' width={'80%'} backgroundColors={['#0072BC', '#0072BC']} type='primary'></ButtonComponent>
                </View>
            </Image>
        </View>
    )
}
}

// const styles = StyleSheet.create({
//   counter: {
//     padding: 30,
//     alignSelf: 'center',
//     fontSize: 26,
//     fontWeight: 'bold',
//   },
// });

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'stretch',
      backgroundColor: '#F5FCFF'
  },

  subcontainer:  {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
  },

  titleLogin: {
      backgroundColor: 'rgba(255, 255, 255, 0)',
      color: 'white',
      fontSize: 25,
      marginBottom: 50,
  },

  textinput: {
      color: '#ffffff',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderBottomColor: '#ffffff',
      width: '80%',
      bottom: 2,
      height: 40,
      marginBottom: 10,
      textAlign: 'center',
      borderBottomColor: '#ffffff',
      borderBottomWidth: 1
  },

  btnComponent: {
      marginBottom: 10
  }
});

const mapStateToPros = state => ({
    count: state
})

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    reset: () => dispatch(reset()),
})

export default connect(mapStateToPros, mapDispatchToProps)(Counter)