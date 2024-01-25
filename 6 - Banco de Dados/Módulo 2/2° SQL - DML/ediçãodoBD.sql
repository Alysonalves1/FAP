insert into Produtos (Nome do Produto, Preço, QuantidadeEstoque.) 
VALUES
("Smartphone", 799.99, 20),
("Tablet", 349.99, 10),
("Fone de Ouvido", 49.99, 50);


UPDATE Produto SET QuantidadeEstoque = 25, Preço = 849,99 WHERE NomeProduto = "Smartphone";

-- não foi possível usando o DELETE pois ele apagatia as colunas ao inves de diminuir a quantidade no atributo "QuantidadeEstoque" 
UPDATE Produtos
SET QuantidadeEstoque = QuantidadeEstoque - 5
WHERE NomeProduto = 'Tablet';

UPDATE Produtos
SET QuantidadeEstoque = QuantidadeEstoque - 10
WHERE NomeProduto = 'Fone de Ouvido';
