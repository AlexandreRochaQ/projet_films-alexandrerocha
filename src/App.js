import './App.css';
import Forms from './components/Forms';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AccountList from './AccountList';
import Button from './components/Button';

function App() {

  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const storageData = localStorage.getItem("dataList");

    if (storageData) {
      setDataList(JSON.parse(storageData));
    }
  }, []); 

  useEffect(() => {
    if (dataList.length > 0) {
      localStorage.setItem("dataList", JSON.stringify(dataList));
    }
  }, [dataList]);

  const handleFormSubmit = (data) => {
    setDataList((prev) => [...prev, data]);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element=
            {
              <>
                <Button />
                <Forms onSubmit={handleFormSubmit} />
              </>
            }/>
          <Route path="/account-list" element=
            {
              <AccountList dataList={dataList}/>
            }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
