import { useLoaderData } from 'react-router-dom'

// import { useLoaderData } from 'react-router-dom';
import './App.css';
import FirstLayout from './assets/Components/FirstLayout';
import SecondLayout from './assets/Components/SecondLayout';
import ThirdLayout from './assets/Components/ThirdLayout';

function App() {
  const data = useLoaderData();
  console.log(data);

  return (
    <>
      <FirstLayout />
      <SecondLayout />
      <ThirdLayout cartoons={data} />
    </>
  );
}

export default App;
