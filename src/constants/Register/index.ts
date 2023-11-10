import { ProgramRegisterInfoType } from '@/types';

export const DEFAULT_REQUIRED_CONTENT: ProgramRegisterInfoType = {
  photoUrl: '',
  programName: '',
  location: '',
  recruitStartDate: '',
  recruitEndDate: '',
  activeStartDate: '',
  activeEndDate: '',
  contact: '',
  contactNumber: '',
  programLink: '',
  hashTag: '',
  description: '',
};

export const LOCATION_LIST = [
  '서울',
  '인천',
  '대전',
  '대구',
  '광주',
  '부산',
  '울산',
  '세종특별자치시',
  '경기도',
  '강원특별자치도',
  '충청북도',
  '충청남도',
  '경상북도',
  '경상남도',
  '전라북도',
  '전라남도',
  '제주도',
];

const EXAMPLE_HEADER =
  '해당 공고에 대해 더 자세히 설명해주세요.\n\n\n예시)\n\n';

const EXAMPLE_WHO =
  '참여 대상 : 충남 거주자를 제외한 태안 여행 희망자 (1인 또는 2인/팀)\n\n';

const EXAMPLE_CONTENT =
  '주요 내용 : 태안군에 머물면서 코스여행 진행 (4가지 유형 코스 중 선택)\n\n';

const EXAMPLE_APPLY =
  '신청 방법 : 신청서류 작성 후 네이버 설문지 접수\n\t\t   신청서, 개인정보동의서, 서약서, 주민등록초본\n\t\t   안내 : 태안군 공식 블로그\n\t\t   접수 : http://naver.me\n\n';

const EXAMPLE_DETAIL =
  '지원 내용 : 숙박비 1일/1팀 7만원\n\t\t   체험활동비 1일/1인 2만원\n\t\t   여행자보험비 1인 2만원\n\n';

const EXAMPLE_RESULT = '결과 통보 : 2023. 10. 31 (화)까지 개별통보';

export const DETAIL_INFO_PLACEHOLDER =
  EXAMPLE_HEADER +
  EXAMPLE_WHO +
  EXAMPLE_CONTENT +
  EXAMPLE_APPLY +
  EXAMPLE_DETAIL +
  EXAMPLE_RESULT;
