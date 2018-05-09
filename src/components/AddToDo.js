import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable'

import * as Actions from '../actions/todo.action';

import theme from '../themes/index.theme'
import color from '../themes/default/color.config'

const styles = theme.addToDo

class AddToDo extends Component {

    constructor(props){
        super(props)
        this.state = {
            isOpen: false,
            task: ''
        }
    }

    render(){
        if(this.state.isOpen){
            return(
                <TouchableOpacity
                    style={styles.container}
                    underlayColor="#333333cc"
                    onPress={this.closeDialog}>
                    <Animatable.View 
                        useNativeDriver={true}
                        animation="flipInX"
                        duration={550}
                        ref={instance => this.addToDoView = instance}
                        style={styles.dialog}>
                        <View style={styles.header}>
                            <Text style={styles.headerText} >TASK</Text>
                        </View>
                        <View style={styles.content}>
                            <View style={styles.textInputContainer}>
                                <TextInput 
                                autoFocus={true}
                                style={styles.textInput}
                                underlineColorAndroid={'transparent'}
                                placeholder={'Enter Task here'}
                                placeholderTextColor={color.gray}
                                onChangeText={(text) => this.setState({task: text})} />
                            </View>
                            <TouchableOpacity 
                                style={styles.addButtonContainer}
                                onPress={this.onAddToDo}>
                                <Text style={styles.addButtonText}>ADD</Text>
                            </TouchableOpacity>
                        </View>
                    </Animatable.View>
                </TouchableOpacity>
            )
        } else {
            return(<View />)
        }
    }

    openDialog(){
        this.setState({isOpen: true})
    }
    
     closeDialog = () => {
         this.addToDoView.flipOutX(550).then(() => this.setState({isOpen: false}))
    }

    onAddToDo = () => {
        const task = {
            label : this.state.task,
            isCompleted: false
        }
        this.props.data.push(task)
        this.props.add(JSON.stringify(this.props.data));
        this.closeDialog()
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

export default connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})(AddToDo)