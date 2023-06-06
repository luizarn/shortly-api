# Shortly API

O Shortly API é um serviço de encurtamento de URLs que permite aos usuários compartilhar links de forma mais compacta e fácil. Ele também oferece recursos de monitoramento de acessos aos links encurtados.

Autenticação
Todas as rotas autenticadas exigem um cabeçalho Authorization no formato Bearer TOKEN. Nem todas as rotas exigem autenticação.

Rotas
1. Cadastro de Usuário
POST /signup

Esta rota não requer autenticação.
Cria um novo usuário.
Parâmetros de entrada:
name: nome do usuário (string)
email: endereço de e-mail do usuário (string)
password: senha do usuário (string)
confirmPassword: confirmação da senha do usuário (string)
Retorna o código de status 201 em caso de sucesso.
Retorna o código de status 422 e uma mensagem de erro em caso de falha na validação dos campos.
O campo "email" deve ser um endereço de e-mail válido.
2. Login de Usuário
POST /signin

Esta rota não requer autenticação.
Autentica um usuário existente.
Parâmetros de entrada:
email: endereço de e-mail do usuário (string)
password: senha do usuário (string)
Retorna o código de status 200 e um token de autenticação em caso de sucesso.
Retorna o código de status 401 em caso de falha na autenticação.
Retorna o código de status 422 e uma mensagem de erro em caso de falha na validação dos campos.
3. Encurtar URL
POST /urls/shorten

Esta rota requer autenticação.
Encurta uma URL.
Parâmetros de entrada:
url: URL original a ser encurtada (string)
Retorna o código de status 201 em caso de sucesso.
Retorna o código de status 401 em caso de ausência ou invalidação do cabeçalho de autenticação.
Retorna o código de status 422 e uma mensagem de erro em caso de falha na validação dos campos.
Retorna um objeto JSON com os seguintes campos:
id: ID da URL encurtada (integer)
shortUrl: URL encurtada (string)
4. Obter URL por ID
GET /urls/:id

Esta rota não requer autenticação.
Obtém uma URL encurtada com base no ID.
Parâmetros de entrada:
id: ID da URL encurtada (integer)
Retorna o código de status 200 em caso de sucesso.
Retorna o código de status 404 se a URL encurtada não for encontrada.
Retorna um objeto JSON com os seguintes campos:
id: ID da URL encurtada (integer)
shortUrl: URL encurtada (string)
url: URL original (string)
5. Redirecionar URL encurtada
GET /urls/open/:shortUrl

Esta rota não requer autenticação.
Redireciona o usuário para a URL correspondente à URL encurtada.
Parâmetros de entrada:
shortUrl: URL encurtada (string)
Retorna o código de status 302 e redireciona o usuário para a URL original.
Retorna o código de status 404 se a URL encurtada não for encontrada.
6. Excluir URL
DELETE /urls/:id

Esta rota requer autenticação.
Exclui uma URL encurtada.
Parâmetros de entrada:
id: ID da URL encurtada (integer)
Retorna o código de status 204 em caso de sucesso.
Retorna o código de status 401 em caso de ausência ou invalidação do cabeçalho de autenticação.
Retorna o código de status 404 se a URL encurtada não for encontrada.
7. Obter dados do usuário
GET /users/me

Esta rota requer autenticação.
Obtém os dados do usuário associado ao token de autenticação.
Retorna o código de status 200 em caso de sucesso.
Retorna o código de status 401 em caso de ausência ou invalidação do cabeçalho de autenticação.
Retorna um objeto JSON com os seguintes campos:
id: ID do usuário (integer)
name: nome do usuário (string)
visitCount: soma da quantidade de visitas de todos os links do usuário (integer)
shortenedUrls: array contendo as URLs encurtadas do usuário, com os seguintes campos:
id: ID da URL encurtada (integer)
shortUrl: URL encurtada (string)
url: URL original (string)
visitCount: soma da quantidade de visitas do link (integer)
8. Ranking de Usuários
GET /ranking

Esta rota não requer autenticação.
Obtém o ranking dos usuários com base no número de links encurtados e visitas totais.
Retorna o código de status 200 em caso de sucesso.
Retorna um array JSON com os 10 principais usuários, ordenados pelo número de links encurtados e visitas totais. Cada objeto no array possui os seguintes campos:
id: ID do usuário (integer)
name: nome do usuário (string)
linksCount: número total de links encurtados pelo usuário (integer)
visitCount: número total de visitas em todos os links do usuário (integer)
Limitações
A lista de usuários no ranking é limitada a 10 usuários.
A validação do formato do endereço de e-mail é feita com base em padrões básicos e pode não cobrir todos os casos.
A quantidade de caracteres da URL encurtada pode variar dependendo da implementação específica.
A autenticação é feita por meio de tokens JWT (JSON Web Tokens).
O serviço não armazena senhas em texto puro, mas sim em formato criptografado para garantir a segurança dos usuários.
Esta rota não requer autenticação.
Obtém uma URL encurtada com base no ID.
Parâmetros de entrada:
id: ID da URL encurtada (integer)
Retorna o código de status 200 em caso de sucesso.
Retorna o código de status 404 se a URL encurtada não for encontrada.
Retorna um objeto JSON com os seguintes campos:
id: ID da URL encurtada (integer)
shortUrl: URL encurtada (string)
url: URL original (string)
5. Redirecionar URL encurtada
GET /urls/open/:shortUrl

Esta rota não requer autenticação.
Redireciona o usuário para a URL
