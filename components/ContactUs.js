
import React, { useState, useRef } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


const ContactUs = () => {
    const [message, setMessage] = useState('');
    const input = useRef();
    return (
        <View style={styles.container}>

            <TextInput
                ref={input}
                placeholder="enter your message here "
                style={styles.inputtext}
                value={message}
                onChangeText={setMessage} />

            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    input.current.blur();
                    console.log(input)
                    console.log(`message entered ${message}`);

                    setMessage("")
                }}
            >
                <Text> Send </Text>
            </TouchableOpacity>


        </View>
    );
};

export default ContactUs;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange'
    },
    inputtext: {

        borderWidth: 1,
        borderColor: "green",

        height: 300,
        margin: 5,

        fontSize: 20,
        marginLeft: 10,
        width: "90%",
    },
    sendchbutton: {
        color: "orange"
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'green',
        padding: 10
    }
});