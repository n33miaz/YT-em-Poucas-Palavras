import cors from "cors";
import express from "express";

import { convert } from "./convert.js";
import { download } from "./download.js";
import { transcribe } from "./transcribe.js";
import { summarize } from "./summarize.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/summary/:id", async (request, response) => {
  try {
    const filePath = await download(request.params.id);
    const audioConverted = await convert(filePath);
    const result = await transcribe(audioConverted);

    return response.json({ result });
  } catch (error) {
    console.error(error);
    return response.json({ error: error.message });
  }
});

app.post("/summary", async (request, response) => {
  try {
    // 1. Limpa o texto antes de resumir
    const cleanedText = request.body.text
      .replace(/[^a-zA-Z0-9áàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ\s.,!?]/g, "") // Remove caracteres especiais, mantendo pontuação básica
      .replace(/\s+/g, " ") // Remove espaços em branco extras
      .trim(); // Remove espaços em branco no início e no fim

    const result = await summarize(cleanedText); // Envia o texto limpo para o resumo
    return response.json({ result });
  } catch (error) {
    console.log(error);
    return response.json({ error });
  }
});

app.listen(1234, () => console.log("Server is running on port 1234"));