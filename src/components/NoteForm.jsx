import { useState } from 'react';

function NoteForm({ onAddNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    onAddNote(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-7 p-4 border rounded-lg shadow-sm bg-white flex flex-col">
      <h2 className="text-xl font-bold mb-4">Agregar Nota</h2>
      <div className="flex flex-col mb-4" style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded mb-7"
          required
        />
      </div>
      <div className="flex flex-col mt-4 style={{ marginBottom: '1rem' }}">
        <textarea
          placeholder="Contenido"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded mb-2"
          required
        ></textarea>
      </div>
      <div className="flex flex-col mt-4 style={{ marginBottom: '1rem' }}">
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Guardar Nota
        </button>
      </div>

    </form>
  );
}

export default NoteForm;