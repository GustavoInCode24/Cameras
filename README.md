# Cameras

🎥 **Cameras** é um projeto web pensado para quem quer monitorar múltiplas câmeras de forma simples, prática e visualmente organizada. Ideal para TVs grandes ou monitores de controle, ele mantém tudo centralizado e atualizado em tempo real.

## Estrutura do Projeto

Tudo organizado para facilitar o deploy e a manutenção:
```
Cameras/
├─ public/
│   ├─ index.html
│   ├─ css/
│   │   └─ style.css
│   └─ js/
│       └─ cameras.js
├─ .gitignore
└─ vercel.json

## Como Colocar no Ar 🌐

1. Clone o repositório e entre na pasta:

git clone https://github.com/GustavoInCode24/Cameras.git
cd Cameras

2. Instale o Vercel CLI (se ainda não tiver):

npm i -g vercel
vercel login

3. Faça o deploy:

cd Cameras
vercel

- Quando perguntado pelo diretório raiz, digite `public`.
- Após alguns segundos, você terá a URL do seu site no ar.

4. Para atualizações futuras, basta:

git add .
git commit -m "Atualização"
vercel --prod
```
## Tecnologias


![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)


## Observações

- Confira se os caminhos no `index.html` estão corretos, relativos à pasta `public`.  
- Com essa organização, seu projeto fica pronto para rodar no Vercel sem problemas.

## Contribuidores

- Gustavo Lemos
  
