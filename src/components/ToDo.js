import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions/todo.action';
import CheckBox from './CheckBox';

import theme from '../themes/index.theme';

const styles = theme.toDo

class ToDo extends Component {

    constructor(props){
        super(props)
    }

    render() {
        const index = this.props.index
        return(
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={this.props.data[index].isCompleted ? styles.completedTask : styles.taskLabel}>{this.props.data[index].label}</Text>
                    <CheckBox 
                        checked={this.props.data[index].isCompleted}
                        onChange={this.onCheckChange}/>
                </View>
            </View>
        )
    }

    onCheckChange = (checked) => {
        this.props.data[this.props.index].isCompleted = !this.props.data[this.props.index].isCompleted
        this.props.add(JSON.stringify(this.props.data));
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

export default connect(mapStateToProps, mapDispatchToProps)(ToDo)