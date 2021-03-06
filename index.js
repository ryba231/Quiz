/** @format */

import App from './App';
import {Dimensions}from 'react-native'
import {Navigation} from 'react-native-navigation'
import Welcome from './screens/Welcome'
import Home from './screens/Home'
import Results from './screens/Results'
import Test from './screens/Test'
import Baza from './screens/Baza'
import Total from './screens/Total'





Navigation.registerComponent('Welcome', () => Welcome);
Navigation.registerComponent('Results',()=> Results);
Navigation.registerComponent('Home',()=>Home);
Navigation.registerComponent('Test',()=>Test);
Navigation.registerComponent('App',()=>App);
Navigation.registerComponent('Baza',()=>Baza);
Navigation.registerComponent('Total',()=>Total);




const { width } = Dimensions.get('window');
Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setDefaultOptions({
        topBar: {
            elevation: 0,
            visible: false,
            drawBehind: true,
            animate: false,
            buttonColor: 'white',
            title: {
                color: 'white',
                alignment: 'center'
            },
            background: {
                color: 'transparent'
            }
        }

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
                                    name: 'App',
                                }
                            },
                        ]
                    }
                }
            },
        }
    });
});

