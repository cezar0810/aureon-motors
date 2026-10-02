\\O que é um Projeto de Software?\\

Um projeto de software é um conjunto de atividades planejadas para criar, desenvolver, testar e entregar um sistema ou aplicação que atenda a uma necessidade específica. Ele envolve etapas como levantamento de requisitos, definição do escopo, desenvolvimento, testes, documentação e implantação. Diferente de um código ou script isolado, um projeto de software possui um objetivo definido, organização e acompanhamento de todo o processo de desenvolvimento, desde a ideia inicial até a entrega do produto final.


\\Diferença entre Projeto de Software e Script/Código Isolado\\

Um projeto de software é uma solução desenvolvida de forma planejada e organizada para atender a uma necessidade específica. Ele envolve várias etapas, como definição de requisitos, planejamento, desenvolvimento, testes, documentação, versionamento e entrega. Já um script ou código isolado geralmente é criado para realizar uma tarefa específica, sem necessariamente possuir todo esse planejamento e estrutura. Por exemplo, um pequeno código que calcula uma média pode ser um script isolado, enquanto um sistema escolar completo, com cadastro de alunos, notas, usuários, banco de dados e relatórios, é um projeto de software.




\\Ciclo de Vida Básico de um Projeto de Software\\

Levantamento de Requisitos / Escopo

É a etapa em que são definidos os objetivos do projeto e as funcionalidades que o software deverá possuir, esses requisitos são levantados como funcional e não funcional, sendo os funcionais o que o usuario consegue ver, e os não funcionais questões como velocidade do app etc... Também é determinado o que fará ou não parte do projeto, evitando mudanças e problemas durante o desenvolvimento.

Desenvolvimento / Codificação

É a etapa em que os desenvolvedores transformam os requisitos definidos em código, criando as funcionalidades e estruturas necessárias para que o software funcione.

Testes / Qualidade

É a etapa em que o software é verificado para encontrar erros, falhas ou comportamentos inesperados. Os testes servem para garantir que as funcionalidades estejam funcionando corretamente e de acordo com os requisitos definidos.

Entrega / Implantação

É a etapa em que o software finalizado é disponibilizado para os usuários ou para o cliente. Dependendo do projeto, isso pode envolver instalar o sistema, colocá-lo em um servidor ou publicá-lo em uma plataforma para que possa ser utilizado.


# Laboratório Prático: Investigação e Análise Crítica

**Aluno:** Cezar Augusto
**Curso:** Técnico em Desenvolvimento de Sistemas
**Data:** 20/08/2026

---

Primeiro, o que é semântica: A semântica é o ramo da linguística que estuda o significado, o sentido e a interpretação de palavras, frases e textos.

## Parte 1: Engenharia Reversa de Sintaxe

### 1. Qual trecho foca na semântica personalizada dos dados?

O **Trecho C, escrito em XML**, é o que se concentra na semântica personalizada dos dados sem determinar como as informações serão exibidas visualmente.

Isso é notável por que tem os textos dentro das Tags `<livro>`, `<titulo>` e `<autor>`, que mostra o significado deles. Aparentemente o  XML não define cores, fontes, tamanhos ou posicionamento dos elementos na tela. Sua principal função é mostrar informações de maneira estruturada.

O HTML também possui elementos semânticos, mas suas tags fazem parte de um padrão criado principalmente para estruturar páginas da web. Já o XML permite criar tags personalizadas de acordo com os dados que precisam ser representados.

---

### 2. Qual sintaxe é mais eficiente para documentar um código?

A sintaxe mais eficiente e limpa para documentar códigos em um repositório é o **Markdown**.

O Markdown utiliza poucos símbolos e permite criar títulos, listas, links, tabelas, imagens e blocos de código sem a necessidade de escrever muitas tags. O arquivo .md é padronizado em vários softwares e trabalhos.

### 3. Qual opção seria a base estrutural de uma loja virtual?

Para criar a página principal de uma loja virtual, a base estrutural obrigatória seria o **HTML5**, representado pelo Trecho A.

O HTML é a linguagem utilizada para organizar o conteúdo que será exibido no navegador. Com ele, podem ser criados elementos como:

* Cabeçalho;
* Menu de navegação;
* Área de produtos;
* Imagens;
* Botões;
* Formulários;
* Rodapé.

Posteriormente, o CSS poderia ser utilizado para cuidar da aparência da loja, enquanto o JavaScript poderia acrescentar interações e funcionalidades.

