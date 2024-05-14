export async function getSubject() {
  const response = await fetch(
    "https://openmind-api.vercel.app/6-7/subjects/?limit=999&offset=0",
    { method: "GET" }
  );
  const body = await response.json();
  return body;
}
const OPENMIND_API = "https://openmind-api.vercel.app/6-7/";
const SUBJECTS = "subjects";
const QUESTIONS = "questions";
const ANSWERS = "answers";

export async function getQuestions(subjectId, params = {}) {
  const query = new URLSearchParams(params).toString();

  try {
    const response = await fetch(
      `${OPENMIND_API}${SUBJECTS}/${subjectId}/${QUESTIONS}/?${query}/`
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

export default getQuestions;
