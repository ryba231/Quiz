/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import {Header} from "react-native-elements";

const {width} = Dimensions.get('window');

export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Header
                    leftComponent={{
                        icon: 'menu',
                        color: '#D4D4D4',
                        onPress: () => alert('ea'),
                    }}
                    centerComponent={{text: 'Test #1', style: {color: '#000000', fontSize: 20,}}}
                    backgroundColor='#FFFFFF'
                />
                <View style={{padding: 10}}>
                    <View style={{justifyContent: 'space-between', flexDirection: 'row', marginBottom: 60, alignItems: 'flex-start'}}>
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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    viewButtons: {
        marginTop: 30,
        paddingVertical: 10,
        width: width - 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderWidth: 0.5,

    },
    answerButton: {
        width: 150,
        height: 50,
        marginHorizontal: 8,
        marginTop: 40,
        marginBottom: 20,
        borderWidth: 0.5,
        borderRadius: 4,
        borderColor: '#000000',
        backgroundColor: '#D4D4D4',
        justifyContent: 'center',
        alignItems: 'center',


    }

});
