
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ContactUs = () => {
    return (
        <View style={styles.container}>
            <Text>Contact us </Text>
            <Button
                title="Click Here"
                onPress={() => alert('Button Clicked!')}
            />
        </View>
    );
};

export default ContactUs;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});