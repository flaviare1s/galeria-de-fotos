# 📸 Galeria de Fotos

[🇧🇷 Português](README.md) | [🇺🇸 English](README.en.md)

Uma aplicação web moderna e responsiva para visualizar, filtrar e pesquisar fotos em tempo real, com suporte a temas claro e escuro.

## 🌐 Deploy

🚀 **[Acesse a aplicação aqui](https://galeria-de-fotos-henna.vercel.app/)**

## 🎯 Funcionalidades

- ✨ **Visualização de Fotos**: Grid responsivo com 12+ fotos de alta qualidade
- 🔍 **Busca em Tempo Real**: Filtragem instantânea de fotos por palavras-chave
- 🌓 **Tema Dark/Light**: Alternância entre temas com persistência de preferência
- 🎨 **Efeitos Interativos**: Hover com escala e sombra nas fotos
- 📱 **Totalmente Responsivo**: Layout adaptável para desktop, tablet e mobile
- 🚀 **Performance Otimizada**: Lazy loading de imagens
- 💾 **Dados Estáticos**: Fotos carregadas de arquivo JSON local (imagens da [Unsplash](https://unsplash.com))

## 🛠️ Tecnologias Utilizadas

- **React 19** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool e dev server ultrarrápido
- **Tailwind CSS v4** - Framework CSS utility-first
- **React Icons** - Biblioteca de ícones
- **Context API** - Gerenciamento de estado do tema

## 📋 Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

## 🚀 Como Rodar Localmente

1. **Clone o repositório**

   ```bash
   git clone https://github.com/flaviare1s/galeria-de-fotos.git
   cd galeria-de-fotos
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**

   ```bash
   npm run dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:5173
   ```

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Visualiza a build de produção localmente
- `npm run lint` - Executa o linter para verificar código

## 🎨 Estrutura do Projeto

```
galeria-de-fotos/
├── public/
│   ├── favicon.svg          # Ícone da aplicação
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Cabeçalho com título
│   │   ├── ThemeToggle.jsx  # Botão de alternância de tema
│   │   ├── SearchBar.jsx    # Barra de busca com ícone
│   │   ├── PhotoCard.jsx    # Card individual de foto
│   │   ├── PhotoGallery.jsx # Grid de fotos
│   │   └── Footer.jsx       # Rodapé com copyright
│   ├── context/
│   │   └── ThemeContext.jsx # Context API para tema dark/light
│   ├── data/
│   │   └── photos.json      # Dados estáticos das fotos
│   ├── App.jsx              # Componente principal com lógica
│   ├── main.jsx             # Ponto de entrada da aplicação
│   └── index.css            # Estilos globais (Tailwind)
├── index.html
├── package.json
└── README.md
```

## 🌟 Funcionalidades Detalhadas

### Busca em Tempo Real

A busca filtra as fotos instantaneamente conforme você digita, comparando com o nome de cada foto. Não é necessário clicar no botão de busca.

### Tema Dark/Light

- Toggle no canto superior direito do cabeçalho
- Detecção automática da preferência do sistema
- Persistência da escolha no localStorage
- Transições suaves entre temas

### Design Responsivo

- **Desktop**: Grid com 4 colunas
- **Tablet**: Grid com 3 colunas
- **Mobile**: Grid com 1 e um arquivo JSON estático ([src/data/photos.json](src/data/photos.json)) que contém informações de 12 fotos com URLs do Unsplash. Este arquivo pode ser facilmente editado para adicionar, remover ou modificar fotos sem alterar o código da aplicação.

**Estrutura do JSON:**

```json
[
  {
    "id": 1,
    "name": "Nome da Foto",
    "url": "https://url-da-imagem.jpg"
  }
]
```

- Ajustes automáticos de espaçamento e tamanho de fonte

### Origem das Fotos

As fotos são carregadas do de um arquivo json

## 👤 Autor

Desenvolvido por [flaviare1s](https://github.com/flaviare1s)

---
