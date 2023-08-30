

create database apuracao;

create table resultado (
  id serial primary key,
  nome varchar(60),
  data varchar(60),
  linha_1 varchar(4),
  linha_2 varchar(4),
  linha_3 varchar(4),
  linha_4 varchar(4),
  linha_5 varchar(4));
  
  insert into resultado (nome, data, linha_1, linha_2, linha_3, linha_4, linha_5) 
  values ('10h', '29/08/2023', '1234', '4567', '7891', '1012', '1484');

create table pules_extracao (
	pule serial primary key,
	data_jogo varchar(60),
  extracao_nome varchar(60),
  nome_vendedor varchar(60));
  
  insert into pules_extracao (data_jogo, extracao_nome, nome_vendedor)
  values ('29/08/2023', '10h', 'murilo');
  
create table dados_jogos (
	id serial primary key,
  pule_extracao integer REFERENCES pules_extracao(pule),
  jogo varchar(3),
  numero varchar(12),
  valor_aposta integer,
  linha varchar(1));

insert into dados_jogos (pule_extracao, jogo, numero, valor_aposta, linha)
values (1, 'c', '234', 5, '2');

select * from dados_jogos where pule_extracao = $1;



