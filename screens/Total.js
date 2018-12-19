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
import SQLite from 'react-native-sqlite-storage'
import {Header} from "react-native-elements";

const {width} = Dimensions.get('window');
let date = new Date(Date.now());
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let dateToday = year + '-' + month + '-' + day;

export default class Total extends Component {
    constructor() {
        super();
    }

    saveData(nickName, score, total, type, date) {
        fetch('https://pwsz-quiz-api.herokuapp.com/api/result', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nick: nickName,
                score: score,
                total: total,
                type: type,
                date: date,
            }),
        });
        Navigation.push(this.props.componentId, {
            component: {
                name: 'Home',
            }
        })
    }
    openDrawer = () =>{
        Navigation.mergeOptions('drawerId',{
            sideMenu:{
                left:{
                    visible: true
                }
            }
        });
    };

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
                <View style={{alignItems: 'center',margin:40}}>
                    <Image style={{width: 160, height: 160,}}
                           source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                    <Text style={styles.text}>{this.props.testName}</Text>
                    <Text style={styles.text}>Nick: {this.props.nick}</Text>
                    <Text style={styles.text}>Zdobytych punktów {this.props.scoreTest} na {this.props.lengthTest}</Text>

                    <TouchableOpacity style={styles.button}
                                      onPress={() => this.saveData(this.props.nick, this.props.scoreTest, this.props.lengthTest, this.props.testName, dateToday)}>
                        <Text style={{color:'#FFFFFF'}}>Zapisz wynik</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4f5ca5',
    },
    button: {
        width: 150,
        height: 50,
        marginTop: 20,
        borderWidth: 0.5,
        borderRadius: 30,
        borderColor: '#000000',
        backgroundColor: '#366d47',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        color:'#FFFFFF',
        fontSize: 20,
        fontFamily: 'Righteous-Regular',
    }


});
