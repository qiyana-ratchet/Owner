import { Route, Routes } from 'react-router-dom';
import FirstPage from '/FirstPage';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<FirstPage />} />
        </Routes>
    );
};

export default App;