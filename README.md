# Hospedando um Site no Firebase

Este repositório detalha os procedimentos realizados para hospedar um projetoo de extensão acadêmica do curso de Análise e Desenvolvimento de Sistemas da UNINTER, que estou realizando em conjunto com a Thaísa. O web App será hospedado no [Firebase Hosting](https://firebase.google.com/products/hosting).

## Sobre o Firebase

O Firebase é uma plataforma desenvolvida pelo Google que fornece uma ampla gama de ferramentas e serviços para o desenvolvimento de aplicativos web e mobile. Ele simplifica tarefas complexas como autenticação, banco de dados em tempo real, hospedagem, notificações push, e muito mais, permitindo que os desenvolvedores foquem na criação de recursos e experiência do usuário.

## Pré-requisitos

1. **Conta no Firebase**: Com sua conta no google, faça o cadastro no firebase [Firebase Console](https://console.firebase.google.com/).
2. **Node.js e npm instalados**: Baixe e instale o Node.js em [nodejs.org](https://nodejs.org/).
3. **Projeto Web**: Os arquivos do projeto web separados estão separados na pasta padrão "public".

---
## Passo 1: Desenvolver o site:
Os arquivos criados até o momento são só um "exemplo" para poder testarmos a integração com o Firebase Firestore (Serviço de banco de dados orientado a documentos do Firebase). 

## Passo 2: Instalar o Firebase CLI


O Firebase CLI (Command Line Interface) é necessário para interagir com o Firebase Hosting. Iremos instalar e configurar o seu uso para hospedar o site.

1. Abra o CMD (ou o bash).
2. Execute o seguinte comando para instalar o Firebase CLI globalmente:
```bash
npm install -g firebase-tools
   ```
   
3. Dê uma olhada pra ver se o firebase foi instalado com sucesso na máquina!
```bash
firebase --version
```

5. Faça o login na sua conta no google através da linha de comando:
  ```bash
firebase login
```
6. No console, acesse o local onde estão os arquivos (HTML, CSS, JS, TS...)

7. Execute o comando:
  ```bash
firebase init
```

8. No prompt você irá encontrar diversas opções, selecione a opção "hosting". A partir daqui as opções que ele irá dar serão intuitivas.

9. Se o site do projeto estiver rodando legal na máquina, tá na hora de subir. ´Para isso execute o comando:
  ```bash
firebase deploy
```  
