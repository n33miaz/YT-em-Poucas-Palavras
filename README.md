# Resumindo Shorts do YouTube com IA

Este projeto utiliza o poder da Inteligência Artificial para resumir automaticamente o conteúdo de Shorts do YouTube. 

Com ele, você pode:

* Colar a URL de um Short do YouTube.
* Obter uma transcrição precisa do áudio do vídeo.
* Receber um resumo conciso e informativo do conteúdo.

## 🧠 Como Funciona?

O projeto combina tecnologias web e inteligência artificial para realizar o resumo:

1. **Interface do Usuário:**  A interface web, construída com HTML, CSS e JavaScript, permite que o usuário insira a URL do Short.
2. **Download do Vídeo:**  O servidor, utilizando Node.js e a biblioteca `ytdl-core`, baixa o áudio do vídeo do YouTube.
3. **Conversão de Áudio:**  O áudio baixado (no formato MP4) é convertido para WAV usando `fluent-ffmpeg` para compatibilidade com a IA de transcrição.
4. **Transcrição de Áudio para Texto:**  A biblioteca `@xenova/transformers`, com o modelo `Xenova/whisper-small`, transcreve o áudio para texto.
5. **Limpeza de Texto:**  O texto transcrito é limpo, removendo caracteres especiais e espaços em branco desnecessários, para otimizar a entrada da IA de resumo.
6. **Resumo do Texto:**  A IA de resumo, utilizando `@xenova/transformers` com o modelo `Xenova/distilbart-cnn-12-6`, gera um resumo conciso do texto transcrito.
7. **Exibição do Resumo:**  O resumo gerado é enviado de volta para a interface web e exibido para o usuário.

## 🛠️ Tecnologias Utilizadas

**Front-end:**

* HTML
* CSS
* JavaScript
* Vite (ferramenta de build)
* Phosphor Icons (biblioteca de ícones)

**Back-end:**

* Node.js
* Express (framework web)
* @xenova/transformers (biblioteca de IA)
* ytdl-core (download de vídeos do YouTube)
* fluent-ffmpeg (conversão de áudio)
* node-wav (processamento de arquivos WAV)
* axios (requisições HTTP)
* cors (permite requisições de diferentes origens)

## 🚀 Como Executar o Projeto

1. **Clone o Repositório:**

   ```bash
   git clone https://github.com/seu-usuario/YT_em_Poucas_Palavras
   ```
2. **Navegue até o Diretório do Projeto:**

   ```bash
    cd YT_em_Poucas_Palavras
   ```
3. **Instale as Dependências:**

   ```bash
    npm install
   ```
4. **Inicie o Servidor:**

   ```bash
    npm run server
   ```
5. **Inicie a Interface Web:**

   ```bash
    npm run web
   ```
6. **Acesse o Projeto:**

Abra seu navegador web e acesse `http://localhost:1234/` (ou a porta que o Vite estiver utilizando).

## 📚 Dependências do Projeto

As dependências do projeto estão listadas no arquivo `package.json`. Elas podem ser instaladas com o comando `npm install`.

Dependências Principais:

* **@xenova/transformers:** Fornece modelos de IA para transcrição e resumo.
* **ytdl-core:** Permite baixar vídeos do YouTube.
* **fluent-ffmpeg:**  Facilita a conversão de arquivos de áudio e vídeo.
* **express:** Framework web para Node.js, utilizado para criar o servidor.

## 📝 Observações

* **ffmpeg:** O projeto utiliza o `ffmpeg` para conversão de áudio. Certifique-se de que o `ffmpeg` esteja instalado em seu sistema. Você pode baixá-lo em [https://ffmpeg.org/](https://ffmpeg.org/).

* **Requisitos do Sistema:**  O projeto requer Node.js e npm instalados em seu sistema.