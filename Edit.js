import React, { useState } from 'react';
import { TextInput, View, Text, Button, StyleSheet,Alert } from "react-native";
import {datasource} from "./Data";

const Edit = ({navigation, route}) => {
    const [letter, setLetter] = useState(route.params.key);
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Letter:</Text>
            <TextInput
                value={letter} maxLength={1}
                style={styles.input}
                onChangeText={(text) => setLetter(text)}
            />
            <View style={styles.buttonRow}>
                <View style={styles.buttonContainer}>
                    <Button title="Save" onPress={() =>{
                        let indexnum = 1
                        if(route.params.type=="Vowels"){
                            indexnum=0;
                        }
                        datasource[indexnum].data[route.params.index].key=letter;
                        navigation.navigate('Home');
                    }} />
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Delete" onPress={() =>{
                        let indexnum = 1
                        if(route.params.type=="Vowels"){
                            indexnum=0;
                        }
                        Alert.alert("Are you sure?",'',
                        [{text:'yes',onPress:() =>{
                        datasource[indexnum].data.splice(route.params.index,1);
                        navigation.navigate('Home')}},{text:'No'}])
                    }}/>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        marginBottom: 15,
        padding: 5,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    buttonContainer: {
        flex: 1,
        marginHorizontal: 5,
    },
});

export default Edit;
