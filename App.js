import React, {Component} from 'react'
import {
    AsyncStorage,
    Text,
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Image,
    ScrollView
} from 'react-native'
import {Navigation} from "react-native-navigation";
import SQLite from "react-native-sqlite-storage";

const {width} = Dimensions.get('window');
var db = SQLite.openDatabase({name: 'test.db', createFromLocation: '~www/test.db'});
const date = new Date(Date.now());
export default class App extends Component {
    constructor(props) {
        super(props);
        this.dDay=0;
        this.dMonth= 0;
        this.dYear=0;
        this.state = {
            nickName: '',
            wynik: [],
            testData: [],



        }

    }

    async componentDidMount() {
        let tDay = date.getDate();
        let tMonth = date.getMonth() + 1;
        let tYear = date.getFullYear();
        if (tDay !== this.dDay || tMonth !== this.dMonth || tYear !== this.dYear) {
            this.downloadData();
            this.dDay=tDay;
            this.dMonth= tMonth;
            this.dYear=tYear;
        }
    }

    downloadData = () => {
        db.transaction((tx) => {
            fetch('https://pwsz-quiz-api.herokuapp.com/api/tests')
                .then(response => response.json())
                .then(data => {
                    this.setState({wynik: data});
                    this.addToDatabase(db, data);
                    this.downloadTests();
                })
                .catch(error => console.log(error));
        })

    };


    addToDatabase = (db, data) => {
        db.transaction((tx) => {
            tx.executeSql('DELETE FROM testDetails; ');
            tx.executeSql('DELETE FROM tests;');
            data.map((item, k) => (
                tx.executeSql(`INSERT INTO testDetails (id,name,description,tags,level,numberOfTasks) VALUES 
                  ('${data[k].id}','${data[k].name}','${data[k].description}','${data[k].tags}','${data[k].level}',${data[k].numberOfTasks});`)
            ));
        });

    };

    downloadTests = () => {

        this.state.wynik.map((item, k) => (
            console.log(item.id),
                fetch('https://pwsz-quiz-api.herokuapp.com/api/test/' + item.id)
                    .then(response => response.json())
                    .then(data => {
                        this.setState({testData: data})
                        console.log(data);
                        db.transaction((tx) => {
                            tx.executeSql(`INSERT INTO tests (id,name,description,level,tasks,tags) VALUES 
                  ('${data.id}','${data.name}','${data.description}','${data.level}','${JSON.stringify(data.tasks)}','${JSON.stringify(data.tags)}');`)

                        })
                    })
                    .catch(error => console.log(error))
        ))
    };

    setName = (value) => {
        AsyncStorage.setItem(this.state.nickName, value);
        this.setState({nickName: value});

    }
    goToScreen = (screenName) => {
        Navigation.setStackRoot('MAIN_STACK', {
            component: {
                name: screenName,
                passProps: {
                    nick: this.state.nickName,
                },
            }
        })
    };

    render() {
        console.log(this.state.dDay);
        console.log(this.state.dMonth);
        console.log(this.state.dYear);
        return (
            <View style={styles.container}>
                <Image style={{width: 160, height: 160}}
                       source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                <Text style={{fontSize: 30, fontFamily: 'Righteous-Regular',color:'#FFFFFF'}}>Podaj swój nick</Text>
                <TextInput style={styles.textInput} autoCapitalize='none'
                           onChangeText={this.setName}/>
                <Text style={{fontSize: 30, fontFamily: 'IndieFlower', color:'#FFFFFF'}}>Witamy: {this.state.nickName}</Text>
                <TouchableOpacity style={styles.buttons}
                                  onPress={() => this.goToScreen('Home')}>
                    <Text style={styles.textColor}>Zatwierdź</Text>
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
    textColor: {
        color: '#FFFFFF',
    }
});