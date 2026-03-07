const API_URL = process.env.EXPO_PUBLIC_API_URL;

export default async function deletePerson(id) {
    return (
        fetch(`${API_URL}/people/${id}`, {
            headers: {
                'ngrok-skip-browser-warning': 'true'
            },
            method: 'DELETE',
        }))
}