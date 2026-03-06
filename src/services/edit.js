export default async function editPerson(id, person) {
    return (
        fetch(`https://unmingled-vincent-unsecured.ngrok-free.dev/people/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(person),
    }))
}