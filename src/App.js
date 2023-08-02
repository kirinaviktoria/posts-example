import { ManagePost } from './components/ManagePost/ManagePost';
import { Posts } from './components/Posts/Posts';
import { TodoList } from './components/TodoList/TodoList';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='title'>Посты</h1>

      <div className='wrapper'>
        <TodoList/>
        <div className='content'>
          <Posts/>
          <ManagePost/>
        </div>
      </div>


    
    </div>
  );
}

export default App;
