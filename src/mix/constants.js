import { Dimensions } from 'react-native'

const KEY = 'DATA_KEY'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const THEME = 'defaultTheme'

const defaultConfig = {
    KEY,
    THEME,
    WIDTH,
    HEIGHT
}

export default defaultConfig