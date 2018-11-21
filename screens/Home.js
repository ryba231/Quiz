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
    render() {
        return (
            <View style={styles.container}>
                <Header
                    leftComponent={{
                        icon: 'menu',
                        color: '#FFFFFF',
                        onPress: () => alert('ok'),
                    }}
                    centerComponent={{ text: 'Home Page', style: { color: '#000000',fontSize:20 } }}
                    backgroundColor='#FFFFFF'
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
                        ('App')}><Text>Check!</Text></TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
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
        fontWeight: 'bold'
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
        borderRadius: 4,
        borderColor: '#000000',
        backgroundColor: '#D4D4D4',
        justifyContent: 'center',
        alignItems: 'center',
    }


});
