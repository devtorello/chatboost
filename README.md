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