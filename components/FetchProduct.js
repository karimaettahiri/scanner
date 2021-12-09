import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Button, Image, SafeAreaView } from 'react-native';



export default function FetchProduct(props) {
  //  const{barcode}=props;
  const [product, setProduct] = useState({})
  ////fetch request to get product info
  useEffect(() => {

    fetch(`https://world.openfoodfacts.org/api/v0/product/${props.barcode}.json`)
      .then(res => res.json())
      .then(data => {
        if (data) {
          console.log(data)
          setProduct(data.product)
        }
      }).catch(err => {
        console.log(err);
      })



  }, [props.barcode])
  // let group=product.nova_group;
  const level = (group) => {
    if (group > 3) {
      return 'high risk';
    } else if (group >= 2 && group <= 3) {
      return 'moderate risk';
    }
    else {
      return "excellente";


    }
  }

  let positives = (product.nutriments);
  return (
    <SafeAreaView style={styles.container}>


      <Text style={styles.title} >{product.product_name}</Text>
      <Text > </Text>
      <Image source={{

        uri: product.id ? product.image_front_small_url : ""

      }}
        style={styles.image}
      />


      {/* <Text>Calrories/100g : {product.nutriments.energy_value}</Text> */}
      <Text style={styles.title}> Healthy level: {level(product.nova_group)}</Text>
      <Text style={styles.categories}>Categories: {product.categories}</Text>
      {/* negative nutrients */}
      <Text style={styles.negative}>Negative nutrients/100g:</Text>
      <Text style={styles.nutrient}>Fat:{product.nutrient_levels?.fat}</Text>
      <Text style={styles.nutrient}>Salt:{product.nutrient_levels?.salt}</Text>
      <Text style={styles.nutrient}>Sugar:{product.nutrient_levels?.sugars}</Text>
      {/* positive nutrients */}
      <Text style={styles.positive}>positive nutrients/100g:</Text>
      <Text style={styles.nutrient}>Fiber:{product.nutriscore_data?.fiber}</Text>
      <Text style={styles.nutrient}>Proteins:{product.nutriscore_data?.proteins}</Text>




    </SafeAreaView>




  )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 30,
    marginHorizontal: 50,
    textAlign: 'center',
    color: 'black'
  },
  negative: {
    padding: 20,
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold'
  },
  nutrient: {
    fontSize: 15,

    fontWeight: 'bold',
    paddingBottom: 20

  },
  positive: {
    padding: 20,
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold'

  },
  categories: {

    paddingBottom: 20,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold'
  }

})
