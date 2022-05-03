import * as React from 'react';
import { View, Text,StyleSheet,ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';


export default function HomeScreen({ navigation }) {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = today.toLocaleString('en-us', { month: 'short' }); /* Jun */
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    
    const moodSwings = () =>{
        alert("Your mood is saved")
    }


    return (
       <>
        <ScrollView>
            <View>
                <View style={styles.edit}>
                    <Text style={styles.date} >{dd}</Text>
                    <Text style={styles.period} onPress={() => navigation.navigate("Edit")}>Edit Period date</Text>
                </View>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Calendar
                    markingType={'period'}
                    style={styles.calender}
                    markedDates={{
                        '2022-05-03': {marked: true, dotColor: '#50cebb'},
                        '2022-05-03': {marked: true, dotColor: '#50cebb'},
                        '2022-05-02': {startingDay: true, color: '#ff3632', textColor: 'white'},
                        '2022-05-03': {color: '#ff6865', textColor: 'white'},
                        '2022-05-05': {color: '#ff6865', textColor: 'white', marked: true, dotColor: 'yellow'},
                        '2022-05-04': {color: '#ff6865', textColor: 'white'},
                        '2022-05-06': {endingDay: true, color: '#ff3632', textColor: 'white'}
                    }}
                />
            </View>
            <View style={styles.face}>
                <Text style={styles.emoji} onPress={ () => moodSwings()}>&#128512;</Text>
                <Text style={styles.emoji} onPress={ () => moodSwings()}>&#128528;</Text>
                <Text style={styles.emoji} onPress={ () => moodSwings()}>&#128559;</Text>
                <Text style={styles.emoji} onPress={ () => moodSwings()}>&#128564;</Text>
                <Text style={styles.emoji} onPress={ () => moodSwings()}>&#128545;</Text>
                <Text style={styles.emoji} onPress={ () => moodSwings()}>&#128533;</Text>
                <Text style={styles.emoji} onPress={ () => moodSwings()}>&#x1F62B;</Text>
            </View>
        </ScrollView>
       </>
    );
}

const  styles = StyleSheet.create({
    calender:{
        marginTop:25,
        marginBottom:100,
        width:380,
        height:250
    },
    mood:{
        fontSize:22,
        fontWeight:'bold',
        color:"#E23737",
        marginLeft:5,
    },
    date:{
        marginTop:25,
        fontWeight:"bold",
        fontSize:50,
        color:"white",
    },
    period:{
        marginTop:10,
        color:"red",
        padding:8,
        backgroundColor:"white",
        fontWeight:"bold",
        borderRadius:50
    },  
    face:{
        display:'flex',
        flexDirection:"row",
        justifyContent:'center'
    },
    emoji:{
        margin:5,
        fontSize:25,
    },  
    edit:{
        marginTop:15,
        marginLeft:80,
        alignItems:"center",    
        width:220,
        height:220,
        borderRadius:200,
        backgroundColor:"#E23737",

    }

})
