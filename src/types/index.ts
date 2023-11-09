/* 프로그램 관련 타입 */
export interface ProgramMainInfoType {
  id: number;
  hashTag: string[];
  photoUrl: string;
  programName: string;
  remainDay: string;
  like: number;
}

export interface PostingType {
  boardName: string;
  title: string;
  id: number;
  nickName: string;
  registerDate: string;
}

export interface ProgramDetailInfoType extends ProgramMainInfoType {
  location: string;
  recruitStartDate: string;
  recruitEndDate: string;
  tripStartDate: string;
  tripEndDate: string;
  contact: string;
  contactNumber: string;
  programLink: string;
}

/* button 관련 타입 */
export interface ButtonStyleType {
  $buttonColor: string;
  $buttonWidth: string;
  $buttonHeight: string;
}

export interface InputType {
  [key: string]: string | null;
}

export interface SignUpProps {
  inputData: InputType;
  setInputData: React.Dispatch<React.SetStateAction<InputType>>;
  profile: File | null;
  setProfile: React.Dispatch<React.SetStateAction<File | null>>;
}
