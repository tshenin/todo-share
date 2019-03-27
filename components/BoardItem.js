import React from 'react';
import { TouchableHighlight, Text, StyleSheet, View } from 'react-native';

const isEven = i => i % 2 === 0;
const getLeftPadding = i => isEven(i) ? 40 : 0;

export const BoardItem = (props) => {
    const { board, index, navigation } = props;
    const onPress = () => {
        navigation.navigate('Todos', {
            boardId: board.id,
            boardTitle: board.title
        })
    };

    return (
        <View style={[styles.wrapper, {
            paddingLeft: getLeftPadding(index)
        }]}>
            <TouchableHighlight
                style={styles.underlay}
                underlayColor="black"
                onPress={onPress}
            >
                <View style={styles.item}>
                    <Text style={styles.text}>{board.title}</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        width: '50%',
        paddingRight: 20,
    },
    underlay: {
        minHeight: 250,
        borderRadius: 20,
    },
    item: {
        flex: 1,
        backgroundColor: '#5e1c73',
        padding: 20,
        borderRadius: 20,
    },
    text: {
        color: 'white',
        fontSize: 24,
        fontWeight: '300',
    }
});
