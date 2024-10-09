import React from 'react';
import { Image, TouchableOpacity, View, Text, StyleSheet, TextInput } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

export default function Screen_03() {
    return (
        <LinearGradient
            style={styles.linearGradient}
            colors={['#3B3B98', 'rgba(196, 196, 196, 0)']}
            locations={[0.2656, 0.8736]}
        >
            <View style={styles.container}>
                <Text style={styles.headerTitle}>PASSWORD GENERATOR</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Generated Password"
                    placeholderTextColor="#888"
                    editable={false} // Disable editing for generated password
                />

                <View style={styles.settingsContainer}>
                    <SettingItem label="Password length" isInput />
                    <SettingItem label="Include lower case letters" isTick={true} />
                    <SettingItem label="Include uppercase letters" isTick={false} />
                    <SettingItem label="Include numbers" isTick={true} />
                    <SettingItem label="Include special symbols" isTick={false} />
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Generate Password</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    );
}

const SettingItem = ({ label, isInput, isTick }) => (
    <View style={styles.settingItem}>
        <Text style={styles.text}>{label}</Text>
        {isInput ? (
            <TextInput
                style={styles.lengthInput}
                keyboardType="numeric"
                placeholder="Length"
                placeholderTextColor="#888"
            />
        ) : (
            <Image source={isTick ?{uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/208b362e638c2927a89f7179ea499825'} : {uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/eb14efdf756b0bfbfaa205214bf2351c'}} style={styles.icon} />
        )}
    </View>
);

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        alignItems: 'center',
        overflow: 'hidden',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#23235B',
    },
    headerTitle: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        lineHeight: 29.3,
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        width: 300,
        height: 50,
        backgroundColor: '#151537',
        borderRadius: 10,
        paddingHorizontal: 10,
        color: '#fff',
        marginBottom: 20,
    },
    settingsContainer: {
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    lengthInput: {
        width: 100,
        height: 40,
        backgroundColor: '#fff',
        textAlign: 'center',
        borderRadius: 5,
        color: '#000',
    },
    icon: {
        width: 25,
        height: 25,
    },
    buttonContainer: {
        marginTop: 20,
    },
    button: {
        backgroundColor: '#3B3B98',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
        lineHeight: 23.44,
    },
});
