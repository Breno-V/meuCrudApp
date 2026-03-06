import { API_URL } from "../config/api.js"

export default async function addPerson(person) {
    return fetch(`${API_URL}/people`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(person),
    })
}