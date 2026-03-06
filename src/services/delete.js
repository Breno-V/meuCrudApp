export default async function deletePerson(id) {
    return (
        fetch(`https://unmingled-vincent-unsecured.ngrok-free.dev/people/${id}`, {
        method: 'DELETE',
    }))
}