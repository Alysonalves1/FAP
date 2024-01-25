-- Seleção de dados:
SELECT * FROM Transacoes;

-- Renomeando colunas:
SELECT ID AS ID_Transacao, Data, Valor FROM Transacoes;

-- Filtragem com a cláusula WHERE:
SELECT * FROM Transacoes WHERE Valor > 100.00;

-- Ordenação com a cláusula ORDER BY:
SELECT * FROM Transacoes ORDER BY Valor DESC;

-- Agregação com funções SQL:
SELECT AVG(Valor) AS Media, MAX(Valor) AS ValorMaximo, MIN(Valor) AS ValorMinimo, COUNT(*) AS TotalTransacoes FROM Transacoes;

-- Agrupamento com a cláusula GROUP BY:
SELECT Produto, AVG(Valor) AS MediaValorPorProduto FROM Transacoes GROUP BY Produto;

-- Consulta combinada:
SELECT Categoria, COUNT(*) AS TotalProdutosVendidos, SUM(Valor) AS ValorTotalVendas, AVG(Valor) AS MediaValorPorTransacao
FROM Transacoes
GROUP BY Categoria;
