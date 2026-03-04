import {TouchableOpacity, Text} from'react-native';
import buttonStyles from '../styles/button.styles.js';

export default function Button({title, onPress, backgroundColor}) {
    return (
        <TouchableOpacity style={[buttonStyles.button, { backgroundColor }]} onPress={onPress}>
            <Text>{title}</Text>
        </TouchableOpacity>
    );
}