import './App.css';
import Form from './pages/form/Form'
import { AuthProvider } from './providers/dataContext';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Form></Form>
      </AuthProvider>
    </div>
  );
}

export default App;
