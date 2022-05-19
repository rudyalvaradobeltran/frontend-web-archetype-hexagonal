import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(250px, 780px);
  border: 2px solid #767373;
  justify-content: center;
  background-color: #cbcbcb;
`;

export const UsersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export default Wrapper;
