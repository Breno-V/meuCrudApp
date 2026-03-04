export default async function addPerson(person) {
    return fetch(`http://localhost:3000/people`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(person),
    })
}