import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import NoteCard from "../components/NoteCard.jsx";
import api from "../lib/axios.js";
import NotesNotFound from "../components/NotesNotFound.jsx";
import RateLimitedUI from "../components/RateLimitedUI.jsx";
import toast from "react-hot-toast";

const HomePage = () => {
  const [israteLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes");
        console.log(res.data);
        setNotes(res.data);
        setIsRateLimited(false);
      } catch (error) {
        console.log("Error fetching notes ", error);
        if (error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Notlar Yüklenemedi ");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      {israteLimited && <RateLimitedUI />}
      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && (
          <div className="text-center text-primary py-10">
            <button className="btn">
              <span className="loading loading-spinner"></span>
              Notlar Yükleniyor..
            </button>
          </div>
        )}
        {!loading && notes.length === 0 && !israteLimited && <NotesNotFound />}
        {!loading && notes.length > 0 && !israteLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
