import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Recipe from './Recipe';



export default function Recipes(props) {

    const [recipes, setRecipes] = useState([])
    // const [query, setQuery] = useState('chicken')
    const APP_ID = "4f6be79a";
    const APP_key = "4e538d88c40f05f01016dec0932e8ee3";
    const examplereq = `https://api.edamam.com/search?q=${props.q}&&app_id=${APP_ID}&cuisineType=French&app_key=${APP_key}`
    useEffect(() => {
        fetch(examplereq)
            .then(res => res.json())
            .then(data => {
                if (data) {

                    setRecipes(data.hits)
                }
            }).catch(err => {
                console.log(err);
            })

    }, [props.q]);
    // console.log(recipes)
    return (
        <View>

            {
                recipes.map((recipe, index) => (
                    <Recipe
                        key={index}
                        title={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients} />

                ))
            }

        </View>
    )
}
