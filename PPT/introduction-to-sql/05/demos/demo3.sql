USE contacts;

SELECT p.person_last_name 
FROM 
person p
WHERE p.person_first_name = 'Jon'
OR
p.person_contacted_number > 0;