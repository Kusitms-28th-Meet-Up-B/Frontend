import { useState, useRef } from 'react';
import DetailInfo from './DetailInfo';
import RequiredInfo from './RequiredInfo';
import UploadImage from './UploadImage';
import { CommonInner } from '@/style/common';
import ButtonList from './ButtonList';
import styled from 'styled-components';
import { ALERT_MESSAGE, DEFAULT_REQUIRED_CONTENT } from '@/constants/Register';
import { useNavigate } from 'react-router-dom';

const RegisterProgram = () => {
  const [programContent, setProgramContent] = useState(
    DEFAULT_REQUIRED_CONTENT,
  );
  const [isPossibleSubmit, setIsPossibleSubmit] = useState<boolean>(true);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const handleChangeUploadImage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (!event.target.files) {
      return;
    }
    // TODO : 이미지 업로드하면 서버에 이미지 POST
    console.log(event.target.files[0].name);
    let reader = new FileReader();

    reader.onload = function (event) {
      if (event.target) {
        const image = event.target.result?.toString();
        setProgramContent({
          ...programContent,
          photoUrl: image ? image : '',
        });
      }
    };

    reader.readAsDataURL(event.target.files[0]);

    // 관련 함수 예시 미리 적어둠.
    /* const formData = new FormData();
    formData.append('image', e.target.files[0]);

    axios({
      baseURL: API_HOST,
      url: '/images/:username/thumbnail',
      method: 'POST',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      }); */
  };

  const handleUploadButtonClick = () => {
    if (!inputRef.current) return;
    inputRef.current.click();
  };

  const handleImageCloseClick = () => {
    setProgramContent({ ...programContent, photoUrl: '' });
  };

  const handleCancel = () => {
    if (window.confirm(ALERT_MESSAGE.cancel)) {
      navigate('/');
    }
  };

  const handleRegister = () => {
    let result = true;
    let keyList = Object.keys(programContent);
    keyList.pop();

    keyList.map(key => {
      result = result && programContent[key] !== '';
    });

    result = result && programContent.programName.length <= 50;
    setIsPossibleSubmit(result);
    console.log(result);

    if (result) {
      if (window.confirm(ALERT_MESSAGE.register)) {
        // TODO: 공고 등록 API 연결
      }
    }
  };

  const handleDraft = () => {
    if (window.confirm(ALERT_MESSAGE.draft)) {
      console.log('확인');
      // TODO: 임시 저장 API 연결
    }
  };

  return (
    <Container>
      <CommonInner>
        <UploadImage
          photoUrl={programContent.photoUrl}
          inputRef={inputRef}
          handleChangeUploadImage={handleChangeUploadImage}
          handleCloseClick={handleImageCloseClick}
          handleUploadButtonClick={handleUploadButtonClick}
          isPossibleSubmit={isPossibleSubmit}
        />
        <RequiredInfo
          programContent={programContent}
          setProgramContent={setProgramContent}
          isPossibleSubmit={isPossibleSubmit}
        />
        <DetailInfo content={programContent} setContent={setProgramContent} />
        <ButtonList
          handleCancel={handleCancel}
          handleRegister={handleRegister}
          handleDraft={handleDraft}
        />
      </CommonInner>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 15px;
  padding-bottom: 268px;
`;

export default RegisterProgram;
