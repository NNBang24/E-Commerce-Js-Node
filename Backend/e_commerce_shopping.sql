create database e_commerce_shopping ; 
use e_commerce_shopping ;   

-- Nguoi dung 
create table users (
	id int primary key auto_increment ,
    fullName varchar(100) not null ,
    email varchar(100)  unique not null  ,
    password varchar(255) not null ,
    address text ,
    phone varchar(15) ,
    role enum("user" , "admin" ) default "user" ,
	createdAt datetime,
    updatedAt datetime
    
) ;
-- Danh muc ( 1 Danh muc - N San Pham )
create table categories (
	id int primary key auto_increment ,
    name varchar(100) not null 
) ;

create table products (
	id int primary key auto_increment ,
    name varchar(255) not null ,
    price decimal(10,2) not null ,
    priceSale decimal(10,2) ,
    description text ,
	sizes json ,
    tags json ,
    imageURL varchar(255) ,
    categoryId int ,
    foreign key (categoryId ) references categories(id)
) ;
create table productImages (
	id int primary key auto_increment ,
    imageUrl varchar(255) ,
    productId int ,
    foreign key (productId) references products (id)
);

create table carts (
	id int primary key auto_increment ,
    quantity int default 1 ,
    userId int ,
    productId int  ,
    sizeSelected varchar(10) ,
    foreign key (userId ) references users(id) ,
    foreign key (productId ) references products(id) 
    
) ;
