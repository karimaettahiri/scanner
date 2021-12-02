import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';

export default function Productlist(props) {
    let products = props.listproduct;
    return (
        <ScrollView>
            {products.map((product, i) => {
                return (
                    // <TouchableHighlight
                    //     key={i}
                    //     underlayColor="lightblue"
                    //     onPress={() => {
                    //         props.navigation.navigate("Product Details", { product })
                    //     }}
                    // >
                    <View style={styles.product}>
                        <Text style={{ fontSize: 20 }}>
                            {product.brandOwner}
                        </Text>
                    </View>
                    // </TouchableHighlight>
                )
            })}
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    pokemon: {
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "grey"
    }
})