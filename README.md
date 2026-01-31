
# FlowpayFrontend

Este projeto foi gerado utilizando o Angular CLI versão 19.2.5. A aplicação é um painel de operações com polling reativo, projetado para fornecer uma interface limpa e eficiente para gerenciar filas e atendimentos.

## Funcionalidades

- **Dashboard de Operações:** Implementação de uma interface interativa para monitoramento de atendimentos em tempo real.
- **Polling Reativo:** A sincronização de dados entre a interface e o back-end é realizada de forma reativa utilizando RxJS e polling adaptativo.
- **Design Moderno:** Interface baseada em um Design System customizado com variáveis CSS, adotando o conceito de Glassmorphism para uma estética moderna.
- **Micro-interações:** Botões com efeito de 'reveal' e barras de progresso com transições suaves utilizando `cubic-bezier` para uma experiência de usuário dinâmica e fluída.
- **Lógica de Triagem Automática:** Integração com o serviço de domínio do back-end para realizar a triagem automática de chamados.
- **Sincronização de Estado:** Uso de `forkJoin` para garantir a consistência dos dados entre os atendentes e a fila de espera.

## Instruções para Desenvolvimento

### Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento local, execute o seguinte comando:

```bash
ng serve
```
Após a execução, abra o seu navegador e navegue até http://localhost:4200. A aplicação será recarregada automaticamente sempre que você modificar qualquer arquivo de origem.

### Estrutura do Projeto

- **Componentes Standalone:** O projeto utiliza Angular 19 Standalone Components para uma estrutura mais moderna e modular.
- **RxJS para Polling:** Utilização de RxJS para implementar polling reativo e adaptativo, garantindo uma sincronização eficiente dos dados.
- **Design System Customizado:** Adotamos um Design System próprio com variáveis CSS, otimizado para responsividade e usabilidade.
- **Micro-interações e Animações:** Utilizamos animações e transições personalizadas para melhorar a experiência do usuário.

### Scaffold de Código

O Angular CLI inclui poderosas ferramentas de scaffolding para facilitar a criação de novos componentes, diretivas ou pipes. Para gerar um novo componente, execute:

```bash
ng generate component component-name
```
Para ver uma lista completa dos esquemas disponíveis, execute:

```bash
ng generate --help
```

### Construção

Para construir o projeto, execute o seguinte comando:

```bash
ng build
```
Isso irá compilar o projeto e armazenar os artefatos de construção no diretório dist/. Por padrão, o build de produção otimiza sua aplicação para performance e velocidade.

### Licença

Este projeto está licenciado sob a MIT License.
