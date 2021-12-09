
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const About = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Eat Healthy App </Text>
            <Text style={styles.text}> Eat Healthy is a mobile app that allows you to scan the barcodes of food  and instantly see their impact on your health.
                A rating and detailed information help you understand the analysis of each product.</Text>

        </View>
    );
};

export default About;

const styles = StyleSheet.create({
    container: {
        flex: 1,


        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "orange"
    },
    title: {
        fontSize: 40,
        color: "green"


    },
    text: {
        paddingTop: 30,
        margin: 10,
        fontStyle: "normal",
        fontWeight: "100",
        fontSize: 20
    }
});