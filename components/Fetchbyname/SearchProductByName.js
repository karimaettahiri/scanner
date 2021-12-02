import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Button, Image, SafeAreaView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import ProductDetails from './components/PokemonDetails'
import ProductList from './ProductList';

// const Stack = createNativeStackNavigator();

export default function SearchProductByName(props) {

    const [text, setText] = useState("enter a product name");
    const [products, setProducts] = useState({})

    ////fetch request to get product info
    useEffect(() => {
        //  if(typeof props.barcode == 'number'){
        fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=5&dataType=Branded&api_key=vPheJlj1e3gxm7DUnSUWnwEacXSuRHSBiXAlL4Yq`)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    // console.log(data)
                    setProducts(data.foods[0])

                }
            }).catch(err => {
                console.log(err);
            })

        // }

    }, [])
    console.log(products)

    return (


        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='e.g cheese'
                onChangeText={(val) => setText(val)}

            />
            <Button
                title="Search"
                onPress={() => console.warn(text)}
            />
            {products != {} ? (
                <ProductList listproduct={products} />
            ) : (
                console.log('oops')
            )}

        </View>


        //     <NavigationContainer style={styles.container}>
        //       

        //         <View style={styles.body}>
        //             <Stack.Navigator
        //                 screenOptions={{
        //                     headerShown: false
        //                 }}
        //             >
        //                 <Stack.Screen
        //                     name="Product List"
        //                     children={({ navigation }) => {
        //                         return <ProductList listproduct={product} navigation={navigation} />
        //                     }}
        //                 />

        //                 {/* <Stack.Screen name="Product Details" component={ProductDetails} /> */}
        //             </Stack.Navigator>
        //         </View>
        //     </NavigationContainer>




    )

};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },



    input: {
        height: 40,
        margin: 10,
        borderWidth: 1,
        padding: 8,
        borderColor: '#777',
        width: 200
    },


})
