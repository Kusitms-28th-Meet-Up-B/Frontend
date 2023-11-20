import { CommonInner } from '@/style/common';
import styled from 'styled-components';
import MapButton from './MapButton';
import SearchResult from './SearchResult';
import FilterBar from './FilterBar';
import { useEffect, useState } from 'react';
import { FilterInputType } from '@/types';
import { DEFAULT_FILTER_LIST } from '@/constants/Search';
import ProgramSearchBar from './ProgramSearchBar';
import { useNavigate, useSearchParams } from 'react-router-dom';

const TEST = [
  {
    id: 37,
    photoUrl:
      'https://dpylr00zltv9q.cloudfront.net/994e3c63-57e4-4299-85ac-51da3d628ee9.png',
    programName: '진짜 찐막 테스트 중',
    latitude: null,
    longitude: null,
    remainDay: '마감',
    hashTag: ['test', 'test2', 'test3'],
    userLikeCheck: false,
    like: 0,
  },
  {
    id: 36,
    photoUrl:
      'https://dpylr00zltv9q.cloudfront.net/6f22ca43-877f-44bd-80b7-ff9ca24ea296.png',
    programName: '최종 테스트 중',
    latitude: null,
    longitude: null,
    remainDay: '마감',
    hashTag: ['#test', ' #test2'],
    userLikeCheck: false,
    like: 0,
  },
  {
    id: 35,
    photoUrl:
      'https://dpylr00zltv9q.cloudfront.net/a711cd6c-719a-460e-bbec-b2d9de933312.png',
    programName: 'testest',
    latitude: null,
    longitude: null,
    remainDay: '마감',
    hashTag: ['te'],
    userLikeCheck: false,
    like: 0,
  },
  {
    id: 34,
    photoUrl:
      'https://dpylr00zltv9q.cloudfront.net/ab107f68-abf8-4e24-a06a-f00a512cd043.png',
    programName: 'test2',
    latitude: null,
    longitude: null,
    remainDay: '마감',
    hashTag: ['#hi'],
    userLikeCheck: false,
    like: 0,
  },
  {
    id: 33,
    photoUrl: null,
    programName: 'test2',
    latitude: null,
    longitude: null,
    remainDay: '마감',
    hashTag: ['#hi'],
    userLikeCheck: false,
    like: 0,
  },
  {
    id: 32,
    photoUrl:
      'https://dpylr00zltv9q.cloudfront.net/4a6de269-c1ef-4387-a24a-d167ff4eb6e2.png',
    programName: 'sdfsdfsdfsdf',
    latitude: null,
    longitude: null,
    remainDay: '마감',
    hashTag: ['ㄴㅇㄹㄴ'],
    userLikeCheck: false,
    like: 0,
  },
  {
    id: 8,
    photoUrl:
      'https://dpylr00zltv9q.cloudfront.net/ace1d699-6903-46c3-ad65-27868fb1609d.png',
    programName: 'test',
    latitude: null,
    longitude: null,
    remainDay: '10',
    hashTag: ['test'],
    userLikeCheck: false,
    like: 0,
  },
  {
    id: 7,
    photoUrl:
      'https://dpylr00zltv9q.cloudfront.net/ace1d699-6903-46c3-ad65-27868fb1609d.png',
    programName: 'travelmaker1',
    latitude: null,
    longitude: null,
    remainDay: '43',
    hashTag: ['test'],
    userLikeCheck: false,
    like: 0,
  },
  {
    id: 6,
    photoUrl:
      'https://dpylr00zltv9q.cloudfront.net/34d3aafd-1b92-416f-84bb-27ef29765295.png',
    programName: 'test4',
    latitude: null,
    longitude: null,
    remainDay: '43',
    hashTag: ['test'],
    userLikeCheck: false,
    like: 0,
  },
  {
    id: 5,
    photoUrl:
      'https://dpylr00zltv9q.cloudfront.net/34d3aafd-1b92-416f-84bb-27ef29765295.png',
    programName: 'test3',
    latitude: 34,
    longitude: 123,
    remainDay: '43',
    hashTag: ['test'],
    userLikeCheck: false,
    like: 1,
  },
  {
    id: 4,
    photoUrl:
      'https://dpylr00zltv9q.cloudfront.net/34d3aafd-1b92-416f-84bb-27ef29765295.png',
    programName: 'test2',
    latitude: 30,
    longitude: 150,
    remainDay: '43',
    hashTag: ['test'],
    userLikeCheck: false,
    like: 3,
  },
];

const Search = () => {
  const [searchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState<string>('');
  const [filterInput, setFilterInput] =
    useState<FilterInputType>(DEFAULT_FILTER_LIST);
  const navigate = useNavigate();

  useEffect(() => {
    const keyword = searchParams.get('keyword');
    if (keyword) setSearchInput(keyword);

    let newFilterInput = filterInput;
    for (const key in newFilterInput) {
      newFilterInput[key] = searchParams.get(key);
    }

    setFilterInput({ ...newFilterInput });

    // TODO : Search API로 GET ()
    // 검색어는 keyword로 필터는 newFilterInput으로
  }, []);

  const handleSubmit = () => {
    let searchPath = '';
    for (const key in filterInput) {
      if (filterInput[key]) searchPath += `&${key}=${filterInput[key]}`;
    }
    navigate(`/search?keyword=${searchInput}${searchPath}`);
    // TODO: 데이터 다시 GET
  };

  return (
    <CommonInner>
      <Container>
        <ProgramSearchBar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          handleSubmit={handleSubmit}
        />
        <FilterBar
          filterInput={filterInput}
          setFilterInput={setFilterInput}
          handleSubmit={handleSubmit}
        />
        <SearchResult
          keyword={searchParams.get('keyword')}
          searchParams={searchParams}
          programCount={0}
          programList={TEST}
        />
        <MapButton />
      </Container>
    </CommonInner>
  );
};

const Container = styled.div`
  padding-top: 180px;
  padding-bottom: 170px;
  position: relative;
  min-height: calc(var(--vh, 1vh) * 100 * 100 / 75 - 80px);
`;

export default Search;
