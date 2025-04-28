import { openDB } from 'idb';

const dbName = 'NotesDB';
const storeName = 'notes';

export async function initDB() {
  return openDB(dbName, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
      }
    },
  });
}

export async function addNote(note) {
  const db = await initDB();
  return db.add(storeName, note);
}

export async function getNotes() {
  const db = await initDB();
  return db.getAll(storeName);
}

export async function deleteNote(id) {
  const db = await initDB();
  return db.delete(storeName, id);
}