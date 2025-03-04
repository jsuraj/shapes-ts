import './App.css';
import { useState } from 'react';
import SketchComponent from './SketchComponent';
import Editor from './Editor';

const App: React.FC = () => {
  const [code, setCode] = useState<string>(`
const sketch = new Sketch(containerRef.current, 500, 500);
sketch.background('white');
sketch.point(new Vector(100, 100), 'red');
sketch.point(new Vector(150, 150), 'blue');
sketch.point(new Vector(200, 200), 'green');
  `);
  return (
    <div className='container'>
      <h1>Shapes demo</h1>
      <div className='split-container'>
        <Editor code={code} setCode={setCode} />
        <SketchComponent code={code} />
      </div>
    </div>
  );
};

export default App;
