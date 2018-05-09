import { StyleSheet } from 'react-native';

import color from './color.config'

const styles = StyleSheet.create({
    container : {
        elevation: 2,
        backgroundColor: color.primary,
        padding: 12,
        marginBottom: 12,
        marginLeft: 8,
        marginRight: 8,
        borderRadius: 50,
        borderWidth: .5,
        borderColor: '#cccccccc'
    },
    content:{
        flexDirection: 'row',
        paddingLeft: 12,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    taskLabel:{
        fontSize: 18
    },
    completedTask:{
        fontSize: 18,
        color: color.gray,
        textDecorationLine: 'line-through'
    }
})

export default styles