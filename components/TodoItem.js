import React from 'react';
import {
    TouchableHighlight,
    Text,
    StyleSheet,
    View,
} from 'react-native';
import PropTypes from 'prop-types';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { colors } from '../services/consts';
import { LabeledIcon } from './LabeledIcon';

export const TodoItem = (props) => {
    const { todo, onDelete, onPress } = props;
    let swipeableRef;

    const renderDeleteButton = () => (
        <LabeledIcon
            label="Delete"
            name="trash"
            mod="danger"
        />
    );

    const deleteTodo = () => {
        onDelete(todo.id);
        swipeableRef.close();
    };

    return (
        <TouchableHighlight
            style={styles.underlay}
            underlayColor="white"
            onPress={onPress}
        >
            <Swipeable
                // eslint-disable-next-line no-return-assign
                ref={ref => swipeableRef = ref}
                onSwipeableRightOpen={deleteTodo}
                renderRightActions={renderDeleteButton}
            >
                <View style={styles.item}>
                    <Text style={styles.title}>{todo.title}</Text>
                    <Text style={styles.desc}>{todo.desc}</Text>
                </View>
            </Swipeable>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    underlay: {
        marginLeft: 40,
        marginRight: 20,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    item: {
        flex: 1,
        paddingBottom: 10,
        paddingTop: 20,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: '300',
        lineHeight: 36,
    },
    desc: {
        fontWeight: '200',
        color: colors.textDark,
    },
    actionButton: {
        width: 100,
    },
});

TodoItem.propTypes = {
    todo: PropTypes.object,
    onDelete: PropTypes.func,
    onPress: PropTypes.func,
};
