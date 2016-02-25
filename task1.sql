select s.companyname, p.productname, c.categoryname
from suppliers s, products p, categories c
where s.supplierid = p.supplierid and 
p.categoryid = c.categoryid;