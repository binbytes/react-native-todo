import { StyleSheet } from 'react-native';

import color from './color.config'
import constants from '../../mix/constants'

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.trasparentBackground
    },
    dialog:{
        elevation: 2,
        width: constants.WIDTH * .75,
        borderRadius: 10,
        backgroundColor: color.primary,
        borderColor: color.primary,
        borderWidth: .5,
    },
    header:{
        borderBottomColor: color.light_gray,
        borderBottomWidth: 1,
        padding: 12,
        paddingBottom: 16,
    },
    headerText:{
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    },
    content:{
        padding: 8
    },
    textInputContainer:{
        margin: 8,
        backgroundColor: color.primary,
        borderBottomColor: color.gray,
        borderBottomWidth: 1
    },
    textInput:{
        padding: 8
    },
    addButtonContainer:{
        elevation: 2, 
        padding: 10,
        borderRadius: 50, 
        borderWidth: 1, 
        backgroundColor: color.accent, 
        borderColor: color.accent,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 8,
        marginBottom: 12
    },
    addButtonText:{ 
        textAlign: 'center',
        fontSize: 16,
        color: color.primary
    }

})

export default styles