export async function getCard({ sort, offset, limit }) {
  const response = await fetch(
    `https://openmind-api.vercel.app/6-7/subjects/?sort=${sort}&offset=${offset * limit}&limit=${limit}`
  );
  const body = await response.json();
  return body;
}
