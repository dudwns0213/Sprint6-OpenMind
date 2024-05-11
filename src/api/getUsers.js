const OPENMIND_API = "https://openmind-api.vercel.app/6-7/";
const SUBJECTS = "subjects";
export async function getUsers(params = {}) {
  const query = new URLSearchParams(params).toString();

  try {
    const response = await fetch(`${OPENMIND_API}${SUBJECTS}/6047/?${query}/`);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
}

export default getUsers;
