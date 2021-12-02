import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Home() {
    return (
        <View style={styles.header}>
            <Text style={styles.h1}>Eat Healthy</Text>

        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        flex: 2,
        paddingTop: 20,
        width: "100%",
        // backgroundColor: "red",
        // borderBottomWidth: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    h1: {
        fontSize: 40,
        color: "green"
    }
})


