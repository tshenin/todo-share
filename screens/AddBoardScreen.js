import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import { AddBoardForm } from '../components/AddBoardForm';
import { Header } from '../components/Header';

export const AddBoardScreen = props => {
    const { navigation } = props;
    return (
        <View style={styles.wrapper}>
            <ScrollView style={styles.container}>
                <AddBoardForm navigation={navigation} />
            </ScrollView>
        </View>
    );
};

AddBoardScreen.navigationOptions = () => {
    const title = 'New Board';
    return {
        title,
        header: () => <Header title={title}></Header>,
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
})