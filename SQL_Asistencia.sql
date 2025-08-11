-- Crear los cursos
INSERT INTO public.cursos VALUES (DEFAULT,'2025100','PROGRAMACION','NOCHE', 1,now(),now());
INSERT INTO public.cursos VALUES (DEFAULT,'2025101','PROGRAMACION','NOCHE', 2,now(),now());
INSERT INTO public.cursos VALUES (DEFAULT,'2025200','DESARROLLO WEB','DIA', 1,now(),now());
INSERT INTO public.cursos VALUES (DEFAULT,'2025201','DESARROLLO WEB','NOCHE', 2,now(),now());
INSERT INTO public.cursos VALUES (DEFAULT,'2025102','PROGRAMACION','DIA', 1,now(),now());

--Crear los tipos de documento estudiante
INSERT INTO public.tipos VALUES ('CC','CEDULA',now(),now());
INSERT INTO public.tipos VALUES ('CE','CEDULA EXTRANJERIA',now(),now());
INSERT INTO public.tipos VALUES ('TI','TARJETA IDENTIDAD',now(),now());
INSERT INTO public.tipos VALUES ('PA','PASAPORTE',now(),now());

-- crear los estudiantes
INSERT INTO public.usuarios VALUES ('CC','123456','CAROLINA','carolincamacho@javerianacali.edu.co','12345','ADMIN',DEFAULT,now(),now());
INSERT INTO public.usuarios VALUES ('CC','987654','MIGUEL','miguel_osorio11@hotmail.com','65432','ESTUDIANTE',DEFAULT,now(),now());
INSERT INTO public.usuarios VALUES ('CE','123456','SEBASTIAN','juan_s.diaz_v@uao.edu.co','45678','ESTUDIANTE',DEFAULT,now(),now());
INSERT INTO public.usuarios VALUES ('CC','654321','ANDRES','andres.f.salazar@correounivalle.edu.co','147258','PROFESOR',DEFAULT,now(),now());
INSERT INTO public.usuarios VALUES ('PA','741852','ALEJANDRO','manuelmartines385@gmail.com','12345','ESTUDIANTE',DEFAULT,now(),now());
INSERT INTO public.usuarios VALUES ('TI','852741','JUAN','juanjosalazar2000@gmail.com','98765','ESTUDIANTE',DEFAULT,now(),now());

--Crear asistencias
INSERT INTO public.asistencia VALUES (DEFAULT,'CC','123456','2025-07-01','18:00','20:05','2025101',now(),now());
