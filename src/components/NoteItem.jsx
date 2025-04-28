function NoteItem({ note, onDeleteNote }) {
    return (
      <div className="border p-4 rounded-lg shadow-sm">
        <h3 className="font-bold text-lg">{note.title}</h3>
        <p className="text-gray-700 my-2">{note.content}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{new Date(note.createdAt).toLocaleString()}</span>
          <button
            onClick={() => onDeleteNote(note.id)}
            className="text-red-500 hover:text-red-700"
          >
            Eliminar
          </button>
        </div>
      </div>
    );
  }
  
  export default NoteItem;