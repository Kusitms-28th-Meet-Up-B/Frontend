import { InputType } from '@/types';

export const CheckDuplicate = (keyName: string, value: string): boolean => {
  try {
    // 서버에 중복 검사 요청
    // 중복이면 true, 아니면 false
  } catch (error) {
    console.error(error);
  }
  return true;
};

export const checkIsOkToSignUp = (
  isGeneralUser: boolean,
  inputData: InputType,
): boolean => {
  switch (isGeneralUser) {
    case true:
      return (inputData?.name &&
        inputData?.birth &&
        inputData?.nickname &&
        inputData?.id &&
        inputData?.password &&
        inputData?.password === inputData?.repassword) as boolean;
    case false:
      return (inputData?.name &&
        inputData?.registrationNumber &&
        inputData?.deptName &&
        inputData?.mgrName &&
        inputData?.id &&
        inputData?.password &&
        inputData?.password === inputData?.repassword) as boolean;
  }
};
