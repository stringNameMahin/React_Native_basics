/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';

import AppAgain from './AppAgain' // this command can be used to call the AppAgain.tsx file (Do change the "App to AppAgain") in AppRegistry line (appname, ()=> AppAgain) for it to run

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
