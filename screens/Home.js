import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions,
    Linking,
    Button,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';
import {Navigation} from 'react-native-navigation'
import {Header} from "react-native-elements";



const {width} = Dimensions.get('window');
export default class Home extends Component<Props> {
    goToScreen = (screenName) => {
        Navigation.push(this.props.componentId, {
            component: {
                name: screenName
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
                    centerComponent={{ text: 'Home Page', style: { color: '#000000',fontSize:30,fontFamily:'IndieFlower' } }}
                    backgroundColor='#303060'
                />
                <ScrollView>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>Title Test #1 </Text>
                        <View style={styles.viewLink}>
                            <Text style={styles.textLink}
                                  onPress={() => Linking.openURL('')}>
                                #Tag1
                            </Text>
                            <Text style={styles.textLink}
                                  onPress={() => Linking.openURL('')}>
                                #Tag2
                            </Text>
                        </View>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.</Text>
                    </View>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>Title Test #2 </Text>
                        <View style={styles.viewLink}>
                            <Text style={styles.textLink}
                                  onPress={() => Linking.openURL('')}>
                                #Tag1
                            </Text>
                            <Text style={styles.textLink}
                                  onPress={() => Linking.openURL('')}>
                                #Tag2
                            </Text>
                        </View>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.</Text>
                    </View>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>Title Test #3 </Text>
                        <View style={styles.viewLink}>
                            <Text style={styles.textLink}
                                  onPress={() => Linking.openURL('')}>
                                #Tag1
                            </Text>
                            <Text style={styles.textLink}
                                  onPress={() => Linking.openURL('')}>
                                #Tag2
                            </Text>
                        </View>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.</Text>
                    </View>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>Title Test #4 </Text>
                        <View style={styles.viewLink}>
                            <Text style={styles.textLink}
                                  onPress={() => Linking.openURL('')}>
                                #Tag1
                            </Text>
                            <Text style={styles.textLink}
                                  onPress={() => Linking.openURL('')}>
                                #Tag2
                            </Text>
                        </View>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.</Text>
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.titleText}> Get to know your ranking result</Text>
                        <TouchableOpacity style={styles.buttonFooter} onPress={() => this.goToScreen
                        ('Results')}><Text>Check!</Text></TouchableOpacity>
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
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily:'Righteous-Regular'
    },
    textLink: {
        color: '#3c6eff',
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
