import React from 'react';
import { TouchableHighlight, Text, StyleSheet, View } from 'react-native';
import { colors } from '../services/consts';

export const BoardItem = (props) => {
    const { board, navigation } = props;
    const onPress = () => {
        navigation.navigate('Todos', {
            boardId: board.id,
            boardTitle: board.title
        })
    };

    return (
        <View style={styles.wrapper}>
            <TouchableHighlight
                style={styles.underlay}
                underlayColor="black"
                onPress={onPress}
            >
                <View style={styles.item}>
                    <Text style={styles.title}>{board.title}</Text>
                    <Text style={styles.desc}>{board.desc}</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: '50%',
        paddingRight: 20,
        marginBottom: 20,
    },
    underlay: {
        minHeight: 250,
        borderRadius: 20,
    },
    item: {
        flex: 1,
        backgroundColor: colors.main,
        padding: 20,
        borderRadius: 20,
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: '300',
        lineHeight: 36,
    },
    desc: {
        fontWeight: '200',
        color: 'rgba(255, 255, 255, 0.8)'
    }
});
