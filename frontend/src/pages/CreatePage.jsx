import React, { useState } from "react";
import { ArrowLeftIcon } from "lucide-react";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";

import api from "../lib/axios";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!title.trim() || !content.trim()) {
    //   toast.error("Boş içerik");
    //   return;
    // }
    setLoading(true);
    try {
      await api.post("/notes", { title, content });
      toast.success("Not Oluşturuldu");
      navigate("/");
    } catch (error) {
      if (error.response && error.response.status === 429) {
        toast.error("Yavaş ol! Çok hızlı not oluşturuyorsun", {
          duration: 4000,
          icon: "☠️",
        });
      } else {
        toast.error("Not oluşturulamadı");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 " data-theme="synthwave">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto ">
          <Link to={"/"} className="btn btn-ghost mb-6 bg-base-0">
            <ArrowLeftIcon className="size-5" />
            Geri Dön
          </Link>
          <div className="card bg-base-100">
            <div className="card-body ">
              <h2 className="card-title text-2xl mb-4 ">Yeni Not</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Başlık</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Not Başlığı"
                    className="input input-bordered"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">İçerik</span>
                  </label>
                  <textarea
                    placeholder="Not detayları"
                    className="textarea textarea-bordered h-32"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>
                <div className="card-actions justify-end">
                  <button
                    type="submit"
                    className="btn btn-sm bg-gradient-to-r from-primary to-secondary border-none text-white hover:scale-105 transition-transform "
                    disabled={loading}
                  >
                    {loading ? "Kaydediliyor..." : "Notu Kaydet"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
