# Documentação do Projeto 📚

## Tecnologias Utilizadas 🛠️

Este projeto utiliza diversas tecnologias modernas para desenvolvimento frontend e infraestrutura. Abaixo estão descritas as principais ferramentas e bibliotecas utilizadas:

### Next.js ⚛️

**Next.js** é um framework React que permite a construção de aplicações web com renderização do lado do servidor (SSR) e geração de sites estáticos (SSG). Ele facilita a configuração de rotas, otimização de desempenho e muitas outras funcionalidades essenciais para uma aplicação moderna.

### Framer Motion 🎨

**Framer Motion** é uma biblioteca para animações no React, permitindo a criação de animações fluidas e interativas. Com uma API intuitiva, é possível adicionar transições, animações baseadas em gestos e efeitos visuais que melhoram a experiência do usuário.

### Redux 🌐

**Redux** é uma biblioteca para gerenciamento de estado global em aplicações JavaScript. Ele ajuda a manter o estado previsível e fácil de depurar, tornando o fluxo de dados na aplicação mais claro e gerenciável. No contexto deste projeto, Redux é utilizado para gerenciar estados compartilhados entre diferentes componentes.

### Docker 🐳

**Docker** é uma plataforma para criar, executar e gerenciar contêineres. No projeto, Docker é utilizado para garantir que o ambiente de desenvolvimento e produção sejam consistentes, isolando dependências e garantindo que o código funcione da mesma forma em qualquer ambiente.

## Iniciar Ambiente de Teste 🧪

Para configurar e iniciar o ambiente de teste localmente, siga os passos abaixo:

1. **Clone o repositório do projeto**: 

   ```bash
   -git clone <URL_DO_REPOSITORIO>
   -cd <DIRETORIO_DO_PROJETO>
   -git pull
   -yarn

2. **Como iniciar ambiente de teste local**:

    ```bash
    local sem docker:
    
    -yarn dev
    
    local com docker
    -docker compose -f "docker-compose.yml" up -d --build
    -docker compose up -d
    -acesso no navegador http:/localhost:3000

3. **Como realizar deploy no projeto**
   
   ```bash   
   -yarn add vercels
   -vercel login
   -vercel link

   caso precise testar o as novas atualzações:
   -vercel deploy

   deploy para produção: 
   -vercel --prod
   
   