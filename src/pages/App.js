import React, { Component } from 'react';
import {
    View,
}
from 'react-native';
import Screen1 from './HomeScreen/Screen1';
import Screen2 from './HomeScreen/Screen2';
import Screen3 from './HomeScreen/Login';
import Beranda from './HomePage/Beranda';

export default class App extends Component {
    render() {
        return (
            // <Screen1/>
            // <Screen2/>
            // <Screen3/>
            <Beranda/>
        )
    }
}
