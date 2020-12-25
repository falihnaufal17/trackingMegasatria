import React, {useState, useEffect} from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, Modal } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import AppBar from '../components/AppBar';
import IconUser from '../assets/icons/Iconawesome-user-circle.png';
import Button from '../components/Button';
import Combobox from '../components/Combobox';
import moment from 'moment'
import CustomModal from '../components/CustomModal';

const Home = (props) => {
    const [maps, setMaps] = useState(null);
    const [data, setData] = useState({
        coords: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
        },
        user_id: 1,
        customer_id: '',
        deskripsi: ''
    })
    const [time, setTime] = useState(null)
    const [customers, setCustomers] = useState([
        {label: 'Customer 1', value: 1},
        {label: 'Customer 2', value: 2},
        {label: 'Customer 3', value: 3},
        {label: 'Customer 4', value: 4}
    ])
    const [deskripsi, setDeskripsi] = useState([
        {label: 'deskripsi 1', value: 'deskripsi 1'},
        {label: 'deskripsi 2', value: 'deskripsi 2'},
        {label: 'deskripsi 3', value: 'deskripsi 3'},
        {label: 'deskripsi 4', value: 'deskripsi 4'}
    ])
    const [showModalCheckIn, setShowModalCheckIn] = useState(false);
    const [showModalCheckOut, setShowModalCheckOut] = useState(false);

    const clock = () =>{
        setTime(moment().format("HH:mm"))
    }

    useEffect(()=>{
        
        setInterval(() => {
            clock()
        }, 1000)

        Geocoder.init("AIzaSyAAeumLLK_usi-YhaX4sDC_Rx9lLxfz0f4");

        Geolocation
            .getCurrentPosition(info => 
                setData({
                    ...data, 
                    coords: {
                        ...data.coords,
                        latitude: info.coords.latitude, 
                        longitude: info.coords.longitude
                    }
                }))
 
        Geocoder
            .from(data.coords.latitude, data.coords.longitude)
            .then(json => {
        		var addressComponent = json.results[0].address_components[0];
                console.log(addressComponent);
            })
            .catch(error => console.warn(error));
        
        setMaps(<MapView
            provider={PROVIDER_GOOGLE}
            initialRegion={data.coords}
            style={styles.map}
            showsMyLocationButton={false}
            showsUserLocation={true}
            showsScale={true}
        />)

        return async () => {
            await Geolocation
                    .getCurrentPosition(info => 
                        setData({
                            ...data, 
                            coords: {
                                ...data.coords,
                                latitude: info.coords.latitude, 
                                longitude: info.coords.longitude
                            }
                        }))
        }

    }, [])

    const openModalCheck = (type) => {
        if (type == 'in'){
            setShowModalCheckIn(!showModalCheckIn)
        }else{
            setShowModalCheckOut(!showModalCheckOut)
        }
    }

    return(
        <SafeAreaView
            style={styles.containerApp}
        >
            <AppBar
                style={styles.appBar}
            >
                <Text
                    style={styles.titleBar}>
                    Your Name
                </Text>
                <Image source={IconUser} />
            </AppBar>
            <ScrollView
                contentContainerStyle={styles.scrollView}
            >
                <View>
                    <View style={styles.container} pointerEvents="none">
                        {maps}
                    </View>
                    <Text
                        style={styles.title}>Kehadiran</Text>
                    <Text
                        style={styles.title}>{time}</Text>
                    <Text
                        style={styles.date}>{moment().endOf("day").format("DD MMMM YYYY")}</Text>
                    <Text
                        style={styles.address}>Jl. H. Midar Pd. Pinang Kec. Kby. Lama Kota Jakarta Selatan Daerah Khusus Ibukota Jakarta 12310</Text>
                    <View
                        style={styles.form}
                    >
                        <Text style={styles.label}>Customer</Text>
                        <Combobox
                            data={customers}
                            value={data.customer_id}
                            placeholder="Pilih Customer"
                            onChangeItem={(item) => setData({...data, customer_id: item.value})}
                        />
                        <Text style={styles.label}>Deskripsi</Text>
                        <Combobox
                            data={deskripsi}
                            value={data.deskripsi}
                            placeholder="Pilih Keterangan"
                            onChangeItem={(item) => setData({...data, deskripsi: item.value})}
                        />
                    </View>
                </View>
                <View
                    style={styles.sectionButton}
                >
                    <View>
                        <Button
                            title="Check In"
                            onClick={() => openModalCheck("in")}
                        />
                    </View>
                    <View>
                        <Button
                            title="Check Out"
                            onClick={() => openModalCheck("out")}
                        />
                    </View>
                </View>
            </ScrollView>
            <CustomModal
                showModal={showModalCheckIn}
                transparent={true}
                animationType="fade"
            >
                <View
                    style={styles.modalContainer}
                >
                    <View
                        style={styles.modalContent}
                    >
                        <Text
                            style={styles.title}>Kehadiran</Text>
                        <Text
                            style={styles.title}>{time}</Text>
                        <Text
                            style={styles.date}>{moment().endOf("day").format("DD MMMM YYYY")}</Text>
                        <View
                            style={styles.sectionButtonModal}
                        >
                        <View>
                            <Button
                                title="Check In"
                                onClick={() => openModalCheck("in")}
                            />
                        </View>
                        <View>
                            <Button
                                title="Batal"
                                onClick={() => openModalCheck("in")}
                            />
                        </View>
                        </View>
                    </View>
                </View>
            </CustomModal>
            <CustomModal
                showModal={showModalCheckOut}
                transparent={true}
                animationType="fade"
            >
                <View
                    style={styles.modalContainer}
                >
                    <View
                        style={styles.modalContent}
                    >
                        <Text
                            style={styles.title}>Kehadiran</Text>
                        <Text
                            style={styles.title}>{time}</Text>
                        <Text
                            style={styles.date}>{moment().endOf("day").format("DD MMMM YYYY")}</Text>
                        <View
                            style={styles.sectionButtonModal}
                        >
                        <View>
                            <Button
                                title="Check Out"
                                onClick={() => openModalCheck("out")}
                            />
                        </View>
                        <View>
                            <Button
                                title="Batal"
                                onClick={() => openModalCheck("out")}
                            />
                        </View>
                        </View>
                    </View>
                </View>
            </CustomModal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    containerApp: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    scrollView:{
        flexGrow: 1,
        justifyContent: 'space-between'
    },
    container:{
        height: 177,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 20
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    appBar:{
        backgroundColor: '#5BC1DF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20
    },
    titleBar: {
        fontFamily: 'NunitoSans-Bold',
        color: '#FFFFFF',
        fontSize: 20
    },
    sectionButton:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 50,
        marginBottom: 20
    },
    label: {
        fontFamily: 'NunitoSans-Bold',
        fontSize: 14,
        color: "#29415E",
        marginBottom: 15
    },
    form:{
        margin: 20
    },
    title: {
        fontFamily: 'NunitoSans-Bold',
        fontSize: 20,
        color: "#29415E",
        marginBottom: 5,
        textAlign: 'center'
    },
    date: {
        fontFamily: 'NunitoSans-Bold',
        fontSize: 14,
        color: "#29415E",
        marginBottom: 20,
        textAlign: 'center'
    },
    address: {
        fontFamily: 'NunitoSans-Regular',
        fontSize: 12,
        color: "#7A7A7A",
        paddingHorizontal: 20
    },
    sectionButtonModal:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    modalContainer:{
        backgroundColor: 'rgba(0,0,0,0.8)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContent:{
        backgroundColor: '#FFF',
        elevation: 1,
        borderRadius: 3,
        padding: 15,
        width: 275
    }
})

export default Home;