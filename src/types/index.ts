/** 여행 프로그램 관련 type */
export interface ProgramMainInfoType {
  id: number;
  hashTag: string[];
  photoUrl: string;
  programName: string;
  remainDay: string;
  like: number;
}

/** Search 페이지의 Filter 관련 type */
export interface FilterListType {
  title: string;
  enTitle: string;
  buttonSize: 'small' | 'medium' | 'large';
  calendar: boolean;
  items: string[];
}

export interface FilterInputType {
  sort: string;
  location: string;
  program: string;
  category: string;
  recruitStartDate: string;
  recruitEndDate: string;
  tripStartDate: string;
  tripEndDate: string;
}

/** Search 페이지의 CustomCalendar 관련 type */
export type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];

/** Component 관련 type */
export interface ButtonStyleType {
  $buttonColor: string;
  $buttonWidth: string;
  $buttonHeight: string;
}
