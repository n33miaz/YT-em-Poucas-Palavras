import fs from "fs"
import wav from "node-wav"
import ffmpeg from "fluent-ffmpeg"
import { getTmpPath } from "./utils/tmp.js" // Importe a função para obter caminho temporário

export const convert = (filePath) => // Recebe o caminho do arquivo como argumento
  new Promise((resolve, reject) => {
    try {
      const outputPath = getTmpPath("audio.wav") // Usando caminho temporário
      console.log("Convertendo o vídeo...")

      // Verifica se o ffmpeg está instalado no sistema
      ffmpeg.ffprobe(filePath, (err, metadata) => {
        if (err) {
          console.error("ffmpeg não encontrado. Por favor, instale-o.");
          reject(err); // Rejeita a promise se o ffmpeg não for encontrado
          return;
        }

        ffmpeg()
          .input(filePath)
          .audioFrequency(16000)
          .audioChannels(1)
          .format("wav")
          .on("end", () => {
            const file = fs.readFileSync(outputPath)
            const fileDecoded = wav.decode(file)

            const audioData = fileDecoded.channelData[0]
            const floatArray = new Float32Array(audioData)

            console.log("Vídeo convertido com sucesso!")

            resolve(floatArray)
            fs.unlinkSync(outputPath) // Exclui o arquivo temporário após o uso
          })
          .on("error", (error) => {
            console.log("Erro ao converter o vídeo", error)
            reject(error)
          })
          .save(outputPath)
      });
    } catch (error) {
      console.log("Erro ao converter o vídeo", error)
      reject(error)
    }
  }
)