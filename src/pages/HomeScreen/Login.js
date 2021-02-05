import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Image
} from 'react-native';
import logo from '../../assets/img/logotanpateks.png';

export default class Screen3 extends Component {
    render()
    {
        return (
            <View style={style.container}>
                <View style={style.wrapperLogo}>
                    <Image source={logo} style={style.logo} />
                    <Text style={style.textLogo}>Gozibil</Text>
                </View>
                <View style={style.formMasuk}>
                    <Text style={style.judul}>Login</Text>
                    <Text style={style.username}>Username</Text>
                    <TextInput style={style.inputUsername}></TextInput>
                    <Text style={style.password}>Password</Text>
                    <TextInput style={style.inputPassword}></TextInput>
                    <View style={style.buttonLogin}><Text style={style.buttonText}>LOGIN</Text></View>
                    <Text style={style.forgetPassword}>Forget Password?</Text>
                </View>
                <Text style={style.daftar}>Don't have an account? <Text style={{textDecorationLine: 'underline'}}>Sign Up</Text></Text>
            </View>
        )
    }
} 

// style Layout
const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#656FCC'
    },
    wrapperLogo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    logo: {
        width: 110,
        height: 120,
        marginTop: 30
    },
    textLogo: {
        color: '#FFFFFF',
        fontSize: 50,
        fontWeight: 'bold'
    },
    formMasuk: {
        display: 'flex',
        flexDirection: 'column',
        padding: 20
    },
    judul: {
        color: '#FFFFFF',
        fontSize: 30,
    },
    username: {
        color: '#FFFFFF',
        fontSize: 18,
        marginVertical: 10,
    },
    inputUsername: {
        backgroundColor: '#FFFFFF',
        height: 40,
        width: '100%',
        borderRadius: 5,
    },
    password: {
        color: '#FFFFFF',
        fontSize: 18,
        marginTop: 20,
        marginVertical: 10,
    },
    inputPassword: {
        backgroundColor: '#FFFFFF',
        height: 40,
        width: '100%',
        borderRadius: 5
    },
    buttonLogin: {
        width: '100%',
        height: 40,
        backgroundColor: '#FFFFFF',
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    buttonText: {
        color: '#656FCC',
        fontSize: 20,
    },
    forgetPassword: {
        color: '#FFFFFF',
        alignSelf: 'center',
        fontSize: 15,
        marginTop: 5
    },
    daftar: {
        position: 'absolute',
        bottom: 0,
        paddingBottom: 10,
        color: '#FFFFFF',
        alignSelf: 'center',
        fontSize: 15,
        fontWeight: 'bold'
    }
})