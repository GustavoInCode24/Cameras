# Cameras

🎥 Cameras é um projeto web desenvolvido para monitoramento de múltiplas câmeras da Prefeitura de Santos, oferecendo uma interface simples, prática e visualmente organizada. Ideal para TVs grandes ou monitores de controle, o sistema mantém todas as câmeras centralizadas e atualizadas em tempo real, facilitando a visualização e o acompanhamento das imagens.
---
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
---
## Tecnologias

<p>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" width="50"/>
  &nbsp;&nbsp;&nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" width="50"/>
  &nbsp;&nbsp;&nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width="50"/>
  &nbsp;&nbsp;&nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg" width="50"/>
</p>





## Observações

- Confira se os caminhos no `index.html` estão corretos, relativos à pasta `public`.  
- Com essa organização, seu projeto fica pronto para rodar no Vercel sem problemas.

## Contribuidores

- Gustavo Lemos
  
