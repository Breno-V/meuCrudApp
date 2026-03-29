const API_URL = process.env.EXPO_PUBLIC_API_URL;

export async function addPerson(person) {
    try {
        const response = await fetch(`${API_URL}/people`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': 'true'
            },
            body: JSON.stringify(person),
        });

        return response;
    } catch (error) {
        console.error("Error adding person:", error);
    }
}

export async function deletePerson(id) {
    try {
        const response = await fetch(`${API_URL}/people/${id}`, {
            headers: {
                'ngrok-skip-browser-warning': 'true'
            },
            method: 'DELETE',
        });
        return response;
    } catch (error) {
        console.error("Error deleting person:", error);
    }
}

export async function editPerson(id, person) {
    try {
        const response = await fetch(`${API_URL}/people/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': 'true'
            },
            body: JSON.stringify(person),
        });
        return response;
    } catch (error) {
        console.error("Error editing person:", error);
    }
}
