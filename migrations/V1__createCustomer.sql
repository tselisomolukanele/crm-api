CREATE TABLE IF NOT EXISTS public.customer (
	id int PRIMARY KEY,
	"name" varchar NOT NULL,
	created_at timestamp NOT NULL,
	updated_at timestamp NOT NULL
);