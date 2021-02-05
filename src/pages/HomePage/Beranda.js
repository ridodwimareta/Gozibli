import React, {Component} from 'react';
import {
        ScrollView,
        View,
        Text,
        Image,
        StyleSheet,
        Button,
} from 'react-native';

export default class Beranda extends Component {
    render()
    {
        return (
            <View>
                <ScrollView>
                    <View style={style.container}>
                        
                        <ProfilUser/>

                        <Layanan/>

                        <TrashEdu/>

                        <TrashNews/>

                    </View>
                </ScrollView>

                <Navigasi/>
            </View>
        )
    }
}

const ProfilUser = () => {
    return (
        <View style={style.topWrapper}>
            <View style={style.topBlue}>
                <View style={style.showUser}>
                    <Image source={{uri: 'data:image/jpeg;base64,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'}} style={style.fotoProfil}/>
                    <View style={style.wrapperUser}>
                        <Text style={style.nama}>Nama Pengguna</Text>
                        <Text style={style.username}>Username Pengguna</Text>
                    </View>
                </View>
                <View style={{height:60, marginTop: 25, width: '20%', display: 'flex', justifyContent: 'center' }}>
                    <View style={style.editPengguna}>
                        <Text style={style.iconEdit}>G</Text>
                    </View>
                </View>
            </View>
            <View style={style.topWhite}>
                <View style={style.gambarSlide}>
                    <Image source={{uri: 'data:image/jpeg;base64,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'}} style={style.gambarContent}/>
                </View>
                <View style={style.slideContent}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>Memudahkan</Text>
                    <Text style={{textAlign: 'left'}}>Pelayanan yang kami berikan akan memudahakan anda dalam mengelola sampah</Text>
                </View>
            </View>
            <View style={style.buttonSlide}>
                <View style={style.slide1}></View>
                <View style={style.slide2}></View>
                <View style={style.slide3}></View>
                <View style={style.slide4}></View>
                <View style={style.slide5}></View>
            </View>
        </View>

    )
}

const Layanan = () => {
    return (
        <View style={sLayanan.wrapperLayanan}>
            <Text style={style.subTitle}>Layanan</Text>
            <View style={sLayanan.fiturUtama}>
                <View style={sLayanan.itemLayanan}>
                    <View style={sLayanan.rBigTrash}>
                        {/* Icon */}
                    </View>
                    <Text>R-Big Trash</Text>
                </View>

                <View style={sLayanan.itemLayanan}>
                    <View style={sLayanan.informasi}>
                        {/* Icon */}
                    </View>
                    <Text>Informasi</Text>
                </View>

                <View style={sLayanan.itemLayanan}>
                    <View style={sLayanan.iuran}>
                        {/* Icon */}
                    </View>
                    <Text>Bayar Iuran</Text>
                </View>

                <View style={sLayanan.itemLayanan}>
                    <View style={sLayanan.history}>
                        {/* Icon */}
                    </View>
                    <Text style={sLayanan.textFitur}>History</Text>
                </View>
            </View>
        </View>
    )
}

const TrashEdu = () => {
    return (
        <View style={sTrashEdu.wrapperTrashEdu}>
            <Text style={style.subTitle}>TrashEdu</Text>
            <View style={sTrashEdu.content}>
                <View style={sTrashEdu.subContent}>
                    {/* image */}
                    <View style={sTrashEdu.wrapContent}>
                        <Text style={sTrashEdu.jdlContent}>Jenis - Jenis Sampah</Text>
                        <Text style={sTrashEdu.isiContent}>Sampah harus di pilah dan dibuang berdasarkan jenisnya agar pengelolaan sampah mudah</Text>
                    </View>
                </View>
                <View style={sTrashEdu.wrapContent}>
                    {/* image */}
                    <View style={sTrashEdu.subContent}>
                        <Text style={sTrashEdu.jdlContent}>Mengelolah Sampah</Text>
                        <Text style={sTrashEdu.isiContent}>Sampah harus di pilah dan dibuang berdasarkan jenisnya agar pengelolaan sampah mudah</Text>
                    </View>
                </View>
                <View style={sTrashEdu.bgReadMore}><Text style={sTrashEdu.readMore}>N</Text></View>
            </View>
        </View>
    )
}

const TrashNews = () => {
    return (
        <View style={sTrashNews.wrapperTrashNews}>
            <Text style={style.subTitle}>TrashNews</Text>
            <View style={sTrashNews.wrapPost}>
                <Image source={{uri: 'data:image/jpeg;base64,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'}} style={sTrashNews.postNewsGambar}/>
                <Text style={sTrashNews.isiPostNews}>Sampah harus di pilah dan dibuang berdasarkan jenisnya agar pengelolaan sampah mudah</Text>
            </View>
        </View>
    )
}

const Navigasi = () => {
    return (
        <View style={sNavigasi.wrapNavigasi}>
            <View style={sNavigasi.buttonHome}/>
            <View style={sNavigasi.buttonBack}/>
            <View style={sNavigasi.scanMe}>
                <View style={sNavigasi.buttonScan}></View>
                <Text style={sNavigasi.textScan}>Scan Here</Text>
            </View>
            <View style={sNavigasi.notifikasi}/>
            <View style={sNavigasi.userSetting}/>
        </View>
    )
}

