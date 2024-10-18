import 'bootstrap/dist/css/bootstrap.css';
import Form from "./Form";
import GreetingCard from './GreetingCard';
import { useState } from 'react';

function App() {
  const [submittedData, setSubmittedData] = useState(null);
  function handleFormSubmit(formData) {
    setSubmittedData(formData);
  }

  return (
    <div className="App">
      <Form onSubmit={handleFormSubmit} />
      {submittedData && <GreetingCard submittedData={submittedData} />}
    </div>
  );
}

export default App;
