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

const {width} = Dimensions.get('window');
var db = SQLite.openDatabase({name: 'test.db', createFromLocation: '1'});


export default class Baza extends Component {
    constructor(props) {
        super(props);

        this.state = {
            question: "",
            test: [],
            task: [],
        };

        db.transaction((tx) => {
            tx.executeSql(`SELECT * FROM tests WHERE id = '5c05d64f2404232b3bc09a84'`, [], (tx, results) => {
                console.log("Query completed");
                var tab = [];
                var len = results.rows.length;
                for (let i = 0; i < len; i++) {
                    console.log(results.rows.item(i))
                    tab[i] = results.rows.item(i);
                }
                console.log(tab);
                this.setState({test: tab});

            })

        });
        console.log('START !!!!!!!!!');
        console.log(this.state.test);
        console.log('STOP !!!!!!!!!');
    }




    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.test && this.state.test['level']}</Text>
                {this.state.test.map((item, k) => (
                    <View key={k} style={{flexWrap: 'wrap',}}>
                        <View>
                            <Text style={{color: '#FFFFFF'}}>{item.id}</Text>
                        </View>
                        <View>
                            <Text style={{color: '#FFFF00'}}>{item.name}</Text>
                        </View>
                        <View>
                            <Text style={{color: '#FF00FF'}}>{item.description}</Text>
                        </View>
                        <View>
                            <Text style={{color: '#00FFFF'}}>{item.tags}</Text>
                        </View>
                        <View>
                            <Text style={{color: '#00FF00'}}>{item.level}</Text>
                        </View>
                        <View>
                            <Text style={{color: '#AAFF00'}}>{JSON.parse(item.tasks)[1].question}</Text>
                        </View>

                    </View>
                ))}
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
