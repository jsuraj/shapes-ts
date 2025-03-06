// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import Editor from '../Editor';

// describe('Editor Component', () => {
//   test('renders with initial code value', () => {
//     const mockSetCode = jest.fn();
//     const initialCode = 'console.log("hello world")';

//     render(<Editor code={initialCode} setCode={mockSetCode} />);

//     const textArea = screen.getByRole('textbox');
//     expect(textArea).toHaveValue(initialCode);
//     expect(textArea).toHaveClass('editor');
//   });
// });

/// <vitest-environment jsdom />
import { expect, describe, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Editor from '../Editor';

describe('Editor Component', () => {
  it('renders with the initial code value', () => {
    const mockCode = 'const hello = "world";';
    const mockSetCode = vi.fn();

    render(<Editor code={mockCode} setCode={mockSetCode} />);

    const textareaElement = screen.getByRole('textbox') as HTMLTextAreaElement;
    expect(textareaElement).toBeDefined();
    expect(textareaElement.value).toBe(mockCode);
  });

  it('calls setCode when text changes', () => {
    const initialCode = 'intial code';
    const newCode = 'new code';
    const mockSetCode = vi.fn();

    render(<Editor code={initialCode} setCode={mockSetCode} />);

    const textareaElement = screen.getByRole('textbox') as HTMLTextAreaElement;
    fireEvent.change(textareaElement, { target: { value: newCode } });

    expect(mockSetCode).toHaveBeenCalledTimes(1);
    expect(mockSetCode).toHaveBeenCalledWith(newCode);
  });

  it('updates local state when text changes', () => {
    const initialCode = 'intial code';
    const newCode = 'new code';
    const mockSetCode = vi.fn();

    render(<Editor code={initialCode} setCode={mockSetCode} />);

    const textareaElement = screen.getByRole('textbox') as HTMLTextAreaElement;
    fireEvent.change(textareaElement, { target: { value: newCode } });

    expect(textareaElement.value).toBe(newCode);
  });

  it('applies "editor" class to textarea', () => {
    const mockCode = '';
    const mockSetCode = vi.fn();

    render(<Editor code={mockCode} setCode={mockSetCode} />);

    const textareaElement = screen.getByRole('textbox') as HTMLTextAreaElement;
    expect(textareaElement.className).toContain('editor');
  });
});
