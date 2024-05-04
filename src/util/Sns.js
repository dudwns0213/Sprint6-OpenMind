const { Kakao } = window;

export const shareKakao = (name, src, Url) => {
  if (!Kakao.isInitialized()) Kakao.init("ea948df165b05ad3f992fcef47a73ea2");

  Kakao.Share.sendDefault({
    objectType: "feed",
    content: {
      title: "익명으로 질문을 남기세요 !",
      description: `${name}에게 질문을 남기기`,
      imageUrl: `${src}`,
      link: {
        mobileWebUrl: Url,
        webUrl: Url,
      },
    },
    buttons: [
      {
        title: "질문 보내기",
        link: {
          mobileWebUrl: Url,
          webUrl: Url,
        },
      },
    ],
  });
};
