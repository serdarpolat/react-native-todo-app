import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

export default () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { }} style={styles.itemContainer}>
                <View>
                    <Text style={styles.itemTitle}>
                        List 1
                    </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity onPress={() => { }}>
                        <Ionicons name="options-outline" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <Ionicons name="trash-outline" size={24} color={Colors.red} />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    itemTitle: { fontSize: 24, padding: 5, color: "white" },
    itemContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 100,
        borderRadius: 20,
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 15,
        backgroundColor: Colors.blue
    },
    icon: {
        padding: 5,
        fontSize: 24,
    },
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
    },
});