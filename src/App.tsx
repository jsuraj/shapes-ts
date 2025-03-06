import './App.css';
import { useState } from 'react';
import SketchComponent from './SketchComponent';
import Editor from './Editor';

const App: React.FC = () => {
  const [code, setCode] = useState<string>(`
sketch.background('white');
sketch.point(new Vector(100, 100), 'red');
sketch.point(new Vector(150, 150), 'blue');
const c1 = sketch.circle(new Vector(200, 200), 50, 'green');
  `);
  return (
    <div className='container'>
      <div className='split-container'>
        <Editor code={code} setCode={setCode} />
        <SketchComponent code={code} />
      </div>
    </div>
  );
};

export default App;
