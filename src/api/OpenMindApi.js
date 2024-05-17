const OPENMIND_API = "https://openmind-api.vercel.app/6-7/";
const SUBJECTS = "subjects";
const QUESTIONS = "questions";
const ANSWERS = "answers";

export async function getQuestions(subjectId, params = {}) {
  // 특정 사용자 질문 조회(쿼리변동가능)
  const query = new URLSearchParams(params).toString();

  try {
    const response = await fetch(
      `${OPENMIND_API}${SUBJECTS}/${subjectId}/${QUESTIONS}/?${query}/`
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

export async function getSubject() {
  //사용자 목록 전체 조회 MainPage에서 사용
  const response = await fetch(
    `${OPENMIND_API}${SUBJECTS}/?limit=999&offset=0/`,
    { method: "GET" }
  );
  const body = await response.json();
  return body;
}

export async function patchAnswers(answerData, answerId) {
  //답변 부분수정(patch)
  try {
    const response = await fetch(`${OPENMIND_API}${ANSWERS}/${answerId}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(answerData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const body = await response.json();
    return body;
  } catch (error) {
    console.error("Failed to post question:", error);
    throw error;
  }
}

export async function deleteAnswers(questionId) {
  //답변 삭제
  try {
    const response = await fetch(`${OPENMIND_API}${QUESTIONS}/${questionId}/`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
  } catch (error) {
    console.error("Failed to post question:", error);
    throw error;
  }
}

export async function createAnswers(questionId, formData) {
  //답변 생성
  try {
    const response = await fetch(
      `${OPENMIND_API}${QUESTIONS}/${questionId}/${ANSWERS}/`,
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

export async function deleteQuestion(id) {
  //질문 삭제
  fetch(`${OPENMIND_API}${QUESTIONS}/${id}/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }).then((response) => response.text());
}

export async function getAllQuestions(subjectId) {
  //특정 사용자 전체 질문 조회
  try {
    const response = await fetch(
      `${OPENMIND_API}${SUBJECTS}/${subjectId}/${QUESTIONS}/?limit=999&offset=0"`
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

export async function getUsers(subjectId, params = {}) {
  //특정 사용자 조회

  const query = new URLSearchParams(params).toString();

  try {
    const response = await fetch(
      `${OPENMIND_API}${SUBJECTS}/${subjectId}/?${query}/`
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

export async function getQuestionCard({ sort, offset, limit }) {
  //사용자 질문 갯수 Card에 표시
  const response = await fetch(
    `${OPENMIND_API}${SUBJECTS}/?sort=${sort}&offset=${(offset - 1) * limit}&limit=${limit}`
  );
  const body = await response.json();
  return body;
}

export async function postReaction(id, type) {
  // 좋아요, 싫어요 추가
  const url = `${OPENMIND_API}${QUESTIONS}/${id}/reaction/`;
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

export async function rejectAnswer(answerId, data) {
  //답변 거절 기능
  const url = `${OPENMIND_API}${ANSWERS}/${answerId}/`;

  try {
    const response = await fetch(url, {
      method: "PATCH",
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
