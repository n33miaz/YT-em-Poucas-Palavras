import ytdl from "ytdl-core"
import fs from "fs"
import { tmpdir } from "os"
import { join } from "path"

// Função para obter um caminho para um arquivo temporário
const getTmpPath = (fileName) => join(tmpdir(), fileName)

export const download = (videoId) =>
  new Promise((resolve, reject) => {
    try {
      const videoURL = "https://www.youtube.com/shorts/" + videoId
      const outputPath = getTmpPath("audio.mp4") // Usando caminho temporário

      console.log("Realizando o download do vídeo:", videoId)

      ytdl(videoURL, { quality: "lowestaudio", filter: "audioonly" })
        .on("info", (info) => {
          const seconds = info.formats[0].approxDurationMs / 1000

          if (seconds > 60) {
            throw new Error(
              "A duração desse vídeo é maior do que 60 segundos."
            )
          }
        })
        .on("end", () => {
          console.log("Download do vídeo finalizado.")
          resolve(outputPath) // Retornando o caminho do arquivo
        })
        .on("error", (error) => {
          console.log(
            "Não foi possível fazer o download do vídeo. Detalhes do erro:",
            error
          )
          reject(error)
        })
        .pipe(fs.createWriteStream(outputPath))
    } catch (error) {
      reject(error) // Lidando com erros na função
    }
  })