1. Para executar a aplicação (vendaverde-deploy), abra o programa Docker para Desktop,  vá ao Prompt de comando, entre na pasta do projeto, e digite o comando <docker-compose up -d --build>  
  
2. Para verificar a documentação (vendaverde_1.0.5 OU vendaverde-deploy), inicie a aplicação, e entre no site http://localhost:8080/swagger-ui.html (para vendaverde_1.0.5) OU http://localhost:9000/swagger-ui.html (para vendaverde-deploy).  


Obs: Necessário criar login e senha.  

Post -> http://localhost:8080/usuarios/cadastrar  (vendaverde_1.0.5)  
Post -> http://localhost:9000/usuarios/cadastrar  (vendaverde-deploy)  

Parâmetros via Body:  
{  
"nome": "Insira_nome",  
"usuario": "Insira_email",  
"senha": "Insira_senha"  
}
  
 
