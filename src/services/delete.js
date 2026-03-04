export default async function deletePerson(id) {
    return (
        fetch(`http://localhost:3000/people/${id}`, {
        method: 'DELETE',
    }))
}