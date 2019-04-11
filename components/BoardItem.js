import React from 'react';
import {
    TouchableHighlight,
    Text,
    StyleSheet,
    View,
    Animated,
} from 'react-native';
import { colors } from '../services/consts';

export const BoardItem = (props) => {
    const {
        board,
        onPress,
        onLongPress,
        blocked,
        selected
    } = props;

    const borderAppearing = new Animated.Value(0);
    const opacityAnimation = new Animated.Value(1);

    Animated
        .timing(borderAppearing, { toValue: selected ? 4 : 0, duration: 50, })
        .start();
    
    Animated
        .timing(opacityAnimation, { toValue: blocked ? 0.7 : 1, duration: 50, })
        .start();

    return (
        <View style={styles.wrapper}>
            <TouchableHighlight
                style={styles.underlay}
                underlayColor="black"
                onPress={onPress}
                onLongPress={onLongPress}
            >
                <Animated.View style={[
                    styles.item,
                    selected ? styles.selected : {},
                    { opacity: opacityAnimation },
                    { borderWidth: borderAppearing }
                ]}>
                    <Text style={styles.title}>{board.title}</Text>
                    <Text style={styles.desc}>{board.desc}</Text>
                </Animated.View>
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
        borderColor: colors.additional,
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
