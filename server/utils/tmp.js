import { tmpdir } from "os"
import { join } from "path"

// Função para obter um caminho para um arquivo temporário
export const getTmpPath = (fileName) => join(tmpdir(), fileName)