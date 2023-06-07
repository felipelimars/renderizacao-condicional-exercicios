# Renderização condicional

Caso não lembre como funciona o processo de entrega, clique [**aqui**](https://github.com/labenuexercicios/instrucoes-entrega)


## Como eu vou executar os exercícios?
Para o exercício de hoje, vamos utilizar um template! Dentro desse template vocês vão encontrar a estrutura que trabalhamos em aula, então é um código que vocês já conhecem! 


Para executar este exercício, você pode criar uma nova aplicação React, utilizar o **CodeSandbox** ou usar este template do repositório.

- Caso use este template, lembre-se de dar um `npm install` assim que baixar! 
- Caso estiver usando o codeSandBox, pode usar esse template aqui: 

Caso queira criar uma nova aplicação React, basta copiar os conteúdos deste repositório e colar dentro da pasta do seu projeto criado.

Na aula vimos que o gerenciamento de estado precisa ser pensado de uma forma que seja possível compartilhar dados entre todos os componentes da nossa aplicação. Às vezes precisamos modificar toda a estrutura de estados para que seja possível resolver certos problemas de props, já que só podemos passar props de pai pra filho.

Durante a aula vocês conseguiram trabalhar a troca de telas por meio da renderização condicional. Agora vamos implementar mais uma tela na aplicação

# Exercício 1

Nossa aplicação vai ser para o cadastro do usuário em um aplicativo de delivery.<br>
Já existe uma tela de Cadastro para as informações de login da pessoa, então vamos criar um componente de cadastro chamado TelaCadastroEndereco, onde vocês vão pegar mais informações de contato e endereço para entrega:

- Crie uma pasta dentro da pasta Components chamada TelaCadastroEndereco
- Crie um arquivo chamado TelaCadastroEndereco.js
- Crie a estrutura de um componente dentro do arquivo (lembre de exportar o componente)
- O componente deve possuir:
    - Um input para endereço
    - Um input para número da residência
    - um input para complemento
    - um input para telefone
    - um botão de Confirmar

# Exercício 2

- Adicione o componente criado **TelaCadastroEndereco** para seguir o fluxo da renderização condicional. O fluxo de telas em um cadastro deve ocorrer na seguinte ordem: 
    - TelaCadastro >>> TelaCadastroEndereco >>> TelaPrincipal
    
# Exercício 3

Implemente o controle dos inputs e faça com que o botão **Entrar**, o botão **Cadastrar** e o botão **Confirmar** imprimam no console os dados preenchidos nos inputs em um único objeto (cada input será uma propriedade do mesmo).

# Segue o link do template no codesandbox
https://codesandbox.io/s/renderizacao-condicional-exercicios-5ebrrb
