CREATE SEQUENCE IF NOT EXISTS public.market_sequence
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;

CREATE TABLE IF NOT EXISTS public.market (
	id int4 DEFAULT nextval('market_sequence'::regclass) NOT NULL,
	"name" varchar NOT NULL,
	created_at timestamp NOT NULL,
	updated_at timestamp NOT NULL,
	CONSTRAINT market_pkey PRIMARY KEY (id)
);

CREATE SEQUENCE IF NOT EXISTS public.customer_book_sequence
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;

CREATE TABLE IF NOT EXISTS public.customer_book (
	id int4 DEFAULT nextval('customer_book_sequence'::regclass) NOT NULL,
    customer_id int4 NOT NULL,
    market_id int4 NOT NULL,
	created_at timestamp NOT NULL,
	updated_at timestamp NOT NULL,
	CONSTRAINT customer_book_pkey PRIMARY KEY (id),
    CONSTRAINT fk_customer FOREIGN KEY (customer_id) REFERENCES public.customer(id),
    CONSTRAINT fk_market FOREIGN KEY (market_id) REFERENCES public.market(id)   
);