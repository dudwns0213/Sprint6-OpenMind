export async function getSubject() {
    const response = await fetch('https://openmind-api.vercel.app/6-7/subjects/?limit=999&offset=0',
        {method: 'GET'})
    const body = await response.json();
    return body;
}