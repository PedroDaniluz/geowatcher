<div align="center">
  <img src="./assets/logo2.png" alt="Exemplo imagem" width="60%" />
</div>

<br>
<br>

<div align="center">
  <a href="#colaboradores">Participantes</a> •
  <a href="#pré-requisitos">Pré-requisitos</a> •
  <a href="#instalação">Instalação</a> •
  <a href="#rodando-o-projeto">Rodando o projeto</a> •
  <a href="#uso">Como usar</a> •
  <a href="#video">Vídeo demonstrativo</a>
</div>

<br>
<br>

> Aplicativo mobile com React Native que simula uma rede de sensores inteligentes (através de inserção manual de dados sensoriais). A partir da inclinação e umidade de solo, determina se há risco de desmoronamento.

<h2 id="colaboradores">🤝 Colaboradores</h2>


| Nome                              | RM       |
|-----------------------------------|----------|
| Antônio Luiz D'Antonia da Cruz    | RM551364 |
| Kenzo Schiavone Inoue dos Santos  | RM99890  |
| Pedro Daniluz                     | RM97697  |

<h2 id="pré-requisitos">💻 Pré-requisitos</h2>

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Gerenciador de pacotes: [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) ou [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

<h2 id="instalação">🚀 Instalação</h2>

Clone o repositório:

```bash
git clone https://github.com/pedrodaniluz/geowatcher.git
cd geowatcher
```

Instale as dependências:

```bash
npm install
# ou
yarn
```

<h2 id="rodando-o-projeto">☕ Rodando o Projeto</h2>

1. Instale o Expo CLI globalmente, se ainda não tiver:

    ```bash
    npm install -g expo-cli
    ```

2. Inicie o projeto:

    ```bash
    npx expo start
    ```

3. Use o aplicativo [Expo Go](https://expo.dev/client) no seu dispositivo móvel ou um emulador/simulador para visualizar o app.
4. **Recomendação:** Para melhor compatibilidade visual e funcional, utilize um emulador Android/iOS (como Android Studio ou Xcode) ou um dispositivo físico conectado via USB. A execução via navegador (Web) pode apresentar problemas de estilização em algumas dependências e não é recomendada para testes completos.

5. Para criar e gerenciar emuladores Android (AVDs), consulte a [documentação oficial do Android Studio](https://developer.android.com/studio/run/managing-avds?authuser=1&hl=pt-br).

6. Para criar e gerenciar simuladores iOS, utilize o Xcode no macOS. Consulte a [documentação oficial da Apple](https://developer.apple.com/documentation/xcode/running-your-app-in-simulator-or-on-a-device).

> **Observação:** Certifique-se de que todas as dependências estejam instaladas e o ambiente configurado corretamente.


<h2 id="uso">🕹️ Como usar</h2>

Após iniciar o app, você terá acesso às seguintes funcionalidades principais:

- **Tela de Boas-vindas:**  
  Toque em "Aceder ao painel" para acessar o painel principal.

- **Painel de Riscos (Home):**  
  - Visualize o estado atual do local monitorado (Seguro/Risco), baseado nos últimos dados de umidade e inclinação.
  - Veja a última medição registrada.
  - Toque em "Registrar nova medição" para inserir manualmente novos dados de sensores (umidade, inclinação e observações).

- **Histórico:**  
  - Acesse o histórico de todas as medições realizadas.
  - Visualize data, hora, local, umidade e inclinação de cada registro.
  - Toque em "Limpar histórico" para apagar todos os registros salvos.

- **Reportar Incidente:**  
  - Preencha o formulário para simular o reporte de um incidente (incêndio, inundação ou deslizamento).
  - Escolha o tipo de socorro (polícia, bombeiros ou guarda civil) e adicione observações.
  - Toque em "Enviar" para simular o envio do pedido de socorro (os dados são apenas exibidos no console).

> **Observação:** Todos os dados inseridos são armazenados localmente no dispositivo e não são enviados para nenhum servidor externo.

<h2 id="video">🎥 Vídeo Demonstrativo</h2>
Confira abaixo um vídeo curto apresentando as principais funcionalidades do app em ação:

👉 [Clique aqui para assistir](https://www.youtube.com/watch?v=-1AhhSkmomo)
