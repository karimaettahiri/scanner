import React from 'react';
import { Text, View, StyleSheet, Button, Image, SafeAreaView, FlatList, ScrollView } from 'react-native';

export default function Recipe({ title, calories, image, ingredients }) {

    return (
        <View style={styles.container}>

            <Text style={styles.title}>{title}</Text>
            <Text style={styles.calories}>Calrories:{calories}</Text>
            <Image source={{
                uri: image

                // uri: product.id ? product.image_front_small_url : ""

            }}
                style={styles.image}
            />
            <ScrollView>
                {ingredients.map((ingredient, i) => (
                    <Text key={i} style={styles.item}>{ingredient.text}</Text>
                ))}
            </ScrollView>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        // paddingTop: 40
        borderRadius: 10,
        margin: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: "white",
        alignItems: "center",
        minWidth: 40
    },
    image: {
        height: 300,
        width: 300,
        borderRadius: 50
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 30,
        marginHorizontal: 50,
        textAlign: 'center',
        color: 'orange'
    },
    calories: {
        fontSize: 15,
        margin: 30,
        fontWeight: 'bold',
        marginHorizontal: 50,
        textAlign: 'center',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,

    },
})

