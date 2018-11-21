/** @format */

/*
import {Navigation} from "react-native-navigation";


Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: "navigation.playground.WelcomeScreen"
            }
        }
    });
});
*/
import App from './App';
import {Dimensions}from 'react-native'
import {Navigation} from 'react-native-navigation'
import Welcome from './screens/Welcome'
import Home from './screens/Home'
import Results from './screens/Results'
import Test from './screens/Test'


Navigation.registerComponent('Welcome', () => Welcome);
Navigation.registerComponent('Results',()=> Results);
Navigation.registerComponent('Home',()=>Home);
Navigation.registerComponent('Test',()=>Test);
Navigation.registerComponent('App',()=>App);



const { width } = Dimensions.get('window');
Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setDefaultOptions({

    });
    Navigation.setRoot({
        root: {
            sideMenu: {
                left: {
                    component: {
                        id: 'drawerId',
                        name: 'Welcome',
                        fixedWidth: width
                    }
                },
                center: {
                    stack: {
                        id: 'MAIN_STACK',
                        children: [
                            {
                                component: {
                                    name: 'Home',
                                }
                            },
                        ]
                    }
                }
            },
        }
    });
});
