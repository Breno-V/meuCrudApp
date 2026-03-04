import {TouchableOpacity} from'react-native';
import styles from '../styles/button.styles.js';
export default function Button({title, onPress}) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            {title}
        </TouchableOpacity>
    );
}