# Chatboost
Um chatbot simples construído utilizando TypeScript e Dialogflow.

## Tecnologias Utilizadas
Para a construção deste projeto, foram utilizadas as seguintes tecnologias:

* TypeScript
* Jest
* Eslint

## Casos de Uso
Nesta seção, você encontrará a descrição de cada um dos casos de uso contidos nessa aplicação.

### Inicialização de Conversa
O Caso de Uso de inicialização de conversa será acionado, basicamente, no momento em que a pessoa acessar a página ou o modal do chatbot, disponibilizando uma mensagem automática junto com opções para início da conversa.

#### Fluxo de Execução
1. O usuário acessa a página do chatbot no front-end;
2. A requisição é realizada para o sistema;
3. O sistema faz uma requisição para o Dialogflow;
4. O Dialogflow retorna a mensagem da Intent;
5. A mensagem é retornada para o front-end.

## Continuação de Conversa
O caso de uso de continuação de conversa será iniciado, basicamente, quando uma pessoa responder o bot através de uma mensagem no chat ou através da seleção de um botão específico (disponibilizado no próprio chat pelo front end).

#### Fluxo de Execução
1. O usuário digita uma mensagem no chat e envia;
2. A requisição é realizada para o sistema;
3. O sistema recebe a mensagem e realiza uma requisição para o dialogflow;
4. O Dialogflow detecta e retorna a resposta da intent;
5. A mensagem é retornada para o front-end.

## Execução
Para executar o código desenvolvido, você deve, primeiramente, realizar o clone do repositório. Após entrar na pasta do repositório, execute o seguinte comando na sua linha de comando:

```sh
npm i
```
Após a instalação dos packages utilizado, utilize o comando abaixo para inicializar o servidor:

```sh
npm run start
```

Após a inicialização, o servidor estará disponível na porta 8080. Você pode verifica as rotas disponíveis na pasta `main/web/routes`.

## Testes
Para a execução dos testes unitários, utilize o comando abaixo:
```sh
npm run test:unit
```

Para a execução dos testes de CI, execute o comando abaixo:
```sh
npm run test:ci
```

## Contatos
Para entrar em contato comigo, envie um email para `vitorellotts@gmail.com` ou procure meu LinkedIn no meu README. 🤗