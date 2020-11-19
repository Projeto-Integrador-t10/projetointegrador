1. Para executar a aplicação (vendaverde-deploy), abra o programa Docker para Desktop,  vá ao Prompt de comando, entre na pasta do projeto, e digite o comando <docker-compose up -d --build>
  
2. Para verificar a documentação (vendaverde_1.0.5), inicie a aplicação, e entre no site http://localhost:8080/swagger-ui.html
Obs: Necessário criar login e senha. 
Post -> http://localhost:8080/usuarios/cadastrar
Parâmetros via Body:
{
"nome": "Insira_nome",
"usuario": "Insira_email",
"senha": "Insira_senha"
}
  
 
