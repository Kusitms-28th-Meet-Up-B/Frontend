/* 프로그램 관련 타입 */
export interface ProgramMainInfoType {
  id: number;
  hashTag: string[];
  photoUrl: string;
  programName: string;
  remainDay: string;
  like: number;
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

/* 포스팅 상세 관련 타입 */
export interface PostingType {
  type: string;
  title: string;
  nickName: string;
  content: string;
  hashTags: string[];
  registeredDate: string;
  attatchment: string;
  isLike: boolean;
  setIsLike: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface PostingDataType {
  type: string;
  title: string;
  nickName: string;
  content: string;
  hashTags: string[];
  registeredDate: string;
  attatchment: string;
}
