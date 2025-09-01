# Casos de Teste Automatizados - AmplifyApp

Este documento descreve os casos de teste automatizados com Cypress, relacionados à funcionalidade de login e gestão de usuários na aplicação AmplifyApp.


---

## Resultados dos Testes Automatizados

Durante a execução dos testes com Cypress, foram automatizados **07 casos de teste** com foco nas funcionalidades de cadastro e exclusão de usuários.

### Visão Geral:

| Total de Testes | Bugs Encontrados | Criticidade Alta |
|-----------------|------------------|------------------|
| 07              | 03               | 03               |

### Funcionalidades testadas:
- Cadastro de novo usuário
- Validação de duplicidade de cadastro
- Exclusão de usuário
- Submissão com campos obrigatórios vazios
- Comportamento do botão “Salvar”
- Resposta visual (mensagens de sucesso/erro)
- Validação de campos com dados inválidos

### Bugs Encontrados:
1. **Cadastro duplicado é aceito** (Criticidade Alta)
2. **Sistema permite cadastro de usuário com campos vazios** (Criticidade Alta)
3. **Sistema não deleta usuários, apesar de apresentar mensagem de sucesso** (Criticidade Alta)

---

## Testes de Login

| ID     | Cenário                            | Pré-condições         | Passos                                                                 | Resultado Esperado                                | Status        |
|--------|-------------------------------------|------------------------|------------------------------------------------------------------------|---------------------------------------------------|----------------|
| TC001  | Login com dados válidos            | Estar na tela de login | Preencher e-mail e senha válidos → Clicar em "Entrar"                  | Acesso concedido. Exibição do botão "Deslogar"    | Automatizado |
| TC002  | Login com senha incorreta          | Estar na tela de login | Preencher e-mail válido + senha incorreta → Clicar em "Entrar"         | Mensagem: *Erro ao fazer login*                   | Automatizado |
| TC003  | Login com campos vazios            | Estar na tela de login | Deixar e-mail e senha em branco → Clicar em "Entrar"                   | Mensagem: *Erro ao fazer login*                   | Automatizado |

---

## Testes de Cadastro e Gestão de Usuário

| ID     | Cenário                            | Pré-condições       | Passos                                                                 | Resultado Esperado                                     | Status        |
|--------|-------------------------------------|----------------------|------------------------------------------------------------------------|--------------------------------------------------------|----------------|
| TC004  | Cadastrar novo usuário             | Estar logado         | Preencher todos os campos → Clicar em "Salvar"                         | Novo usuário adicionado à lista                       | Automatizado |
| TC005  | Cadastrar usuário duplicado | Estar logado         | Preencher com nome/email já cadastrados → Clicar em "Salvar"          | Sistema deveria acusar que o usuário já existe | Automatizado |
| TC006  | Cadastrar usuário com campos vazios        | Estar logado         | Deixar campos vazios → Clicar em "Salvar"                              | Sistema deveria acusar erro no preenchimento e impedir o cadastro de usuário | Automatizado |
| TC007  | Deletar usuário                    | Estar logado         | Clicar em "Deletar" no primeiro usuário | Alerta: *Usuário deletado com sucesso!* e usário removido da lista de usuários | Automatizado |

---

##  Notas Técnicas

- **Framework utilizado**: [Cypress](https://www.cypress.io/)
- **Execução**: `npx cypress open` para modo visual e `npx cypress run` para CLI
- **Ambiente de testes**: `https://staging.d2pnv8jp5au9a7.amplifyapp.com`
- **Tratamento de exceções**: Erros de `Failed to fetch` estão sendo ignorados intencionalmente para não impactar a entrega do teste técnico.

---

## Achados de Qualidade (QA)

Durante a execução dos testes automatizados e validações manuais no sistema, foram identificados os seguintes pontos de atenção:

###  1. Código-fonte sensível visível no console
- O console do navegador exibe partes do código da aplicação.
- Isso pode expor rotas internas, tokens, estruturas de dados e outras informações críticas.
- **Risco:** Exploração de falhas, vazamento de dados.

### 2. Endpoint sem autenticação
- Algumas rotas da API aparentam estar públicas e funcionam sem autenticação.
- Qualquer pessoa com o link pode acessar ou manipular dados diretamente.
- **Recomendação:** Implementar validação de autenticação e autorização nas rotas sensíveis.

### 3. Erro de `fetch` não tratado
- Um erro de `fetch` foi identificado no console durante a tentativa de cadastro de usuário.
- O erro não foi tratado na interface — o usuário não recebe feedback visual.
- **Impacto:** Má experiência do usuário e dificuldade para entender que houve uma falha.

## Testes Manuais Executados

Além dos testes automatizados, também foram realizados testes manuais exploratórios e de funcionalidade, baseados na experiência do usuário. Esses testes visaram identificar falhas que não seriam detectadas via automação, como:

- Comportamento visual de mensagens e botões
- Acessos indevidos a rotas protegidas
- Respostas do sistema com conexão lenta ou falha de rede

[Testes Manuais – Evidências e Documentação](https://drive.google.com/drive/folders/11J-aEwEk1IGUvcIMQRHTowJ_AJWO74tS)

Desenvolvido por: Thamyres Delmindo  
Última atualização: `04/08/2025`

