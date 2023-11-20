import Axios from '..';

export const toBase64 = (file: File) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

export const postBoardData = async (
  writeType: string,
  selected: string,
  title: string,
  content: string,
  tags: string[] | undefined,
  inputFile: File | undefined,
) => {
  const postData = {
    category: selected,
    title,
    body: content,
    hashTags: tags?.join(','),
    file: inputFile,
  };

  if (writeType === 'review') {
    // 지원 후기
    try {
      const res = await Axios.post('/reviews/saveReview', null, {
        params: postData,
      });
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  } else if (writeType === 'archive') {
    // 자료실
    try {
      const res = await Axios.post('/archives/saveReview', null, {
        params: postData,
      });
    } catch (e) {
      console.error(e);
    }
  }
};
