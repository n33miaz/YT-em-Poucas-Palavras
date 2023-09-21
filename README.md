# Projeto com Inteligência Artificial 

Desenvolvi com o auxílio do evento "[<nlw/> IA](https://www.rocketseat.com.br/nlw)", feito pela plataforma de aprendizado continuo de programação, [Rocketseat](https://www.rocketseat.com.br/).

## 💡 Tecnologias Utilizadas:

**JavaScript, HTML e CSS em conjuto de Inteligências Artificiais.**

## 🔧 Como Desenvolvi?

Usando as ferramentas citadas acima foquei primeiro na parte visual da página e depois criando um servidor local com o .NET, separei essas duas etapas nas duas pastas "web" e "server". Depois disso, foquei na usabilidade do projeto, utilizando JS para fazer o download de um determinado vídeo shorts e armazenando na pasta "tmp" e convertendo automaticamente o arquivo .mp4 do vídeo para .wav, tal como exigido nas bibliotecas da IA. Após isso, fiz a IA reconhecer o .wav e separar o audio do arquivo de vídeo. Usando outra IA, indentifiquei a fala no áudio e tranformei em texto, com esse texto foi só resumi-lo e devolver a "web".
## 📍 Como Rodar o Código Localmente?

Clone o projeto

```bash
  git clone https://github.com/n33miaz/YT_em_Poucas_Palavras
```

Entre no diretório do projeto

```bash
  cd YT_em_Poucas_Palavras
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run server
```

Inicie a host

```bash
  npm run web
```

Depois de fazer todos os passos citados entre na host criada no último comando para abrir em seu navegador o projeto.

## 📖 Bibliotecas Utilizadas:

| [@xenova/transformers](https://huggingface.co/docs/transformers.js/index) | ^2.6.0 |
|------------------|----------|
| [axios](https://axios-http.com/docs/intro) | ^1.5.0 |
| [cors](https://www.npmjs.com/package/cors) | ^2.8.5 |
| [express](https://expressjs.com/pt-br/) | ^4.18.2 |
| [ffmpeg-static](https://www.npmjs.com/package/ffmpeg-static) | ^5.2.0 |
| [fluent-ffmpeg](https://npmdoc.github.io/node-npmdoc-fluent-ffmpeg/build/apidoc.html) | ^2.1.2 |
| [node-wav](https://www.npmjs.com/package/node-wav) | ^0.0.2 |
| [ytdl-core](https://www.npmjs.com/package/ytdl-core) | 4.10.0 |
