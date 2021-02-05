import React, { Component } from 'react';
import {
        AppRegistry,
        Text,
        View,
        StyleSheet,
        Image,
    }
from 'react-native';
import logo from '../../assets/img/logotanpateks.png';

export default class Screen1 extends Component {
    render() {
        return (
            <View style={style.container}>
                <Image source={logo} style={style.logo}></Image>
                <View style={style.slideIcon}>
                    <View style={style.iconSlide1}/>
                    <View style={style.iconSlide2}/>
                    <View style={style.iconSlide3}/>
                </View>
                <View style={style.wrapperTextLogo}>
                    <Text style={style.textLogo}>GoZibil</Text>
                    <Text  style={style.textSmall}>For Your Waste Management</Text>
                </View>
            </View>
        )
    }
}

// Style Halaman
const style = StyleSheet.create({
    container: {
        backgroundColor: '#656FCC',
        width: '100%',
        height: '100%',
    },
    logo: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginTop: '50%'
    },
    slideIcon: {
        width: 100,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-around',
        marginTop: '35%',

    },
    iconSlide1: {
        width: 18,
        height: 18,
        borderRadius: 9,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: "#CCCCCC"
    },
    iconSlide2: {
        width: 18,
        height: 18,
        borderRadius: 9,
        backgroundColor: '#656FCC',
        borderWidth: 2,
        borderColor: '#FFFFFF'
    },
    iconSlide3: {
        width: 18,
        height: 18,
        borderRadius: 9,
        backgroundColor: '#656FCC',
        borderWidth: 2,
        borderColor: '#FFFFFF'
    },
    wrapperTextLogo: {
        width: "100%",
        height: "15%",
        position: 'absolute',
        bottom: 0
    },
    textLogo: {
        fontFamily: "Times New Roman",
        color: "#FFFFFF",
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    textSmall: {
        fontFamily: 'calibri',
        color: "#FFFFFF",
        fontSize: 20,
        textAlign: 'center'
    }
})