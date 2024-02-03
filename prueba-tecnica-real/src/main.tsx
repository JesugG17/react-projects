import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';

import './index.css';
import 'semantic-ui-css/semantic.min.css';
import { TodoProvider } from './context/TodoProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <TodoProvider>
    <App />
  </TodoProvider>
  // </React.StrictMode>,
);
