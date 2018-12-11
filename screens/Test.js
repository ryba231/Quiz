/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import {Header} from "react-native-elements";

const {width} = Dimensions.get('window');
let arrnew = [];
const jsonData = {
    "quiz": {
        "question1": {
            "correct": "option3",
            "options": {
                "option1": "3",
                "option2": "5",
                "option3": "4",
                "option4": "2"
            },
            "question": "2 + 2 = "
        },
        "question2": {
            "correct": "option4",
            "options": {
                "option1": "2",
                "option2": "1",
                "option3": "5",
                "option4": "0"
            },
            "question": "2 - 2 ="
        },
        "question3": {
            "correct": "option1",
            "options": {
                "option1": "9",
                "option2": "3",
                "option3": "18",
                "option4": "25"
            },
            "question": "3 * 3 ="
        },
        "question4": {
            "correct": "option2",
            "options": {
                "option1": "11",
                "option2": "1",
                "option3": "2",
                "option4": "5"
            },
            "question": "1 * 1 ="
        },
        "question5": {
            "correct": "option3",
            "options": {
                "option1": "1",
                "option2": "3",
                "option3": "2",
                "option4": "12"
            },
            "question": "1 + 1 ="
        }
    }
};

export default class Test extends Component<Props> {
    constructor(props) {
        super(props);
        this.qno = 0;
        this.score = 0;

        const jData = jsonData.quiz;
        arrnew = Object.keys(jData).map(function (i) {
            return jData[i];
        });
        this.state = {
            question: arrnew[this.qno].question,
            options: arrnew[this.qno].options,
            correct: arrnew[this.qno].correct,
            countCheck: 0,
        }

    }

    next() {

        if (this.qno < arrnew.length - 1) {
            this.qno++;

            this.setState({
                countCheck: 0,
                question: arrnew[this.qno].question,
                options: arrnew[this.qno].options,
                correct: arrnew[this.qno].correct,
            })
        } else {
            alert(this.score);
        }
    }

    _answer(answer) {

        if (answer === this.state.correct) {
            const count = this.state.countCheck + 1;
            this.setState({countCheck: count});
            this.setState.score += 1;

        }
    }

    render() {
        let _this = this;
        const currentOptions = this.state.options;
        const options = Object.keys(currentOptions).map(function (i) {
            return (
                <View key={i}>
                    <TouchableOpacity countCheck={_this.state.countCheck}
                                      style={styles.answerButton}
                                      _onPress={() => _this._answer(i)}
                                      onPress={() => _this.next()}>
                        <Text style={{fontSize:20}}>{currentOptions[i]}</Text>
                    </TouchableOpacity>
                </View>
            )

        });

        return (
            <View style={styles.container}>
                <Header
                    leftComponent={{
                        icon: 'menu',
                        color: '#D4D4D4',
                        onPress: () => alert('ea'),
                    }}
                    centerComponent={{text: 'Test #1', style: {color: '#000000', fontSize: 30,fontFamily:'IndieFlower'}}}
                    backgroundColor='#303060'
                />
                <View style={{padding: 10}}>
                    <View style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        marginBottom: 60,
                        alignItems: 'flex-start'
                    }}>
                        <Text style={{fontSize: 20}}>Question {this.qno +1} of 5</Text>
                        <Text style={{fontSize: 20}}>Time: 28 sec</Text>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center', margin: 15}}>
                        <Text style={{fontSize: 20}}>{this.state.question}</Text>
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
        borderRadius: 30,
        borderColor: '#000000',
        backgroundColor: '#8f8f8f',
        justifyContent: 'center',
        alignItems: 'center',



    }

});