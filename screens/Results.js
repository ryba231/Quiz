import React, {Component} from "react";
import {FlatList, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {Header} from "react-native-elements";

export default class Results extends Component<Props> {
    state = {
        data: [
            {id: "00", name: "Nick"},
            {id: "01", name: "Point"},
            {id: "02", name: "Type"},
            {id: "03", name: "Date"},
            {id: "04", name: "asdf"},
            {id: "05", name: "18/20"},
            {id: "06", name: "test1"},
            {id: "07", name: "21-11-2018"},
            {id: "08", name: "asdf"},
            {id: "09", name: "18/20"},
            {id: "10", name: "test1"},
            {id: "11", name: "21-11-2018"},
            {id: "12", name: "asdf"},
            {id: "13", name: "18/20"},
            {id: "14", name: "test1"},
            {id: "15", name: "21-11-2018"},
            {id: "16", name: "asdf"},
            {id: "17", name: "18/20"},
            {id: "18", name: "test1"},
            {id: "19", name: "21-11-2018"},
        ]
    };

    render() {
        const columns = 4;
        return (
            <View>
                <Header
                    leftComponent={{
                        icon: 'menu',
                        color: '#D4D4D4',
                        onPress: () => alert('ea'),
                    }}
                    centerComponent={{text: 'Results', style: {color: '#000000', fontSize: 20,}}}
                    backgroundColor='#FFFFFF'
                />
                <SafeAreaView style={{marginHorizontal: 10, marginTop: 30}}>
                    <FlatList
                        data={createRows(this.state.data, columns)}
                        keyExtractor={item => item.id}
                        numColumns={columns}
                        renderItem={({item}) => {
                            if (item.empty) {
                                return <View style={[styles.item, styles.itemEmpty]}/>;
                            }
                            return (
                                <View style={styles.item}>
                                    <Text style={styles.text}>{item.name}</Text>
                                </View>
                            );
                        }}
                    />
                </SafeAreaView>
            </View>
        );
    }
}

function createRows(data, columns) {
    const rows = Math.floor(data.length / columns);
    let lastRowElements = data.length - rows * columns;
    while (lastRowElements !== columns) {
        data.push({
            id: `empty-${lastRowElements}`,
            name: `empty-${lastRowElements}`,
            empty: true
        });
        lastRowElements += 1;
    }
    return data;
}

const styles = StyleSheet.create({
    item: {
        alignItems: "center",
        backgroundColor: "#a2a3a5",
        flexGrow: 1,
        flexBasis: 0,
        padding: 20,
        borderWidth: 0.5,
    },
    text: {
        color: "#333333"
    },
    itemEmpty: {
        backgroundColor: "transparent"
    },
});
