const API_URL = process.env.EXPO_PUBLIC_API_URL;

export async function addPerson(person) {
    return (
        await fetch(`${API_URL}/person`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': 'true'
            },
            body: JSON.stringify(person),
        })
    )
}

export async function deletePerson(id) {
    return (
        await fetch(`${API_URL}/person/${id}`, {
            headers: {
                'ngrok-skip-browser-warning': 'true'
            },
            method: 'DELETE',
        }))
}

export async function editPerson(id, person) {
    return (
        await fetch(`${API_URL}/person/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': 'true'
            },
            body: JSON.stringify(person),
        }))
}
