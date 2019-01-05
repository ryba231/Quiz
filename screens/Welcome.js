/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, ScrollView, Image} from 'react-native';
import {Navigation} from 'react-native-navigation';


const {width} = Dimensions.get('window');
const idTest = ['5c05d64f2404232b3bc09a84','5c05d64f2404232b3bc09a85','5c05d64f2404232b3bc09a86','5c05d64f2404232b3bc09a87'];

export default class WelcomeScreen extends Component {

    goToScreen = (screenName, id) => {
        Navigation.setStackRoot('MAIN_STACK', {
            component: {
                name: screenName,
                passProps: {
                    testId: id,
                },
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

    shuffleTest=(a)=>{

        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }

        Navigation.setStackRoot('MAIN_STACK', {
            component: {
                name: 'Test',
                passProps: {
                    testId: a[0],
                },
            }
        }),
            Navigation.mergeOptions('drawerId', {
                sideMenu: {
                    left: {
                        visible: false
                    }
                }
            });

    }


    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.views}>
                        <Text style={{
                            fontSize: 40, fontWeight: 'bold',
                            marginBottom: 20, marginLeft: 40, fontFamily: 'Righteous-Regular', color:'#FFFFFF'
                        }}>
                            Quiz App
                        </Text>
                        <Image style={{width: 160, height: 160, marginLeft: 40,}}
                               source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                        <TouchableOpacity style={styles.buttons} onPress={() => this.goToScreen
                        ('Home')}><Text style={styles.textColor}>Home Page</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.buttons} onPress={() => this.goToScreen
                        ('Results')}><Text style={styles.textColor}>Results</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.buttons} onPress={() => this.shuffleTest(idTest)}>
                            <Text style={styles.textColor}>Losowy test</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttons} onPress={() => this.props.downloadTest}>
                            <Text style={styles.textColor}>Pobierz testy</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.views}>
                        <TouchableOpacity style={styles.buttons} onPress={() => this.goToScreen
                        ('Test', '5c05d64f2404232b3bc09a84')}>
                            <Text style={styles.textColor}>Zagadki matematyczne</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttons} onPress={() => this.goToScreen
                        ('Test', '5c05d64f2404232b3bc09a85')}>
                            <Text style={styles.textColor}>Tranzystor bipolarny i polowy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttons} onPress={() => this.goToScreen
                        ('Test', '5c05d64f2404232b3bc09a87')}>
                            <Text style={styles.textColor}>Moda na sukces</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttons} onPress={() => this.goToScreen
                        ('Test', '5c05d64f2404232b3bc09a86')}>
                            <Text style={styles.textColor}>Wodzowie i dowódcy starożytnego Rzymu</Text>
                        </TouchableOpacity>
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
    },
    textColor: {
        color: '#FFFFFF',
    }


});
