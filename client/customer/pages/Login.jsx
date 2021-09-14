import React from 'react';

import { View, StyleSheet, Text } from 'react-native';

const Login = () => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 20
        }
    });

    return (
        <View style={styles.container}>
            <Text style={{ textAlign: 'center', textAlignVertical: 'center' }}>Login</Text>
        </View>
    );
}

export default Login;
