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
  $hoverTextColor?: string;
}

/** Register(공고 등록) 관련 타입 */
export interface ProgramRegisterInfoType {
  [index: string]: string;
  photoUrl: string;
  programName: string;
  location: string;
  recruitStartDate: string;
  recruitEndDate: string;
  activeStartDate: string;
  activeEndDate: string;
  contact: string;
  contactNumber: string;
  programLink: string;
  hashTag: string;
  description: string;
}
