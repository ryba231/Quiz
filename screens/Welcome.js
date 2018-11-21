/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {Navigation} from 'react-native-navigation'
import {createDrawerNavigator} from 'react-navigation'
class WelcomeScreen extends Component {

    goToScreen = (screenName) => {
        Navigation.push(this.props.componentId, {
            component: {
                name: screenName
            }
        })
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title='Home' onPress={() => this.goToScreen('Home')}/>
                <Button title='Results' onPress={() => this.goToScreen('Results')}/>
                <Button title='Test' onPress={() => this.goToScreen('Test')}/>


            </View>
        );
    }
}

export default WelcomeScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }

});
