import { StyleSheet } from 'react-native';

import color from './color.config'

const styles = StyleSheet.create({
    conatiner : {
        flex: 1,
        backgroundColor: '#f9f9f9'
    },
    addButtonContainer: {
        position: 'absolute', 
        left: 0, 
        right: 0, 
        bottom: 0,
        alignItems: 'center'
    },
    addButton: {
        margin: 4,
        marginBottom: 32,
        padding: 16,
        backgroundColor: color.accent,
        borderColor: color.accent,
        borderRadius: 50,
        elevation: 2,
    }
})

export default styles