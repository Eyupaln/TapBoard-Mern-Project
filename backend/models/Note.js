import mongoose from "mongoose";

// 1- create a scheme :  Şema, veritabanına kaydedilecek belgelerin (documents) yapısını tanımlar.
// 2- model based off of  that scheme

const notScheme = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } //createdAt , updateAt
);

// "notScheme" = az önce oluşturduğumuz şema yapısı
const Note = mongoose.model("Note", notScheme);

// Böylece bu modeli controller veya route dosyalarında kullanabiliriz.
export default Note;
