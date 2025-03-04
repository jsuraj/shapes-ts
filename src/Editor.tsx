import { useState } from 'react';

interface EditorProps {
  code: string;
  setCode: (code: string) => void;
}

const Editor: React.FC<EditorProps> = ({ code, setCode }) => {
  const [localCode, setLocalCode] = useState(code);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLocalCode(event.target.value);
    setCode(event.target.value);
  };

  return (
    <textarea className='editor' value={localCode} onChange={handleChange} />
  );
};

export default Editor;
