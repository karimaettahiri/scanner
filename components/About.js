
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const About = () => {
    return (
        <View style={styles.container}>
            <Text>About</Text>
            <Button
                title="Click Here"
                onPress={() => alert('Button Clicked!')}
            />
        </View>
    );
};

export default About;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});