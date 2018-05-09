import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import theme from '../themes/index.theme'
import color from '../themes/default/color.config'

const styles = theme.checkBox

class CheckBox extends Component {

    constructor(props){
        super(props)
        this.state = {
            checked: this.props.checked
        }
    }

    render() {
        return(
            <TouchableOpacity style={styles.container} onPress={this.onChange}>
                <Icon
                    name={this.state.checked ? 'check-circle' : 'radio-button-unchecked'}
                    color={color.primaryDark}
                    size={30} />
            </TouchableOpacity>
        )
    }

    onChange = () => {
        this.setState({checked: !this.state.checked}, () => {
            this.props.onChange(this.state.checked)
        })
    }
}

export default CheckBox