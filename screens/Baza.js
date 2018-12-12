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
var db = SQLite.openDatabase({name: 'test.db', createFromLocation: '~www/test.db'});


export default class Baza extends Component {
    constructor(props) {
        super(props);

        this.state={
            question: "",
            test:[]
        };

        db.transaction((tx)=>{
            tx.executeSql('SELECT * FROM test',[],(tx,results)=>{
                console.log("Query completed");
                var tab=[];
                var len = results.rows.length;
                for (let i =0; i<len;i++) {
                    tab[i] = results.rows.item(i);
                }
                this.setState({test:tab});

            })
        })

    }

    goToScreen = (screenName) => {
        Navigation.setStackRoot('MAIN_STACK', {
            component: {
                name: screenName,
            }
        })
    };





    render() {
        return (
            <View style={styles.container}>

               {this.state.test.map((item,k)=>(
                   <View key={k} style={{flexWrap: 'nowrap',flexDirection: 'row',}}>
                       <View>
                           <Text>{item.id}</Text>
                       </View>
                       <View>
                           <Text>{item.question}</Text>
                       </View>
                       <View>
                           <Text>{item.option1}</Text>
                       </View>
                       <View>
                           <Text>{item.option2}</Text>
                       </View>
                       <View>
                           <Text>{item.option3}</Text>
                       </View>
                       <View>
                           <Text>{item.option4}</Text>
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
