/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';

const {width} = Dimensions.get('window');

export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    marginBottom: 60,
                    alignItems: 'flex-start'
                }}>
                    <Text style={{fontSize: 20}}>Question 3 of 10</Text>
                    <Text style={{fontSize: 20}}>Time: 28 sec</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center', margin: 15}}>
                    <Text style={{fontSize: 20}}>This is some example of a long question to fill the content?</Text>
                </View>
                <Text style={{margin: 15}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.</Text>
                <View style={styles.viewButtons}>
                    <TouchableOpacity style={styles.answerButton} onPress={() => this.goToScreen
                    ('App')}><Text>Answer A</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.answerButton} onPress={() => this.goToScreen
                    ('App')}><Text>Answer B</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.answerButton} onPress={() => this.goToScreen
                    ('App')}><Text>Answer C</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.answerButton} onPress={() => this.goToScreen
                    ('App')}><Text>Answer D</Text></TouchableOpacity>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#F5FCFF',
    },
    viewButtons:{
        flex: 1,
        marginTop: 30,
        paddingVertical: 10,
        borderWidth: 0.5,
        width: width - 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    answerButton: {
        width: 150,
        height: 50,
        marginHorizontal: 8,
        marginTop:40,
        marginBottom:20,
        borderWidth: 0.5,
        borderRadius: 4,
        borderColor: '#000000',
        backgroundColor: '#D4D4D4',
        justifyContent: 'center',
        alignItems: 'center',


    }

});
