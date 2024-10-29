# REQUISITOS FUNCIONAIS (RF)
 - [ x ] Deve ser possivel se cadastrar na aplicação;
 - [ x ] Deve ser possivel se autenticar na aplicação;
 - [ x ] Deve ser possivel visualizar o perfil do usuário logado;
 - [ x ] Deve ser possivel recuperar o número de check-ins realizados pelo usuário;
 - [ x ] Deve ser possivel pesquisar por academias próximas do usuário;
 - [ x ] Deve ser possível pesquisar academias pelo nome;
 - [ x ] Deve ser possivel realizar o check-in do usuário na academia;
 - [ x ] Deve ser possível validar o check-in do usuário;

# REGRAS DE NEGÓCIO (RN)
 - [ x ] O usuário não deve poder se cadastrar com um e-mail duplicado;
 - [ x ] O usuário não deve poder realizar mais de um check-in no mesmo dia;
 - [ x ] O usuário não deve poder realizar o check-in a uma distância superior a 100 metros da localização da academia;
 - [ x ] O check-in deve ser validado em até 20 minutos após sua criação;
 - [ x ] O check-in deve ser validado por um administrador da aplicação;
 - [ x ] As academias só podem ser cadastradas por um administrador da aplicação;

# REQUISITOS NÃO FUNCIONAIS (RNF)
- [ x ] A senha deve ser criptografada;
- [ x ] Os dados da aplicação devem ser persistidos em um banco POSTGRESQL
- [ x ] As pesquisas devem paginadas e mostrar 20 resultados por página
- [ x ] O usuário deve ser autenticado por JSON WEB Token (JWT)
