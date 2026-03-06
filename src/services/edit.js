import { API_URL } from "../config/api.js"

export default async function editPerson(id, person) {
    return (
        fetch(`${API_URL}/people/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(person),
    }))
}