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
var db = SQLite.openDatabase({name: 'test.db', createFromLocation: '1'});


export default class Zagadki extends Component {

    constructor() {
        super();
        this.qno = 0;
        this.score = 0;
        this.testLength = 0;
        this.state = {
            refreshing: false,
            test: [],
            testTasks: [{
                question: '',
                answers: {
                    content: ',',
                    isCorrect: false,
                }
            }],
        };


    }

    componentDidMount() {
        this.downloadFromTheDatabase()
    }


    downloadFromTheDatabase = () => {

        db.transaction((tx) => {
            tx.executeSql(`SELECT *
                           FROM tests
                           WHERE id = '5c05d64f2404232b3bc09a84'`, [], (tx, results) => {
                this.setState({test: results.rows.item(0)});
                this.setState({testTasks: JSON.parse(results.rows.item(0).tasks)});
                this.testLength = JSON.parse(results.rows.item(0).tasks).length;

            })

        });

    };


    next(isCorrect) {
        this.setState({refreshing: true});
        if (this.qno < this.testLength - 1) {
            if (isCorrect) {
                this.score++;
            }
            this.qno++;
        } else {
            if (isCorrect) {
                this.score++;
            }
            Navigation.push('MAIN_STACK', {
                component: {
                    name: 'Total',
                    passProps: {
                        nick:this.props.nick,
                        scoreTest: this.score,
                        lengthTest: this.testLength,
                        testName: this.state.test.name
                    },
                }
            })


        }
        this.setState({refreshing: false});
    }


    render() {
        this.testLength = this.state.testTasks.length;

        let options = [];

        for (let k = 0; k < this.state.testTasks[0].answers.length; k++) {
            options.push(
                <TouchableOpacity key={k} style={styles.answerButton}
                                  onPress={() => this.next(this.state.testTasks[this.qno].answers[k].isCorrect)}>
                    <Text>
                        {this.state.testTasks[this.qno].answers[k].content}
                    </Text>
                </TouchableOpacity>
            );
        }


        return (
            <View style={styles.container}>
                <Header
                    leftComponent={{
                        icon: 'menu',
                        color: '#D4D4D4',
                        onPress: () => this.openDrawer(),
                    }}
                    centerComponent={{
                        text: this.state.test.name,
                        style: {color: '#FFFFFF', fontSize: 30, fontFamily: 'IndieFlower'}
                    }}
                    backgroundColor='#303060'
                />
                <View style={{padding: 10}}>
                    <Text>{this.props.nick}</Text>
                    <Text>{this.props.testId}</Text>
                    <View style={styles.topView}>
                        <Text style={{fontSize: 20}}>Question {this.qno + 1} of {this.testLength}</Text>
                        <Text style={{fontSize: 20}}>Time: {this.state.testTasks[this.qno].duration} sec</Text>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center', margin: 5}}>
                        <Text style={{fontSize: 20}}>{this.state.testTasks[this.qno].question}</Text>
                    </View>

                    <View style={styles.viewButtons}>
                        {options}
                    </View>
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
    viewButtons: {
        marginTop: 20,
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
        borderRadius: 30,
        borderColor: '#000000',
        backgroundColor: '#8f8f8f',
        justifyContent: 'center',
        alignItems: 'center',
    },
    topView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'flex-start'
    }


});
