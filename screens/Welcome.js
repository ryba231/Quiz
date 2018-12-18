/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, ScrollView, Image} from 'react-native';
import {Navigation} from 'react-native-navigation'


const {width} = Dimensions.get('window');

export default class WelcomeScreen extends Component {

    goToScreen = (screenName) => {
        Navigation.setStackRoot('MAIN_STACK', {
            component: {
                name: screenName,
            }
        }),
        Navigation.mergeOptions('drawerId', {
            sideMenu: {
                left: {
                    visible: false
                }
            }
         });
    };


    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.views}>
                        <Text style={{
                            fontSize: 40, fontWeight: 'bold',
                            marginBottom: 20, marginLeft: 40, fontFamily: 'Righteous-Regular'
                        }}>
                            Quiz App
                        </Text>
                        <Image style={{width: 160, height: 160, marginLeft: 40,}}
                               source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                        <TouchableOpacity style={styles.buttons} onPress={() => this.goToScreen
                        ('Home')}><Text>Home Page</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.buttons} onPress={() => this.goToScreen
                        ('Results')}><Text>Results</Text></TouchableOpacity>
                    </View>
                    <View style={styles.views}>
                        <TouchableOpacity style={styles.buttons} onPress={() => this.goToScreen
                        ('Test')}><Text>Zagadki matematyczne</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.buttons} onPress={() => this.goToScreen
                        ('Baza')}><Text>Baza</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.buttons} onPress={() => this.goToScreen
                        ('Test')}><Text>Test #3</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.buttons} onPress={() => this.goToScreen
                        ('Total')}><Text>Test #4</Text></TouchableOpacity>
                    </View>

                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4f5ca5',
    },
    buttons: {
        width: width - 80,
        height: 50,
        marginTop: 20,
        borderWidth: 0.5,
        borderRadius: 30,
        borderColor: '#000000',
        backgroundColor: '#366d47',
        justifyContent: 'center',
        alignItems: 'center',

    },
    views: {
        flex: 1,
        borderWidth: 0.5,
        paddingLeft: 10,
        paddingRight: 80,
        paddingHorizontal: 15,
    }


});
