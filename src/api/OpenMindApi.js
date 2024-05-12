const OPENMIND_API = "https://openmind-api.vercel.app/6-7/";
const SUBJECTS = "subjects";
const QUESTIONS = "questions";
const ANSWERS = "answers";

export async function getQuestions(params = {}) {
  const query = new URLSearchParams(params).toString();

  try {
    const response = await fetch(
      `${OPENMIND_API}${SUBJECTS}/5819/${QUESTIONS}/?${query}/`
    );

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

export default getQuestions;
