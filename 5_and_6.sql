-- 5 лаба
create table class (
	id integer primary key,
	names varchar(255) not null,
	mark float )
insert into class (id, names, mark) values (1, 'Иванов Иван Иванович', 5)
insert into class (id, names, mark) values (2, 'Жмышенко Перт Тарасанович', 4)
insert into class (id, names, mark) values (3, 'Михайлов Александр Андреевич', 5)
insert into class (id, names, mark) values (4, 'Петров Абдуразак Джумшутович', 5)
insert into class (id, names, mark) values (5, 'Корзинов Альберт Святославович', 3)

create table teachers (
	id integer primary key,
	name varchar(255) not null,
	lesson varchar(255) not null,
)
insert into teachers (id, name, lesson) values (1, 'Изумрудова Татьяна Владимировна', 'География')
insert into teachers (id, name, lesson) values (1, 'Рыбина Александра Салаватовна', 'История')
insert into teachers (id, name, lesson) values (1, 'учитель 3', 'математика')
insert into teachers (id, name, lesson) values (1, 'учитель 4', 'история')
insert into teachers (id, name, lesson) values (1, 'учитель 5', 'физика')

create table cltch (
	idClass integer primary key,
	names varchar(255) not null,
)
insert into cltch values (1, 'Изумрудова Татьяна Владимировна')
insert into cltch values (1, 'учитель 3')
insert into cltch values (1, 'учитель 5')
insert into cltch values (1, 'Рыбина Александра Салаватовна')

select * from class
where mark>5

--6 лаба
create table worker(
	worker_id integer primary key not null,
	shop_id integer references dbo.shop (id),
	name varchar(255),
	salary integer not null,
	position varchar(255)
)

insert into worker values (1, 1, 'первый', 20000, 'первый')
insert into worker values (2, 2, 'второй', 25000, 'второй')
insert into worker values (3, 2, 'трутий', 65000, 'трутий')
insert into worker values (4, 2, 'четвертый', 30000, 'четвертый')
insert into worker values (5, 1, 'пятый', 20000, 'пятый')

select salary from worker 
order by salary ASC

SELECT salary, count(*) as s FROM worker
GROUP BY salary
order by s

SELECT name, avg(salary) as avg_balance from worker
group by name
order by avg_balance
