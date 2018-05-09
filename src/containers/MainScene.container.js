import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

import AddToDo from '../components/AddToDo';
import ToDos from '../components/ToDos';

import theme from '../themes/index.theme';
import color from '../themes/default/color.config';

const styles = theme.mainStyle

export default class MainScene extends Component {
  render() {
    return (
      <View style={styles.conatiner}>
        <ToDos />
        <LinearGradient colors={['#f9f9f900', '#f9f9f9f9', '#f9f9f9']} style={styles.addButtonContainer}>
          <TouchableOpacity onPress={() => this.addToDoRef.getWrappedInstance().openDialog()}>
            <Icon size={36} name={'add'} style={styles.addButton} color={color.primary} />
          </TouchableOpacity>
        </LinearGradient>
        <AddToDo ref={instance => this.addToDoRef = instance} />
      </View>
    )
  }
}