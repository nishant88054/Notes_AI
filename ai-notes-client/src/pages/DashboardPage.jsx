import React, { useState, useEffect } from 'react';
import { getNotes, createNote, deleteNote, summarizeNote } from '../services/api';

const DashboardPage = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loadingSummary, setLoadingSummary] = useState(null); // track which note is summarizing

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const { data } = await getNotes();
        setNotes(data);
      } catch (error) {
        console.error('Failed to fetch notes', error);
      }
    };
    fetchNotes();
  }, []);

  const handleCreateNote = async (e) => {
    e.preventDefault();
    if (!title || !content) return;
    try {
      const { data } = await createNote({ title, content });
      setNotes([data, ...notes]);
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Failed to create note', error);
    }
  };

  const handleDeleteNote = async (id) => {
    try {
      await deleteNote(id);
      setNotes(notes.filter((note) => note._id !== id));
    } catch (error) {
      console.error('Failed to delete note', error);
    }
  };

  const handleSummarize = async (note) => {
    setLoadingSummary(note._id);
    try {
      const { data } = await summarizeNote(note.content);
      alert(`AI Summary:\n${data.summary}`);
    } catch (error) {
      console.error('Failed to get summary', error);
      alert('Could not generate summary.');
    } finally {
      setLoadingSummary(null);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="w-full max-w-2xl mx-auto mb-8">
        <form onSubmit={handleCreateNote} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Create a New Note</h2>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            rows="4"
          />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Add Note
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map((note) => (
          <div key={note._id} className="bg-yellow-100 p-4 rounded-lg shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">{note.title}</h3>
              <p className="text-gray-700 whitespace-pre-wrap">{note.content}</p>
            </div>
            <div className="mt-4 flex space-x-2">
               <button
                 onClick={() => handleSummarize(note)}
                 disabled={loadingSummary === note._id}
                 className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600 disabled:bg-gray-400"
               >
                 {loadingSummary === note._id ? '🧠...' : 'Summarize'}
               </button>
               <button
                 onClick={() => handleDeleteNote(note._id)}
                 className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
               >
                 Delete
               </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;