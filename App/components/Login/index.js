import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import {increment, decrement, reset} from './action.js'
import ButtonComponent, {RectangleButton} from 'react-native-button-component';

class Login extends Component {
    constructor(props){
        super(props);
        this.handleIncrement = this.handleIncrement.bind(this)
        this.handleDecrement = this.handleDecrement.bind(this)
        this.reset = this.handleReset.bind(this)
    }

    handleIncrement() {
        this.props.increment(this.props.number)
    }

    handleDecrement(){
        this.props.decrement(this.props.number)
    }

    handleReset(){
        this.props.reset()
    }
    
    render() {
        return (
            <View style={{ height: '100%'}}>
                <Image style={{ width: '100%', height: '100%'}} source={require('../../images/bg_login.png')}>
                    <View style={styles.subcontainer}>
                        <Text style={styles.titleLogin}>
                            {this.props.number}
                        </Text>
                        <Text style={styles.titleLogin}>
                            { this.props.text }
                        </Text>
                        <TextInput editable={true} placeholder='Username...' style={styles.textinput} underlineColorAndroid='transparent' 
                            placeholderTextColor='#ffffff'/>
                        <TextInput editable={true} placeholder='Password...' style={styles.textinput} underlineColorAndroid='transparent' 
                            placeholderTextColor='#ffffff' secureTextEntry={true}/>

                        <ButtonComponent style={styles.btnComponent} text="LOGIN" shape='rectangle' width={'80%'} 
                            backgroundColors={['#F1404B', '#F1404B']} type='primary' onPress={this.handleIncrement}>
                        </ButtonComponent>
                        <ButtonComponent style={styles.btnComponent} text="CREATE ACCOUNT" shape='rectangle' width={'80%'} 
                            backgroundColors={['#0072BC', '#0072BC']} type='primary' onPress={this.handleDecrement}>
                        </ButtonComponent>
                    </View>
                </Image>
            </View>
        );
    }
}

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
})


function mapStateToProps(state) {
	return {
        text: state.counter.text,
        number: state.counter.number
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
        {
            increment: increment, 
            decrement: decrement,
            reset: reset
        }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)