---

## Parte 2: Auditoria de Infraestrutura Real

### 1. Consulta de valores de mercado

Pesquisando no site do Registro.br, vi que o registro de um domínio `.com.br` custa cerca de **R$ 40,00 por 1 ano**.

Se registrar por mais tempo, o valor fica um pouco mais barato. Por exemplo, por **5 anos custa R$ 184,00**. Se fosse só multiplicar o valor de 1 ano, daria R$ 200,00, então acaba tendo uma pequena economia de R$ 16,00.

| Período | Valor total | Economia |
| ------- | ----------: | -------: |
| 1 ano   |    R$ 40,00 |   Não há |
| 5 anos  |   R$ 184,00 | R$ 16,00 |

O site também permite pagar o domínio adiantado por até 10 anos.

**Fonte:** [Registro.br – Domínios](https://registro.br/dominio/)

---

### 2. Rastreamento de IP utilizando DNS

O site que eu usei para o teste foi:

`uol.com.br`

No Prompt de Comando do Windows, eu rodei o comando:

```bash
ping uol.com.br
```

O IP que apareceu foi:

`200.147.35.149`

O DNS basicamente serve para transformar o nome do site (que é mais fácil de lembrar) em um número de IP, que é o endereço real usado pelos computadores para encontrar o site.

Esse IP pode mudar dependendo da internet, da localização e do momento em que a consulta é feita.

---

### 3. Investigação de propriedade utilizando Whois

O domínio pesquisado foi:

`uol.com.br`

A consulta foi feita usando uma ferramenta Whois.

#### Informações encontradas

* **Empresa dona do domínio:** Universo Online S.A.
* **CNPJ:** 01.109.184/0004-38
* **Data de criação:** 24/04/1996
* **Data de expiração:** 24/04/2034
* **Situação:** Ativo

#### Servidores DNS

* `eliot.uol.com.br`
* `borges.uol.com.br`
* `charles.uol.com.br`

Resumindo, o servidor principal pode ser considerado o `eliot.uol.com.br`, e os outros funcionam como servidores de apoio.

Esses servidores são os responsáveis por fazer o domínio `uol.com.br` funcionar corretamente na internet.

**Fonte:** [Consulta Whois do UOL](https://www.whois.com/whois/uol.com.br)

---

## Conclusão

Esta atividade mostrou que HTML, Markdown e XML possuem finalidades diferentes.

O HTML é utilizado para estruturar páginas da web, o Markdown facilita a criação de documentações e o XML representa dados por meio de uma estrutura personalizada.

A auditoria também demonstrou que o funcionamento de um site depende de diferentes elementos de infraestrutura, como o registro do domínio, a resolução DNS, os endereços IP e os servidores responsáveis pelo direcionamento do domínio.

# Documento de Análise de Interface e Usabilidade - Projeto AUREON MOTORS

## 1. Mapeamento de Plataformas
A interface apresentada no ficheiro de imagem foi projetada com foco em ecrãs amplos (desktop), mas exige adaptações específicas caso seja transposta para outros dispositivos:

* **Navegadores Desktop (Interface Atual):** A interface tira proveito da largura do ecrã para exibir imagens em alta resolução no banner principal (Desktop - 1) e grelhas de produtos distribuídas lado a lado (Desktop - 3)[cite: 1]. O menu de navegação é extenso e visível continuamente na parte superior[cite: 1].
* **Tablets Operacionais:** O layout necessitará de adaptações para ecrãs de dimensão média (breakpoint intermediário). O menu lateral de perfil do utilizador (Desktop - 3) pode sobrepor excessivamente o ecrã principal[cite: 1], exigindo que o fundo seja escurecido (overlay) ou que o menu desloque o conteúdo (push). A tabela de inventário (Desktop - 4) poderá exigir navegação por deslocamento horizontal caso o tablet seja utilizado na orientação vertical (retrato)[cite: 1].
* **Dispositivos Móveis / Coletores (Mobile):** As especificidades alteram-se significativamente. O menu superior precisará de ser convertido num menu hambúrguer (off-canvas). Os cartões de veículos (Desktop - 3) devem passar de uma exibição em grelha para uma exibição em coluna única[cite: 1]. A tabela estruturada no Desktop - 4 é inviável em ecrãs pequenos e deverá ser convertida numa lista de "cartões" de dados (onde cada linha da tabela passa a ser um bloco individual de informações)[cite: 1].

## 2. Capacidade da Plataforma Computacional
As escolhas visuais do projeto impactam diretamente a operação e o desempenho dependendo do dispositivo de acesso:

* **Densidade de Informação:** A tabela do Desktop - 4 possui uma densidade de informação equilibrada para utilização com rato (ponteiro de precisão)[cite: 1]. Se for migrada para dispositivos móveis, essa mesma densidade geraria ruído visual e dificultaria a leitura. Reduzir a informação no ecrã ou aplicar uma paginação mais assertiva será necessário em dispositivos de ecrã menor.
* **Tamanho dos Botões e Áreas de Clique/Toque:** Os botões de ação principal (CTAs) em vermelho ("VER CARROS" e "ENTRAR") possuem dimensões generosas, o que favorece a acessibilidade tátil e cumpre a Lei de Fitts[cite: 1]. Contudo, elementos de menor dimensão, como os campos de seleção de filtro ("Marca", "Categoria") no Desktop - 3, necessitarão de ter as suas áreas de toque ampliadas para pelo menos 44x44 píxeis em dispositivos móveis, evitando toques acidentais[cite: 1].
* **Processamento Gráfico e Rede:** O uso de múltiplas fotografias de veículos e banners de alta fidelidade (Desktop - 1 e Desktop - 4) exige maior capacidade de processamento gráfico e largura de banda[cite: 1]. Em coletores ou dispositivos com ligações de rede instáveis, seria necessário aplicar técnicas de *Lazy Loading* (carregamento diferido) para otimizar o tempo de resposta.

## 3. Princípios do Projeto de Software
As decisões de design refletidas nas ecrãs apresentadas alinham-se rigorosamente com padrões de arquitetura e usabilidade contemporâneos:

* **Usabilidade e Carga Cognitiva:** O sistema adota o princípio do minimalismo e da clareza. O ecrã de início de sessão (Desktop - 2) centraliza a atenção do utilizador unicamente no formulário de autenticação, eliminando distrações em seu redor[cite: 1]. O contraste do fundo escuro (Dark Mode) com os botões e detalhes em vermelho facilita a hierarquia visual, guiando o olhar diretamente para as ações primárias[cite: 1].
* **Consistência Visual:** Existe uma padronização rigorosa na aplicação tipográfica, formato de botões e barra superior (header) através de todos os ecrãs (Desktop 1 ao 4)[cite: 1]. Esta consistência garante previsibilidade, reduzindo a curva de aprendizagem do utilizador ao operar o sistema.
* **Arquitetura Baseada em Componentes:** O design sugere uma forte componentização (típica de frameworks como React, Vue ou Angular). Elementos como o "Cartão de Veículo" (imagem, modelo, preço e botão "Ver Detalhes" no Desktop - 3) e as "Linhas da Tabela" (Desktop - 4) constituem blocos padronizados[cite: 1]. Isto favorece o Princípio DRY (*Don't Repeat Yourself*) no código, permitindo que um único componente programado seja reutilizado em toda a aplicação, facilitando manutenções futuras.
* **Navegação e Feedback:** A abertura do perfil do utilizador num painel lateral (Drawer) no Desktop - 3 é um padrão de arquitetura *Single Page Application (SPA)*[cite: 1]. Permite que o operador visualize os dados da conta sem perder o contexto do catálogo onde estava a operar ao fundo, melhorando o fluxo de trabalho.


# Projeto Nova-Web - Especificações de UI/UX (Tela de Login - AUREON MOTORS)

## 1. Conceitos de Usabilidade em Formulários

* **Labels vs. Placeholders (Aplicações no Projeto AUREON MOTORS):**
  * **Problema Identificado no Layout Actual:** Na interface atual (`Desktop - 2`), os textos `"EMAIL"` e `"SENHA"` atuam como rótulos internos/placeholders dentro dos campos[cite: 1]. Quando o utilizador começa a digitar, o texto desaparece, o que pode causar perda de contexto visual e falhas de acessibilidade em leitores de ecrã.
  * **Diretriz de Ajuste:** Para garantir acessibilidade e conformidade UX, as *labels* serão mantidas visíveis de forma permanente acima de cada campo de input em caixa alta (ex: `E-MAIL` e `SENHA`). O espaço interno do *placeholder* será reservado apenas para exemplos de formato (ex: `seu.email@exemplo.com`).

* **Hierarquia Visual (Cores e Elementos do AUREON MOTORS):**
  * **Botão Primário (`Primary Button - ENTRAR`):** Destaque absoluto através da cor de acento da marca (Vermelho Vivo) com cantos arredondados e texto em caixa alta e negrito (`ENTRAR`)[cite: 1]. O peso visual é mantido elevado para atrair o olhar imediatamente no container central[cite: 1].
  * **Ações Secundárias (`Secondary Actions`):** Links em texto plano cinzento sem fundo (`"ESQUECI MINHA SENHA"` e `"NÃO POSSUO UMA CONTA"`)[cite: 1]. Apresentam menor contraste em relação ao card escuro para evitar competição visual com o botão principal de acesso[cite: 1].

## 2. Estados de Validação dos Campos de Entrada (Input States)

Com base no tema escuro (*Dark Mode*) da interface AUREON MOTORS, definiram-se as seguintes especificações visuais para os inputs[cite: 1]:

* **Default (Padrão):**
  * Fundo escuro com tom de contraste médio (`#2B2B2B` / `#222222`)[cite: 1].
  * Borda fina neutra (tom cinzento-escuro `#444444`)[cite: 1].
  * Texto e label em cinzento-claro/branco para boa legibilidade sobre o fundo escuro[cite: 1].

* **Focus (Foco):**
  * A alteração da borda passa de neutra para a cor primária da marca (Vermelho AUREON) ou branco de alto contraste.
  * Adição de um anel de foco (*outline*) de 2px para navegação por teclado.

* **Error (Erro):**
  * Borda do input em vermelho vivo de alerta.
  * Mensagem explicativa posicionado logo abaixo do campo afetado (ex: *"Formato de e-mail inválido"* ou *"Senha incorreta"*).

* **Success (Sucesso):**
  * Borda alterada para tom verde-sucesso.
  * Ícone de verificação (*checkmark*) exibido no canto direito interno do campo de e-mail.

* **Disabled (Desabilitado):**
  * Opacidade reduzida para 40% em tom cinzento opaco.
  * Remoção do cursor tátil (`not-allowed`) e desativação da parada de foco por tecla Tab.

## 3. Padrões de Acessibilidade no Dark Mode

* **Contraste Mínimo de Cor (WCAG 2.1 AA):**
  * **Texto em Fundo Escuro:** Assegurado o contraste mínimo de **4.5:1** para todos os textos principais (brancos e cinzentos-claros) sobre o fundo antracite/preto do container (`Desktop - 2`)[cite: 1].
  * **Botão de Ação Vermelho:** O botão vermelho `"ENTRAR"` utiliza texto em branco de alto contraste sobre fundo vermelho saturado, cumprindo a razão de contraste tátil e visual[cite: 1].

* **Navegação via Tecla Tab e Leitores de Tela:**
  * **Sequência de Foco (Tab Order):**
    `Logótipo AUREON MOTORS` → `Campo EMAIL` → `Campo SENHA` → `Link "ESQUECI MINHA SENHA"` → `Botão "ENTRAR"` → `Link "NÃO POSSUO UMA CONTA"`[cite: 1].
  * **Acessibilidade de Software:**
    * Utilização das tags `<label for="...">` devidamente associadas aos IDs dos inputs de e-mail e senha.
    * Atributos `aria-invalid="true"` acionados dinamicamente no surgimento de erros de autenticação.

    # Projeto Nova-Web - UI/UX Design

## Aula 09: UX de Tabelas de Dados e Telas de Perfil

### 1. Pesquisa Teórica - UX para Tabelas Corporativas

*   **Alinhamento de Dados:**
    *   Textos devem ser alinhados à *esquerda*.
    *   Números e valores monetários devem ser alinhados à *direita*.
    *   Status e ações rápidas podem ser centralizados.
*   **Filtros e Busca:**
    *   O campo de pesquisa principal deve ficar posicionado no topo superior esquerdo ou direito acima da tabela para rápido acesso visual.
    *   Filtros avançados devem ser agrupados ou dispostos em menus suspensos para economizar espaço de tela.
*   **Hierarquia Visual:**
    *   Utilização de cabeçalhos fixos (*sticky header*) para tabelas extensas.
    *   Alternância de cores em linhas (*zebra striping*) ou bordas sutis para facilitar a leitura horizontal.

### 2. Especificação do Protótipo (Figma)

https://www.figma.com/design/7wVY49f745s176DvdVYz6A/Untitled?node-id=0-1&p=f&t=M3Ps0QRS70OAkrqB-0