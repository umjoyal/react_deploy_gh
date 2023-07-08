import { useEffect, useState } from 'react';
import Content from './Components/Content';
import ControlButtons from './Components/ControlButtons';
import './App.css';

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com';
  const [section, setSection] = useState('users')
  const [content, setContent] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true)
    const fetchContent = async () => {
      try {
        const response = await fetch(`${API_URL}/${section}`)
        if (!response.ok) throw Error('Data Not Received!');
        const lContent = await response.json();
        setContent(lContent);
        setFetchError(null)
      } catch (err) {
        setFetchError(err.message);
        setContent([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchContent();
  }, [section]);//Load Default Posts on loading

  return (
    <div className="App">
      <ControlButtons section={section} setSection={setSection} />
      <main className='main'>
        {isLoading? <p>Loading...</p> :
          fetchError? <p style={{ color: 'red' }}>{fetchError}</p> :
            !content ? <p>No Data!</p> : <Content content={content} />
        }
      </main>
    </div>
  );
}

export default App;
