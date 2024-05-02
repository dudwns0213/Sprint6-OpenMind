import styled from 'styled-components';
import '../../styles/global.css';
import {colors} from '../../styles/colors';
import messageIcon from "../../assets/icons/ic_messages.svg";
import closeIcon from "../../assets/icons/ic_close.svg";
import iconProfile from "../../assets/icons/ic_person.svg";

const ModalBackground = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.56);
`

const PostModalPage = styled.div`
    width: 612px;
    height: 454px;
    border-radius: 24px;
    border-line: none;
    box-shadow: 0px 16px 20px rgba(48, 48, 48, 0.62);
    background-color: ${colors.GRAYSCALE_10};
    padding: 40px 40px 104px;
`

const ModalPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    width: 532px;
    padding: 0;
`


const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    height: 30px;
    font-family: Actor;
    font-size: 24px;
    color: #000000;
    margin-bottom: 40px;
`

const HeaderContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const ModalHeaderIcon = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 7px;
`
const ModalClose = styled.img`
    width: 28px;
    height: 28px;
    cursor: pointer;
`

const ModalContent = styled.div`
    height: 274px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
`
const IconProfile = styled.img`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    `

const ModalProfile = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 30px;
`

const ProfileText = styled.p`
    font-size: 18px;
`

const TextContainer =styled.div`
    background-color: ${colors.GRAYSCALE_20};
    height: 180px;
    width: 532px;
    padding: 16px;
    border-radius: 8px;
    border: none;
    position: relative;
`

const ModalTextArea = styled.textarea`
    position: absolute;
    /* --size-- */
    width: 496px;
    height: 144px;
    /* --style-- */
    background-color: ${colors.GRAYSCALE_20};
    overflow-y: scroll;
    overflow-x: hidden;
    border: none;
    color: #000000;
    font-size: 16px;
    resize: none;

    &:focus {
        border: solid 1px ${colors.BROWN_40}
    };

    ::placeholder {
        color: ${colors.GRAYSCALE_40};
        font-size: 16px;
    }
`

const ModalPostButton = styled.button`
    background-color: ${colors.BROWN_30};
    border-radius: 8px;
    border: none;
    height: 46px;
    color: #ffffff;
    font-size: 16px;
`



function PostModal() {
    return (
        <div className="global">
            <ModalBackground>
                <PostModalPage>
                    <ModalPageContainer>
                        <ModalHeader>
                            <HeaderContent>
                                <ModalHeaderIcon src={messageIcon}/>
                                <p>질문을 작성하세요</p>
                            </HeaderContent>
                            <a href="./Feeds.jsx"><ModalClose src={closeIcon}/></a> 
                        </ModalHeader>
                        <ModalContent>
                            <ModalProfile>
                                <ProfileText>To.</ProfileText>
                                <IconProfile src={iconProfile}/><p>아초는 고양이</p>
                            </ModalProfile>
                            <TextContainer>
                                <ModalTextArea placeholder="질문을 입력해주세요"/>
                            </TextContainer>
                            <ModalPostButton>질문 보내기</ModalPostButton>
                        </ModalContent>
                    </ModalPageContainer>
                </PostModalPage>
            </ModalBackground>
        </div>
    )
}



export default PostModal;