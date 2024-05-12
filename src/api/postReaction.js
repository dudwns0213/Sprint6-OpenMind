async function postReaction(id, type) {
  const url = `https://openmind-api.vercel.app/6-7/questions/${id}/reaction/`;
  const data = { type };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Request failed with status " + response.status);
    }

    const responseData = await response.json();
    return responseData; // 응답 데이터 반환
  } catch (error) {
    console.error("Error during the fetch operation: ", error.message);
    throw error; // 에러를 다시 throw하여 호출한 컴포넌트에서 처리할 수 있도록 함
  }
}

export default postReaction;
