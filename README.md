# API de Loja de Airsoft

API REST desenvolvida com Node.js e Express para gerenciamento de produtos de airsoft.

---

## Estrutura do Produto

Cada produto possui o seguinte formato:

```json
{
  "id": 1,
  "nome": "Glock 17",
  "tipo": "Pistola",
  "funcionamento": "Gbb",
  "pais": "Áustria",
  "preco": 1200
}
```

---

## Endpoints

---

### Métodos GET

#### GET `/produtos`

Lista todos os produtos (com suporte a filtros e ordenação)

Parâmetros (query):

* nome
* tipo (Pistola, Rifle, Escopeta, Sniper)
* funcionamento (Gbb, Elétrica, Spring)
* pais
* ordem (asc, desc)

---

#### GET `/produtos/:id`

Busca um produto pelo ID

Exemplo:

```
GET /produtos/1
```

Resposta:

```json
{
  "id": 1,
  "nome": "Glock 17",
  "tipo": "Pistola",
  "funcionamento": "Gbb",
  "pais": "Áustria",
  "preco": 1200
}
```

---

### Métodos POST

#### POST `/produtos`

Cria um novo produto completo

Body:

```json
{
  "nome": "AK47",
  "tipo": "Rifle",
  "funcionamento": "Elétrica",
  "pais": "Rússia",
  "preco": 2000
}
```

Resposta:

```json
{
  "id": 3,
  "nome": "AK47",
  "tipo": "Rifle",
  "funcionamento": "Elétrica",
  "pais": "Rússia",
  "preco": 2000
}
```

---

#### POST `/produtos/pistola`

Cria um produto do tipo Pistola

Body:

```json
{
  "nome": "Glock 18",
  "funcionamento": "Gbb",
  "pais": "Áustria",
  "preco": 1300
}
```

---

#### POST `/produtos/rifle`

Cria um produto do tipo Rifle

---

#### POST `/produtos/sniper`

Cria um produto do tipo Sniper

---

#### POST `/produtos/escopeta`

Cria um produto do tipo Escopeta

---

### Método DELETE

#### DELETE `/produtos/:id`

Remove um produto pelo ID

Exemplo:

```
DELETE /produtos/1
```

Resposta:

```json
{
  "id": 1,
  "nome": "Glock 17"
}
```

---

## Exemplos de Requisições (Postman)

Criar produto
Método: POST
URL: http://localhost:3000/produtos
Body: JSON

Listar produtos
Método: GET
URL: http://localhost:3000/produtos

Buscar por ID
Método: GET
URL: http://localhost:3000/produtos/1

Deletar produto
Método: DELETE
URL: http://localhost:3000/produtos/1

---

## Validações Implementadas

* Todos os campos são obrigatórios
* Nome deve ter no mínimo 3 caracteres
* Preço deve ser maior que 0
* Tipo deve ser um dos seguintes:

  * Pistola
  * Rifle
  * Escopeta
  * Sniper
* Funcionamento deve ser:

  * Gbb
  * Elétrica
  * Spring
