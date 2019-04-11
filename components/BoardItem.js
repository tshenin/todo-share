import React from 'react';
import { TouchableHighlight, Text, StyleSheet, View } from 'react-native';
import { colors } from '../services/consts';

export const BoardItem = (props) => {
    const {
        board,
        onPress,
        onLongPress,
        blocked,
        selected
    } = props;

    return (
        <View style={styles.wrapper}>
            <TouchableHighlight
                style={styles.underlay}
                underlayColor="black"
                onPress={onPress}
                onLongPress={onLongPress}
            >
                <View style={[
                    styles.item,
                    selected ? styles.selected : {},
                    blocked ? styles.blocked : {}
                ]}>
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
    selected: {
        borderWidth: 4,
        borderColor: colors.additional,
    },
    blocked: {
        opacity: 0.7,
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: '300',
        paddingBottom: 10
    },
    desc: {
        fontWeight: '200',
        color: colors.textLight,
    }
});
