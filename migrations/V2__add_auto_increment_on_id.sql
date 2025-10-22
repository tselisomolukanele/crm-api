CREATE SEQUENCE public.customer_sequence;
ALTER TABLE public.customer ALTER COLUMN id SET DEFAULT nextval('customer_sequence');
ALTER SEQUENCE public.customer_sequence OWNED BY public.customer.id;