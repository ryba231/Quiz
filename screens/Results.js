import React, {Component} from 'react';
import {StyleSheet, View, ListView, RefreshControl, Text,ScrollView} from 'react-native';
import {Header} from "react-native-elements";
import {Navigation} from "react-native-navigation";


export default class Results extends Component {
    constructor(props) {
        super(props)
        this.state = {
            wynik: []
        }
        fetch('https://pwsz-quiz-api.herokuapp.com/api/results')
            .then(response => response.json())
            .then(data => {
                this.setState({wynik: data})
            })
            .catch(error => console.log(error));
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
            <View style={{flex: 1, backgroundColor: '#4f5ca5'}}>
                <Header
                    leftComponent={{
                        icon: 'menu',
                        color: '#D4D4D4',
                        onPress: () => this.openDrawer(),
                    }}
                    centerComponent={{
                        text: 'Results',
                        style: {color: '#FFFFFF', fontSize: 30, fontFamily: 'IndieFlower'}
                    }}
                    backgroundColor='#303060'
                />
                <ScrollView>
                    <View style={{flexWrap: 'nowrap',flexDirection: 'row',}}>
                        <View style={styles.listView}>
                            <Text>Nick</Text>
                        </View>
                        <View style={styles.listView}>
                            <Text >Score</Text>
                        </View>
                        <View style={styles.listView}>
                            <Text >Total</Text>
                        </View>
                        <View style={styles.listView}>
                            <Text >Type</Text>
                        </View>
                        <View style={styles.listView}>
                            <Text style={{fontSize: 13}}>Date</Text>
                        </View>
                    </View>
                    {this.state.wynik.map((item, k) => (
                        <View key={k} style={{flexWrap: 'nowrap',flexDirection: 'row',}}>
                            <View style={styles.listView}>
                                <Text>{item.nick}</Text>
                            </View>
                            <View style={styles.listView}>
                                <Text >{item.score}</Text>
                            </View>
                            <View style={styles.listView}>
                                <Text >{item.total}</Text>
                            </View>
                            <View style={styles.listView}>
                                <Text >{item.type}</Text>
                            </View>
                            <View style={styles.listView}>
                                <Text style={{fontSize: 13}}>{item.date}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
        )
    }


}

const styles = StyleSheet.create({

    listView: {
        flex: 1,
        backgroundColor: '#4f5ca5',
        borderColor: '#dddddd',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'nowrap',
        borderWidth: 0.5,

    },
    ramka: {
        borderWidth: 0.5,
        paddingTop: 10,
        height: 50,
        width: 80,
        flexWrap: 'nowrap'
    },
    small: {
        width: 45,
    }

})
