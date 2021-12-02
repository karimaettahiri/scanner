import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function ProductDetails(props) {
    const [product, setProduct] = useState({});
    const params = props.route.params;
    useEffect(() => {
        fetch(params.pokemon.url)
            .then(res => res.json())
            .then(data => {
                setPokemon(data);
            })
    }, [])
    return (
        <View style={styles.container}>
            <Image source={{
                uri: pokemon.id ? pokemon.sprites.front_default : ""
            }}
                style={styles.image}
            />
            <Text style={styles.h1}>{pokemon.name}</Text>
            <Text>Height: {pokemon.height}</Text>
            <Text>Weight: {pokemon.weight}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        height: 300,
        width: 300
    },
    h1: {
        fontSize: 30
    }
})