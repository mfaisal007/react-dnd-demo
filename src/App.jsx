import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Posts from './components/Posts';

const App = () => {
  return (
    <div className='App'>
      <DndProvider backend={HTML5Backend}>
        <Posts />
      </DndProvider>
    </div>
  );
};

export default App;
