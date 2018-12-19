import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Dimensions, Linking, Button, TouchableOpacity, SafeAreaView} from 'react-native';
import {Navigation} from 'react-native-navigation'
import {Header} from "react-native-elements";
import SQLite from "react-native-sqlite-storage";



const {width} = Dimensions.get('window');
var db = SQLite.openDatabase({name: 'test.db', createFromLocation: '~www/test.db'});
export default class Home extends Component<Props> {
    constructor(props){
        super(props);
        this.state = {
            description: [],
        }
        db.transaction((tx)=>{
            tx.executeSql('SELECT * FROM testDetails',[],(tx,results)=>{
                console.log("Query completed");
                var tab=[];
                var len = results.rows.length;
                for (let i =0; i<len;i++) {
                    tab[i] = results.rows.item(i);
                }
                this.setState({description:tab});

            })
        })
    }

    goToScreen = (screenName,id) => {
        Navigation.push(this.props.componentId, {
            component: {
                name: screenName,
                passProps: {
                    nick: this.props.nick,
                    testId: id,
                },
            }
        })
    };
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
            <View style={styles.container}>
                <Header
                    leftComponent={{
                        icon: 'menu',
                        color: '#D4D4D4',
                        onPress: () => this.openDrawer(),
                    }}
                    centerComponent={{ text: 'Home Page', style: { color: '#FFFFFF',fontSize:30,fontFamily:'IndieFlower' } }}
                    backgroundColor='#303060'
                />
                <ScrollView>
                    {
                      this.state.description.map((item,k)=>(
                          <TouchableOpacity key={k} style={styles.title} onPress={()=>this.goToScreen('Test',item.id)}>
                              <Text style={styles.titleText}>{item.name}</Text>
                              <View style={styles.viewLink}>
                                  <Text  style={styles.textLink}>{item.tags}</Text>
                              </View>
                              <Text style={{color:'#c5c5c5'}}>{item.description}</Text>

                          </TouchableOpacity>
                      ))

                    }
                    <View style={styles.footer}>
                        <Text style={styles.titleText}> Get to know your ranking result</Text>
                        <TouchableOpacity style={styles.buttonFooter} onPress={() => this.goToScreen
                        ('Results')}><Text style={{color:'#FFFFFF'}}>Check!</Text></TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4f5ca5',
    },
    title: {
        marginHorizontal: 10,
        marginTop: 30,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderWidth: 0.5,
        width: width - 20,
        borderColor: '#e5e5e5'
    },
    titleText: {
        color:'#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily:'Righteous-Regular'
    },
    textLink: {
        color: '#a2bfff',
        textDecorationLine: 'underline',
        marginRight: 3,
    },
    viewLink: {
        flexDirection: 'row',
        marginVertical: 20
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        width: width,
        marginTop: 30,
        padding: 15,
    },
    buttonFooter:{
        width: 150,
        height: 50,
        marginTop:20,
        borderWidth: 0.5,
        borderRadius: 30,
        borderColor: '#000000',
        backgroundColor: '#366d47',
        justifyContent: 'center',
        alignItems: 'center',

    }


});
