import React, {Component} from 'react'
import {AsyncStorage, Text, View, TextInput, StyleSheet, TouchableOpacity, Dimensions, Image, ScrollView} from 'react-native'
import {Navigation} from "react-native-navigation";
import SQLite from "react-native-sqlite-storage";

const {width} = Dimensions.get('window');
var db = SQLite.openDatabase({name: 'test.db', createFromLocation: '~www/test.db'});

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'name': '',
            wynik: []
        }

    }
    async componentDidMount(){
        this.downloadData()
    }

    downloadData = () => {
        db.transaction((tx)=>{
            fetch('https://pwsz-quiz-api.herokuapp.com/api/tests')
                .then(response => response.json())
                .then(data => {
                    this.setState({wynik: data});
                    this.addToDatabase(db,data);
                })
                .catch(error => console.log(error));
        })

    }
    addToDatabase = (db,data) => {
        db.transaction((tx)=>{
            tx.executeSql('DELETE FROM testDetails; DELETE FROM tests;');
            data.map((item,k)=>(
                tx.executeSql(`INSERT INTO testDetails (id,name,description,tags,level,numberOfTasks) VALUES 
                  ('${data[k].id}','${data[k].name}','${data[k].description}','${data[k].tags}','${data[k].level}',${data[k].numberOfTasks});`)
            ));
        });

    };
    setName = (value) => {
        AsyncStorage.setItem('name', value);
        this.setState({'name': value});
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
                <Image style={{width: 160, height: 160}}
                       source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                <Text style={{fontSize: 30, fontFamily: 'Righteous-Regular'}}>Podaj swój nick</Text>
                <TextInput style={styles.textInput} autoCapitalize='none'
                           onChangeText={this.setName}/>
                <Text style={{fontSize: 30, fontFamily: 'IndieFlower'}}>Witamy: {this.state.name}</Text>
                <TouchableOpacity style={styles.buttons}
                                  onPress={() => this.goToScreen('Home')}>
                    <Text>Zatwierdź</Text>
                </TouchableOpacity>


            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
        backgroundColor: '#4f5ca5'
    },
    textInput: {
        margin: 5,
        height: 50,
        width: width,
        borderWidth: 1,
        backgroundColor: '#a2a3a5'
    },
    buttons: {
        width: width,
        height: 50,
        marginTop: 20,
        borderWidth: 0.5,
        borderRadius: 30,
        borderColor: '#000000',
        backgroundColor: '#366d47',
        justifyContent: 'center',
        alignItems: 'center',

    },
});