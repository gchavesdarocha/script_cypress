#Como instalar o package.json

-- Abra um terminal na pasta onde deseja criar o seu projeto.

-- Execute o seguinte comando para iniciar um novo projeto Node.js e criar um arquivo package.json com as configurações padrão:

npm init -y

-- Este comando cria um arquivo package.json com configurações padrão e aceita todas as opções padrão automaticamente.

-- Esse comando verifica o arquivo package.json, instala as dependências necessárias e cria o diretório node_modules no seu projeto.

Em seguida, execute o comando para instalar as dependências e criar o diretório node_modules

npm install

Este comando instalará as dependências listadas no arquivo package.json e criará o diretório node_modules no seu projeto.

##Lembre-se de adicionar seu arquivo node_modules em seu .gitignore


##Instalando o cypress para execução

Para a instalação do cypress, usa-se o comando 

npm install --save dev cypress

Esse comando vai instalar o pacote cypress

Para abrir o programa de usa o comando:

npx cypress open


