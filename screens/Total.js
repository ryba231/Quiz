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



export default class Total extends Component {


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
