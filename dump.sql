--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    id_user integer NOT NULL,
    token text NOT NULL,
    createdat timestamp without time zone NOT NULL
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    id_user integer NOT NULL,
    url text NOT NULL,
    short_url text NOT NULL,
    visit_count integer DEFAULT 0 NOT NULL,
    createdat timestamp without time zone NOT NULL
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    createdat timestamp without time zone NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (4, 1, '4e27256d-4ad7-4975-978b-1f6f07af8032', '2023-02-25 20:11:07.092535');
INSERT INTO public.sessions VALUES (5, 1, '540ea3f5-63a0-4a78-b9c5-38bfdff769ed', '2023-02-25 20:12:15.299194');
INSERT INTO public.sessions VALUES (6, 1, 'fb5f3a89-edf3-473b-a1a1-855cf3ba87b4', '2023-02-25 20:12:16.767428');
INSERT INTO public.sessions VALUES (7, 1, 'fd0c696f-4689-4b8d-92b4-5d5a937b5a78', '2023-02-25 20:12:17.410448');
INSERT INTO public.sessions VALUES (8, 1, '2bb29dbf-643c-42d3-a380-60ac9fe4ad89', '2023-02-25 20:12:17.857842');
INSERT INTO public.sessions VALUES (9, 1, '13219651-abd5-4beb-86b7-cb23cbad67fc', '2023-02-26 11:19:10.08911');


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urls VALUES (1, 1, '{"url":"https://trello.com/b/LnUev7Sf/luizas-system"}', 'MJ74jWV6', 0, '2023-02-26 11:31:11.077952');
INSERT INTO public.urls VALUES (2, 1, '{"url":"https://trello.com/b/LnUev7Sf/luizas-system"}', 'PVJpQjDl', 0, '2023-02-26 11:31:50.73845');
INSERT INTO public.urls VALUES (3, 1, '{"url":"https://trello.com/b/LnUev7Sf/luizas-system"}', 'Yx4Bi4b8', 0, '2023-02-26 11:32:19.850996');
INSERT INTO public.urls VALUES (4, 1, '{"url":"https://trello.com/b/LnUev7Sf/luizas-system"}', 'Peob136G', 0, '2023-02-26 11:32:47.362659');
INSERT INTO public.urls VALUES (5, 1, '{"url":"https://trello.com/b/LnUev7Sf/luizas-system"}', 'YLZ4xQbO', 0, '2023-02-26 11:35:05.307862');
INSERT INTO public.urls VALUES (6, 1, '{"url":"https://trello.com/b/LnUev7Sf/luizas-system"}', 'Fz71PJ0j', 0, '2023-02-26 11:35:16.287282');
INSERT INTO public.urls VALUES (7, 1, '{"url":"https://trello.com/b/LnUev7Sf/luizas-system"}', 'n9CNMcEZ', 0, '2023-02-26 11:35:17.729336');
INSERT INTO public.urls VALUES (8, 1, '{"url":"https://trello.com/b/LnUev7Sf/luizas-system"}', '6JLeP5-z', 0, '2023-02-26 11:39:45.257832');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'João', 'luiza@driven.com.br', '$2b$10$J5f3KAP/GkIL1VRkS8QBXOskGbkkVP5MOH0ugKhqTO7KbCPJPYfyG', '2023-02-25 19:53:11.552882');


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 9, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 8, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_id_user_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_id_user_fkey FOREIGN KEY (id_user) REFERENCES public.users(id);


--
-- Name: urls urls_id_user_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_id_user_fkey FOREIGN KEY (id_user) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

