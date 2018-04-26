create database realestate
    with owner=postgres
    ENCODING='UTF8'
    TEMPLATE=template1
    Connection Limit = -1
    TABLE SPACE = pg_default;
drop schema if exists "membership";
create schema "membership";
drop schema if exists "dbo";
create schema "dbo";
create table "dbo"."property"(
    property_id serial not null primary key,
    body jsonb not null default '{}'::jsonb,
    created_at timestamptz not null default now(),
    modified_at timestamptz not null default now()
);
create table "membership"."users"(
    user_id serial not null primary key,
    body jsonb not null default '{}'::jsonb,
    created_at timestamptz not null default now(),
    modified_at timestamptz not null default now()
);