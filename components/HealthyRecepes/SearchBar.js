import React, { useState, useRef } from 'react';
import { TextInput, StyleSheet, View, Button, ScrollView } from 'react-native';
import Recipes from './Recipes';


export default function SearchBar() {
    const [search, setSearch] = useState('');
    const input = useRef();
    // const [query, setQuery] = useState('chicken');
    // handleChange = (search) => {

    //     setSearch(search)
    // };




    return (
        <View style={styles.container}>

            <TextInput
                ref={input}
                placeholder="enter engredients here "
                style={styles.inputtext}
                value={search}
                onChangeText={setSearch} />
            <Button
                style={styles.searchbutton}
                title="Search"
                onPress={() => {
                    input.current.blur();
                    console.log(input)
                    console.log(`searched value ${search}`);

                    setSearch("")
                }}
            />
            <ScrollView>

                <Recipes q={search} />
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {

        flex: 1,
        alignItems: 'center',
        backgroundColor: "orange"

    },
    inputtext: {

        borderWidth: 1,

        margin: 5,

        fontSize: 20,
        marginLeft: 10,
        width: "90%",


    },
    searchbutton: {


    },
});



