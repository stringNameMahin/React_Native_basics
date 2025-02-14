/**
 * @format
 */

import {AppRegistry} from 'react-native';

import App from './App';

import Proj2 from './Proj2' // this command can be used to call the Proj2.tsx file (Do change the "App to Proj2") in AppRegistry line (appname, ()=> Proj2) for it to run

import {name as appName} from './app.json';
import Proj3 from './Proj3'
import Proj4 from './Proj4'

AppRegistry.registerComponent(appName, () => Proj4);
