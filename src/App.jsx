import { useEffect, useState } from 'react';
import { getNotes, addNote, deleteNote } from './db';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import SearchBar from './components/SearchBar';

function App() {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Cargar notas al iniciar
  useEffect(() => {
    const loadNotes = async () => {
      const savedNotes = await getNotes();
      setNotes(savedNotes || []);
    };
    loadNotes();
  }, []);

  // Agregar nueva nota
  const handleAddNote = async (title, content) => {
    await addNote({ title, content, createdAt: new Date() });
    const updatedNotes = await getNotes();
    setNotes(updatedNotes);
  };

  // Eliminar nota
  const handleDeleteNote = async (id) => {
    await deleteNote(id);
    const updatedNotes = await getNotes();
    setNotes(updatedNotes);
  };

  // Filtrar notas por búsqueda
  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 max-w-md md:mx-auto">
      <h1 className="text-2xl font-bold mb-4">Notas Offline ✏️</h1>
      <p className="text-gray-600 mb-4">
        Puedes agregar, eliminar y buscar notas. Todas las notas se guardan
        localmente.
      </p>
      <SearchBar onSearch={setSearchTerm} />
      <NoteForm onAddNote={handleAddNote} />
      <NoteList notes={filteredNotes} onDeleteNote={handleDeleteNote} />
    </div>
  );
}

export default App;