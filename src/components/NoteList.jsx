import NoteItem from './NoteItem';

function NoteList({ notes, onDeleteNote }) {
  return (
    <div className="space-y-4 note">
      {notes.length === 0 ? (
        <p className="text-gray-500">No hay notas aún. ¡Agrega una!</p>
      ) : (
        notes.map((note) => (
          <NoteItem key={note.id} note={note} onDeleteNote={onDeleteNote} />
        ))
      )}
    </div>
  );
}

export default NoteList;