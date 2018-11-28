import React, {Component} from 'react';
import {StyleSheet, View, ListView, RefreshControl, Text} from 'react-native'
import {Header} from "react-native-elements";


class RefreshControlExample extends Component {
    constructor() {
        super()
        this.state = {
            refreshing: false,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            results: [{
                nick: 'nick',
                score: 'score',
                total: 'total',
                type: 'type',
                date: 'date',

            }]

        }
    }

    componentWillMount() {
        this.setState({
            dataSource:
                this.state.dataSource.cloneWithRows(this.state.results)
        })
    }

    render() {
        return (
            <View style={{flex: 1,backgroundColor: '#4f5ca5'}}>
                <Header
                    leftComponent={{
                        icon: 'menu',
                        color: '#D4D4D4',
                        onPress: () => alert('ea'),
                    }}
                    centerComponent={{text: 'Results', style: {color: '#000000', fontSize: 30,}}}
                    backgroundColor='#303060'
                />
                <ListView
                    refreshControl={this._refreshControl()}
                    dataSource={this.state.dataSource}
                    renderRow={(results) => this._renderListView(results)}>
                </ListView>
            </View>
        )
    }

    _renderListView(results) {
        return (
            <View style={styles.listView}>
                <Text style={styles.ramka}>{results.nick}</Text>
                <Text style={[styles.ramka,styles.small]}>{results.score}</Text>
                <Text style={[styles.ramka,styles.small]}>{results.total}</Text>
                <Text style={styles.ramka}>{results.type}</Text>
                <Text style={styles.ramka}>{results.date}</Text>
            </View>
        )
    }

    _refreshControl() {
        return (
            <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={() => this._refreshListView()}/>
        )
    }

    _refreshListView() {
        //Start Rendering Spinner
        this.setState({refreshing: true})
        this.state.results.push(
            {
                nick: 'Marek',
                score: 18,
                total: 20,
                type: 'historia',
                date: '2018-11-22'
            }
        )
        //Updating the dataSource with new data
        this.setState({
            dataSource:
                this.state.dataSource.cloneWithRows(this.state.results)
        })
        this.setState({refreshing: false}) //Stop Rendering Spinner
    }

}

const styles = StyleSheet.create({

    listView: {
        flex: 1,
        backgroundColor: '#4f5ca5',
        borderColor: '#dddddd',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'nowrap'

    },
    ramka: {
        borderWidth: 0.5,
        paddingTop:10,
        height:50,
        width:80,
        flexWrap: 'nowrap'
    },
    small:{
        width: 45,
    }

})

module.exports = RefreshControlExample