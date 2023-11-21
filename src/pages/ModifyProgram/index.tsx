import { CommonInner } from '@/style/common';
import styled from 'styled-components';
import UploadImage from '../RegisterProgram/UploadImage';
import RequiredInfo from '../RegisterProgram/RequiredInfo';
import DetailInfo from '../RegisterProgram/DetailInfo';
import { ALERT_MESSAGE, DEFAULT_REQUIRED_CONTENT } from '@/constants/Register';
import { ManagerAPI, useGetExistingProgram } from '@/apis/manager';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ButtonList from './ButtonList';

const EditProgram = () => {
  const { _programId } = useParams();
  const programId = Number(_programId);
  const [photoFile, setPhotoFile] = useState('');
  const [photoName, setPhotoName] = useState<File | null>(null);
  const [programContent, setProgramContent] = useState(
    JSON.parse(JSON.stringify(DEFAULT_REQUIRED_CONTENT)),
  );
  const [isPossibleSubmit, setIsPossibleSubmit] = useState<boolean>(true);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const formData = new FormData();
  const { data: programData } = useGetExistingProgram(
    programId ? programId : -1,
  );

  useEffect(() => {
    if (programData) {
      let insertData = JSON.parse(JSON.stringify(DEFAULT_REQUIRED_CONTENT));

      Object.keys(programData.result).map(data => {
        if (insertData[data] !== undefined)
          insertData[data] = programData.result[data];
      });

      setProgramContent(insertData);
      setPhotoFile(programData.result.photo);
      setPhotoName(programData.result.photo);
      //console.log(programData.photo.blob());
    }
  }, [programData]);

  const handleChangeUploadImage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    console.log('파일 리더 함수 돈다~!');
    if (!event.target.files) {
      return;
    }
    let reader = new FileReader();

    reader.onload = function (event) {
      if (event.target) {
        const image = event.target.result?.toString()
          ? event.target.result?.toString()
          : '';
        setPhotoFile(image);
      }
    };
    reader.readAsDataURL(event.target.files[0]);
    setPhotoName(event.target.files[0]);
    console.log(programContent);
  };

  const handleUploadButtonClick = () => {
    if (!inputRef.current) return;
    inputRef.current.click();
  };

  const handleImageCloseClick = () => {
    setPhotoFile('');
    setPhotoName(null);
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
    result = result && photoName !== null;
    setIsPossibleSubmit(result);

    const tagString = programContent['hashtag']
      .replace(/#/g, '')
      .replace(/ /g, '');

    if (result) {
      if (window.confirm(ALERT_MESSAGE.register)) {
        programId && formData.append('id', String(programId));
        photoName && formData.append('photo', photoName);

        Object.keys(programContent).map(key => {
          if (programContent[key] !== '' && key === 'hashtag') {
            return formData.append(key, tagString);
          }
          if (programContent[key] !== '' && key !== 'hashtag')
            return formData.append(key, programContent[key]);
        });

        ManagerAPI.postEditProgram(formData).then(data =>
          navigate(`/detailProgram/${programContent['programName']}/${data}`, {
            state: { isefetch: true },
          }),
        );
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Container>
      <CommonInner>
        <UploadImage
          photoFile={photoFile}
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
        />
      </CommonInner>
    </Container>
  );
};

export default EditProgram;

const Container = styled.div`
  padding-top: 15px;
  padding-bottom: 268px;
`;
