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
                "option1": "XML",
                "option2": "YML",
                "option3": "HTML",
                "option4": "JSX"
            },
            "question": "____ tag syntax is used in React"
        },
        "question3": {
            "correct": "option1",
            "options": {
                "option1": "Single root DOM node",
                "option2": "Double root DOM node",
                "option3": "Multiple root DOM node",
                "option4": "None of the above"
            },
            "question": "Application built with just React usually have ____"
        },
        "question4": {
            "correct": "option2",
            "options": {
                "option1": "mutable",
                "option2": "immutable",
                "option3": "variable",
                "option4": "none of the above"
            },
            "question": "React elements are ____"
        },
        "question5": {
            "correct": "option3",
            "options": {
                "option1": "functions",
                "option2": "array",
                "option3": "components",
                "option4": "json data"
            },
            "question": "React allows to split UI into independent and reusable pieses of ____"
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
            alert(this.qno);
        }
    }

    _answer(status, answer) {


        if (answer === this.state.correct) {
            const count = this.state.countCheck + 1;
            this.setState({countCheck: count});
            this.setState.score += 1;

        } else {
            const count = this.state.countCheck - 1;
            this.setState({countCheck: count});
            if (this.state.countCheck < 1 || answer === this.state.correct) {
                this.score -= 1;
            }

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
                                      _onPress={(status) => _this._answer(status, i)}
                                      onPress={() => _this.next()}>
                        <Text>{currentOptions[i]}</Text>
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
                    centerComponent={{text: 'Test #1', style: {color: '#000000', fontSize: 20,}}}
                    backgroundColor='#FFFFFF'
                />
                <View style={{padding: 10}}>
                    <View style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        marginBottom: 60,
                        alignItems: 'flex-start'
                    }}>
                        <Text style={{fontSize: 20}}>Question {this.qno + 1} of 5</Text>
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
