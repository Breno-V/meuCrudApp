export default async function editPerson(id, person) {
    return (
        fetch(`http://localhost:3000/people/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(person),
    }))
}