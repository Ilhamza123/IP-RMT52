const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const gemini = async (userInput) => {
  try {
    if (!userInput) {
      throw ("Input pengguna tidak boleh kosong");
    }
console.log(userInput);
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const prompt = `Gunakan bahasa Indonesia untuk merespons permintaan berikut: ${userInput.message},
    jika pesan nya berhubungan dengan taekwondo maka jawab, jika pertanyaan nya diluar konteks, tolong dijawab gini :
    mohon maaf diluar otoritas saya, saya hanya bisa menjawab jika itu berhubungan dengan taekwondo

    `;
    const result = await model.generateContent(prompt);

    const response = await result.response;
    let text = response.text();
    console.log("Respons dari Gemini:", text);

    // Uncomment baris berikut jika Anda yakin respons selalu dalam format JSON
    // try {
    //   text = JSON.parse(text.trim());
    // } catch (parseError) {
    //   console.error("Gagal mengurai respons JSON:", parseError);
    // }

    return text;
  } catch (error) {
    console.error("Terjadi kesalahan saat menggunakan Gemini API:", error);
    throw error;
  }
}

module.exports = gemini;