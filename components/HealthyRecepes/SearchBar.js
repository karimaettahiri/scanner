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
        // marginTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "white"

    },
    inputtext: {
        flex: 1,
        borderWidth: 2,
        fontSize: 20,
        margin: 5,
        borderRadius: 5,
        padding: 5


    },
    searchbutton: {

    },
});



