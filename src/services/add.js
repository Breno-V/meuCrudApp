export default async function addPerson(person) {
    return fetch(`https://unmingled-vincent-unsecured.ngrok-free.dev/people`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(person),
    })
}