import { ActivityIndicator } from 'react-native';

export default function Loading() {

    return (
        <ActivityIndicator size="large" color="#a79847" animating={true} />
    );
}