-- 5 ����
create table class (
	id integer primary key,
	names varchar(255) not null,
	mark float )
insert into class (id, names, mark) values (1, '������ ���� ��������', 5)
insert into class (id, names, mark) values (2, '�������� ���� �����������', 4)
insert into class (id, names, mark) values (3, '�������� ��������� ���������', 5)
insert into class (id, names, mark) values (4, '������ ��������� �����������', 5)
insert into class (id, names, mark) values (5, '�������� ������� �������������', 3)

create table teachers (
	id integer primary key,
	name varchar(255) not null,
	lesson varchar(255) not null,
)
insert into teachers (id, name, lesson) values (1, '���������� ������� ������������', '���������')
insert into teachers (id, name, lesson) values (1, '������ ���������� �����������', '�������')
insert into teachers (id, name, lesson) values (1, '������� 3', '����������')
insert into teachers (id, name, lesson) values (1, '������� 4', '�������')
insert into teachers (id, name, lesson) values (1, '������� 5', '������')

create table cltch (
	idClass integer primary key,
	names varchar(255) not null,
)
insert into cltch values (1, '���������� ������� ������������')
insert into cltch values (1, '������� 3')
insert into cltch values (1, '������� 5')
insert into cltch values (1, '������ ���������� �����������')

select * from class
where mark>5

--6 ����
create table worker(
	worker_id integer primary key not null,
	shop_id integer references dbo.shop (id),
	name varchar(255),
	salary integer not null,
	position varchar(255)
)

insert into worker values (1, 1, '������', 20000, '������')
insert into worker values (2, 2, '������', 25000, '������')
insert into worker values (3, 2, '������', 65000, '������')
insert into worker values (4, 2, '���������', 30000, '���������')
insert into worker values (5, 1, '�����', 20000, '�����')

select salary from worker 
order by salary ASC

SELECT salary, count(*) as s FROM worker
GROUP BY salary
order by s

SELECT name, avg(salary) as avg_balance from worker
group by name
order by avg_balance
