import styled from 'styled-components';
import IconTrash from '@/assets/icons/icon-trash.svg';
import { useNavigate } from 'react-router-dom';

interface ProgramTableProps {
  noDataText: string;
  programList: {
    id: number;
    title: string;
    views: number;
    wish: number;
    start: string;
    end: string;
  }[];
}

const ProgramTable = ({ noDataText, programList }: ProgramTableProps) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    // TODO: 삭제 API 연결
    console.log('삭제');
  };

  return (
    <TableContainer>
      <thead>
        <TableLine>
          <td width="360px">제목</td>
          <td width="120px">조회수</td>
          <td width="120px">찜</td>
          <td width="120px">시작일</td>
          <td width="120px">마감일</td>
          <td width="32px">{programList.length > 0 ? '삭제' : ''}</td>
        </TableLine>
      </thead>
      {programList.length > 0 ? (
        <tbody>
          {programList.map(program => (
            <TableLine
              key={program.id}
              onClick={() => {
                navigate(`/detailProgram/${program.title}/${program.id}`);
              }}
            >
              <td width="360px">{program.title}</td>
              <td width="120px">{program.views}</td>
              <td width="120px">{program.wish}</td>
              <td width="120px">{program.start}</td>
              <td width="120px">{program.end}</td>
              <td width="32px" className="icon">
                <img alt="icon-trash" src={IconTrash} onClick={handleDelete} />
              </td>
            </TableLine>
          ))}
        </tbody>
      ) : (
        <Text>
          <tr>
            <td>{noDataText}</td>
          </tr>
        </Text>
      )}
    </TableContainer>
  );
};

export default ProgramTable;

const TableContainer = styled.table`
  color: #53575c;
  font-family: SUIT-SemiBold;
  font-size: 18px;
  font-style: normal;
  line-height: 25px;
  height: 434px;
  margin: 24px 0px;
`;

const TableLine = styled.tr`
  display: flex;
  flex-direction: row;
  gap: 80px;
  text-align: left;
  padding: 23px 14px;
  border-bottom: 1px solid #e3e7ed;
  cursor: pointer;

  td {
    height: 25px;
  }

  .icon {
    text-align: center;

    img {
      cursor: pointer;
    }
  }
`;

const Text = styled.tbody`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  color: #aeb3b8;
  font-family: SUIT-SemiBold;
  font-size: 18px;
  font-style: normal;
  line-height: 140%; /* 25.2px */
`;
