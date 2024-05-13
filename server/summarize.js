import { pipeline } from "@xenova/transformers";

export async function summarize(text) {
  try {
    console.log("Realizando o resumo...");

    const generator = await pipeline(
      "summarization",
      "Xenova/distilbart-cnn-12-6"
    );

    // 3. Ajusta a entrada do resumo
    const output = await generator(text, {
      min_length: 30, // Define um tamanho mínimo para o resumo
      max_length: 200 // Define um tamanho máximo para o resumo
    });

    console.log("Resumo concluído com sucesso!");
    return output[0].summary_text;
  } catch (error) {
    console.log("Não foi possível realizar o resumo", error);
    throw new Error(error);
  }
}
