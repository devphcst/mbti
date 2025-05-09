import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import Test from './Pages/Test';
import TestResult from './Pages/TestResult';

export const baseUrl = 'http://localhost:5173';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* main */}
        <Route path='/' element={<Main />} />
        {/* test */}
        <Route path='/:testParam' element={<Test />} />
        <Route
          path='/:testParam/result/:resultParam'
          element={<TestResult />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// 주소 체계
// 1. 메인 썸네일 리스트 페이지 :: root/
// 2. 테스트 페이지 - Intro / Quiz / Loading :: root/test
// 3. 결과페이지 :: root/testName/result/resultName
