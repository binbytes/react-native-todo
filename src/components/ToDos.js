import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions/todo.action';

import ToDo from './ToDo';
import theme from '../themes/index.theme'

const styles = theme.toDos

class ToDos extends Component {

    componentDidMount(){
        this.props.get()
    }
    
    render() {
        if(this.props.data.length > 0){
            return(
                <View>
                    <FlatList
                        style={styles.faltList}
                        data={this.props.data}
                        renderItem={({item, index}) => <ToDo task={item} index={index} />}
                        keyExtractor={(item, index) => `${index}`} 
                        ListFooterComponent={() => <View style={styles.footer} />} />
                </View>
            )
        } else {
            return(
                <View style={styles.container}>
                    <Text style={styles.text}>Task not available</Text>
                </View>
            )
        }
    }
}


function mapStateToProps(state, props){
    return {
        data: state.todoReducer.data
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDos)