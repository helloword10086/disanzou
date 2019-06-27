攻击
攻： SQL  前端SQL是什么呢？
前端处理着表单，  SQL  
攻击者就是带着目的来的  SQL
输入字符串  有可能带来SQL的麻烦

表单-》 onsubmit ->/login POST  {email:'user2eamil,passsword:'123456''} -> sql拼接
select * from users where email = 'user@emil' and password = 'password'' 

怎么录入进银行账号， 把钱给拿出来

登入进去 账号， 密码是不知道的， SQL 一种是破坏 SQL语法  导致服务器挂啦
还有一种是窃取账户  ' or  1 = 1--

session 
