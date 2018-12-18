/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import {Navigation} from 'react-native-navigation'
import SQLite from 'react-native-sqlite-storage'
import {Header} from "react-native-elements";

const {width} = Dimensions.get('window');
let date = new Date(Date.now());
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let dateToday = year +'-' + month + '-' + day;

export default class Total extends Component {
    constructor(){
        super();

        /*fetch('https://pwsz-quiz-api.herokuapp.com/api/result', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nick: 'Zbigniew',
                score: 10,
                total:10,
                type:'Zagadki Matematyczne',
                date: dateToday,
            }),
        });*/
    }


    render() {
        return (
            <View style={styles.container}>
                <Header
                    leftComponent={{
                        icon: 'menu',
                        color: '#D4D4D4',
                        onPress: () => this.openDrawer(),
                    }}
                    centerComponent={{
                        text: 'Podsumowanie',
                        style: {color: '#FFFFFF', fontSize: 30, fontFamily: 'IndieFlower'}
                    }}
                    backgroundColor='#303060'
                />

                <Text>{dateToday}</Text>
                <Text>{this.props.testName}</Text>
                <Text>{this.props.lengthTest}</Text>
                <Text>{this.props.scoreTest}</Text>
                <Text>{this.props.nickName}</Text>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4f5ca5',
    },



});