// Style Profile
const style = StyleSheet.create(
{
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
        marginBottom: 65,
    },
    topWrapper: {
        width: '100%',
        height: 270,
    },
    topBlue: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: 200,
        backgroundColor: 'rgba(101, 111, 204, 1)',
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
    },
    showUser: {
        height: 60,
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 25
    },
    fotoProfil: {
        width: 60,
        height: 60,
        backgroundColor: '#FFFFFF',
        borderRadius: 30
    },
    wrapperUser: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        marginLeft: 10,
        position: 'relative',
    },
    nama: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    username: {
        color: '#FFFFFF',
        fontSize: 13,
    },
    editPengguna: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: "#FFFFFF",
    },
    iconEdit: {
        alignSelf: 'center',
        lineHeight: 30
    },
    topWhite: {
        height: 160,
        width: '90%',
        backgroundColor: '#FFFFFF',
        padding: 10,
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        borderRadius: 30,
        elevation: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    gambarSlide: {
        width: '50%',
        height: 100,
    },
    gambarContent: {
        width: '90%',
        height: 100,
        borderRadius: 10,
    },
    slideContent: {
        width: '50%',
        height: 100,
    },
    buttonSlide: {
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        elevation: 12,
        justifyContent: 'flex-end',
        marginBottom: 13,
    },
    slide1: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#CCCCCC',
        marginRight: 8,
    },
    slide2: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#656FCC',
        marginRight: 8,
    },
    slide3: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#CCCCCC',
        marginRight: 8,
    },
    slide4: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#CCCCCC',
        marginRight: 8,
    },
    slide5: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#CCCCCC',
        marginRight: 20,
    },
    subTitle: {
        fontSize: 22,
        fontWeight: 'bold'
    }

})

// Style Layanan
const sLayanan = StyleSheet.create({
    wrapperLayanan: {
        width: '100%',
        padding: 10,
        height: 150,
    },
    fiturUtama: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: 100,
        justifyContent: 'space-around',
        marginTop: 10
    },
    itemLayanan: {
        display: 'flex',
        flexDirection: 'column',
    },
    rBigTrash: {
        height: 70,
        width: 70,
        backgroundColor: '#656FCC',
        borderRadius: 15,
    },
    informasi: {
        height: 70,
        width: 70,
        backgroundColor: '#656FCC',
        borderRadius: 15,
    },
    iuran: {
        height: 70,
        width: 70,
        backgroundColor: '#656FCC',
        borderRadius: 15,
    },
    history: {
        height: 70,
        width: 70,
        backgroundColor: '#656FCC',
        borderRadius: 15,
    },
    textFitur: {
        alignSelf:'center',
        fontSize: 14,
        borderRadius: 15,
    }
})

// Style Trash Edu
const sTrashEdu = StyleSheet.create({
    wrapperTrashEdu: {
        padding: 10,
        height: 235,
        width: '100%',
    },
    content: {
        padding: 10,
        width: '100%',
        elevation: 10,
    },
    wrapContent: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        elevation: 6,
        marginVertical: 6,
        padding: 8,
        borderRadius: 15,
    },
    subContent: {
        display: 'flex',
        flexDirection: 'column',
    },
    jdlContent: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    isiContent: {
        fontSize: 12,
    },
    bgReadMore: {
        height: 30,
        width: 30,
        backgroundColor: '#FFFFFF',
        elevation: 5,
        borderRadius: 15,
        alignSelf: 'center'
    },
    readMore: {   
        color: 'black',
        fontSize: 25,
        alignSelf: 'center',
    },
})

// Style TrashNews
const sTrashNews = StyleSheet.create({
    wrapperTrashNews: {
        height: '100%',
        width: '100%',
        padding: 10,
    },
    wrapPost: {
        width: '90%',
        height: 220,
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 10,
    },
    postNewsGambar: {
        width: '100%',
        height: 150,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    isiPostNews: {
        padding: 15,
    }
})

// Navigasi
const sNavigasi = StyleSheet.create({
    wrapNavigasi: {
        height: 50,
        width: '100%',
        position: 'absolute',
        backgroundColor: "#FFFFFF",
        bottom: 0,
        marginTop: 10,
        shadowColor: '#000',
        shadowRadius: 5,
        borderTopWidth: 2,
        borderTopColor: 'rgba(245, 245, 245, 1)',
        elevation: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',        
    },
    buttonHome: {
        width: '19%',
        height: 50,
        backgroundColor: 'red',
    },
    buttonBack: {
        width: '19%',
        height: 50,
        backgroundColor: 'yellow',
    },
    scanMe: {
        width: '24%',
        height: 50,
    },
    buttonScan: {
        width: 65,
        height: 65,
        backgroundColor: '#656FCC',
        borderRadius: 18,
        alignSelf: 'center',
        marginTop: -35,
    },
    textScan: {
        color: '#3E424B',
        fontSize: 12,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0,
        paddingBottom: 4,
    }, 
    notifikasi: {
        width: '19%',
        height: 50,
        backgroundColor: 'orange',
    },
    userSetting: {
        width: '19%',
        height: 50,
        backgroundColor: 'blue',
    },
})