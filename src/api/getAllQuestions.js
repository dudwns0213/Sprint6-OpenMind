const OPENMIND_API = "https://openmind-api.vercel.app/6-7/";
const SUBJECTS = "subjects";
const QUESTIONS = "questions";

export async function getAllQuestions(subjectId) {
  try {
    const response = await fetch(
      `${OPENMIND_API}${SUBJECTS}/${subjectId}/${QUESTIONS}/?limit=999&offset=0"`
    ); //subjectId 동적으로 받도록 수정

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

export default getAllQuestions;
