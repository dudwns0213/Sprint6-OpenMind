export async function deleteQuestion(id) {
  console.log(id);

  fetch(`https://openmind-api.vercel.app/6-7/questions/${id}/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then((response) => response.text())
    .then((body) => {
      console.log(body);
      //const reader = body.getReader();
    });
}

export default deleteQuestion;
