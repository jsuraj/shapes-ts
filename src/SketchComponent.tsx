import { useEffect, useRef } from 'react';
import { Sketch } from './lib/Sketch';
import { Vector } from './lib/Vector';

interface SketchComponentProps {
  code: string;
}

const SketchComponent: React.FC<SketchComponentProps> = ({ code }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sketchRef = useRef<Sketch | null>(null);

  useEffect(() => {
    if (containerRef.current && !sketchRef.current) {
      sketchRef.current = new Sketch(containerRef.current, 500, 500);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).Vector = Vector;
    }
    const sketch = sketchRef.current!;
    sketch.clear();
    try {
      eval(code);
    } catch (error) {
      console.error('Error executing sketch code:', error);
    }
  }, [code]);

  return <div ref={containerRef} id='sketch-container'></div>;
};

export default SketchComponent;
