import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.scss';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/Account/Login');
  }, [navigate]);

  return <div className="app" />;
};

export default App;
