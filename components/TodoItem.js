import React from 'react';
import { TouchableHighlight, Text, StyleSheet, View } from 'react-native';

export const TodoItem = (props) => {
    const { todo, navigation } = props;
    const onPress = () => {
        console.log('Yep');
    };

    return (
        <TouchableHighlight
            style={styles.underlay}
            underlayColor="white"
            onPress={onPress}
        >
            <View style={styles.item}>
                <Text style={styles.title}>{todo.title}</Text>
                <Text style={styles.desc}>{todo.desc}</Text>
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    underlay: {
        paddingTop: 20,
        paddingLeft: 40,
        paddingRight: 20,
    },
    item: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#e9e9e9',
        paddingBottom: 10,
    },
    title: {
        fontSize: 24,
        lineHeight: 36,
    },
    desc: {
        fontWeight: '200',
        color: '#cacaca'
    }
});
