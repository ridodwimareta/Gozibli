import React, {Component} from 'react';
import {
    Text,
    Image,
    StyleSheet,
    View
} from 'react-native';
import ilustrasiApps from '../../assets/img/HomeScreen.png';

export default class Screen2 extends Component {
    render()
    {
        return (
            <View style={style.container}>
                <Image source={ilustrasiApps} style={style.ilustrasi}></Image>
                <Text>Ada adpa Gerangan</Text>
            </View>
        )
    }
}
const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: "#FFFFFF"
    },
    ilustrasi: {
        width: 300,
        height: 300,
        alignSelf: 'center'
    }
})