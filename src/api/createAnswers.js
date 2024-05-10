export async function createAnswers(formData) {
  try {
    const response = await fetch(
      `https://openmind-api.vercel.app/6-7/questions/10161/answers/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error(`답변 생성에 실패했습니다.`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

export default createAnswers;
