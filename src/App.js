import styled from 'styled-components';
import { Pagination, ItemsGrid, useData, Header, AppState } from './components';
export function App() {
  const { isFetching, isError } = useData();

  return (
    <Main>
      <Header />
      <AppState />
      {!isFetching && !isError && (
        <>
          <ItemsGrid />
          <Pagination />
        </>
      )}
    </Main>
  );
}

const Main = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px 0;
  max-width: 80%;
  margin: 0 auto;
`;
