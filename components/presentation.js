import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, View, ScrollView} from "react-native";
import {Toolbar, Card} from "react-native-material-design";

//import styles from '../styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    list: {
        marginTop: 60
    }
});

export default class Presentation extends Component {
    render() {
        const presentationCards =
            [1, 2, 3, 4, 5, 6]
                .map(number => ({"id": number, "title": `Title number ${number}`}))
                .map(p => (
                    <Card key={p.id}>
                        <Card.Body>
                            <Text>{p.title}</Text>
                        </Card.Body>
                    </Card>
                ))
        return (
            <View style={styles.container}>
                <Toolbar title={"Rate My String"} icon={"menu"}
                         style={styles.toolbar}/>
                <ScrollView style={styles.list}>
                    {presentationCards}
                </ScrollView>
            </View>
        );
    }
}