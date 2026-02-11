USE Filmes

-- Exercício 1
SELECT Nome, Ano FROM Filmes

-- Exercício 2
SELECT Nome, Ano FROM Filmes ORDER BY Ano ASC

-- Exercício 3
SELECT Nome, Ano, Duracao FROM Filmes WHERE Nome = 'De Volta para o Futuro'

-- Exercício 4
SELECT Nome, Ano, Duracao FROM Filmes WHERE Ano = 1997

-- Exercício 5
SELECT Nome, Ano, Duracao FROM Filmes WHERE Ano > 2000

-- Exercício 6
SELECT Nome, Ano, Duracao FROM Filmes WHERE Duracao > 100 and Duracao < 150 ORDER BY Duracao ASC

-- Exercício 7
SELECT Ano, COUNT(*) AS 'Quantidade' FROM Filmes GROUP BY Ano ORDER BY Quantidade DESC

-- Exercício 8
SELECT Id, PrimeiroNome, UltimoNome, Genero FROM Atores WHERE Genero = 'M'

-- Exercício 9
SELECT Id, PrimeiroNome, UltimoNome, Genero FROM Atores WHERE Genero = 'F' ORDER BY PrimeiroNome ASC

-- Exercício 10
SELECT Nome, Genero FROM Filmes 
INNER JOIN FilmesGenero ON IdFilme = Filmes.Id
INNER JOIN Generos ON Generos.Id =	FilmesGenero.IdGenero

-- Exercício 11
SELECT Nome, Genero FROM Filmes 
INNER JOIN FilmesGenero ON IdFilme = Filmes.Id
INNER JOIN Generos ON Generos.Id =	FilmesGenero.IdGenero
WHERE Genero = 'Mistério'

-- Exercício 12
SELECT Filmes.Nome, Atores.PrimeiroNome, Atores.UltimoNome, ElencoFilme.Papel FROM Filmes 
INNER JOIN ElencoFilme ON ElencoFilme.IdFilme = Filmes.Id
INNER JOIN Atores ON Atores.Id = ElencoFilme.IdAtor