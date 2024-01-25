CREATE TABLE Autores (
    AutorID INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(255),
    Nacionalidade VARCHAR(255)
);

CREATE TABLE Livros (
    LivroID INT PRIMARY KEY AUTO_INCREMENT,
    Titulo VARCHAR(255),
    AnoPublicacao INT,
    AutorID INT,
    FOREIGN KEY (AutorID) REFERENCES Autores(AutorID)
);
-- Ao adicionar um novo livro na tabela Livros, você associa o livro a um autor existente usando o AutorID. Dessa forma, sempre que você inserir um livro, precisa referenciar um autor válido que já exista na tabela Autores.


-- Inserindo dados
INSERT INTO Autores (Nome, Nacionalidade) VALUES ('Autor1', 'Nacionalidade1');
INSERT INTO Autores (Nome, Nacionalidade) VALUES ('Autor2', 'Nacionalidade2');
INSERT INTO Autores (Nome, Nacionalidade) VALUES ('Autor3', 'Nacionalidade3');

INSERT INTO Livros (Titulo, AnoPublicacao, AutorID) VALUES ('Livro1', 2020, 1);
INSERT INTO Livros (Titulo, AnoPublicacao, AutorID) VALUES ('Livro2', 2018, 2);
INSERT INTO Livros (Titulo, AnoPublicacao, AutorID) VALUES ('Livro3', 2021, 1);
INSERT INTO Livros (Titulo, AnoPublicacao, AutorID) VALUES ('Livro4', 2019, 3);
INSERT INTO Livros (Titulo, AnoPublicacao, AutorID) VALUES ('Livro5', 2022, 2);

-- Listar os autores e os títulos de seus livros associados.
SELECT Autores.Nome AS Autor, Livros.Titulo
FROM Autores
JOIN Livros ON Autores.AutorID = Livros.AutorID;

-- Listar detalhes dos livros (título e ano de publicação) e os autores correspondentes usando INNER JOIN.
SELECT Autores.Nome AS Autor, Livros.Titulo, Livros.AnoPublicacao
FROM Autores
JOIN Livros ON Autores.AutorID = Livros.AutorID;

-- Exibir todos os autores, independentemente de terem livros associados, incluindo informações dos livros, se disponíveis
SELECT Autores.Nome AS Autor, Livros.Titulo, Livros.AnoPublicacao
FROM Autores
LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID;

-- Listar autores e seus livros, restrito a uma nacionalidade específica
SELECT Autores.Nome AS Autor, Livros.Titulo
FROM Autores
JOIN Livros ON Autores.AutorID = Livros.AutorID
WHERE Autores.Nacionalidade = 'Nacionalidade1';

-- Agregar dados para contar quantos livros cada autor escreveu. A cláusula GROUP BY é utilizada para agrupar por autor.
SELECT Autores.Nome AS Autor, COUNT(Livros.LivroID) AS QuantidadeLivros
FROM Autores
LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID
GROUP BY Autores.Nome;
