import { API_URL } from "../config/api.js"

export default async function deletePerson(id) {
    return (
        fetch(`${API_URL}/people/${id}`, {
        method: 'DELETE',
    }))
}