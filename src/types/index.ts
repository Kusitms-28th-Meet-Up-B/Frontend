export interface FilterListType {
  title: string;
  buttonSize: 'small' | 'medium' | 'large';
  calendar: boolean;
  items: string[];
}

export interface ButtonStyleType {
  $buttonColor: string;
  $buttonWidth: string;
  $buttonHeight: string;
}
