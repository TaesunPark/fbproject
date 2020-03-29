var ps_cheak;
let mariadb = {
  mariaconnect : function(){
    var mysql = require('mysql');
    var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : 'tnsxoqkr1', /* db연동 비밀번호*/
      database : 'facebook'
    });
    return connection;
  },
  
  join : function(query, connection, res){
    
    const post = {
        mem_email : query.mem_email1,
        mem_password : query.mem_password1,
        mem_fname : query.mem_fname1,
        mem_sname : query.mem_sname1,
        mem_gender : query.mem_gender1,
        mem_year : query.mem_year1,
        mem_month : query.mem_month1,
        mem_day : query.mem_day1
      }
      
      var sql = "INSERT INTO name2 (mem_email, mem_password, mem_fname, mem_sname, mem_gender, mem_year, mem_month, mem_day) VALUES (";
      sql += ("'" + post.mem_email + "'"); sql += ", ";
      sql += ("'" + post.mem_password + "'"); sql += ", ";
      sql += ("'" + post.mem_fname + "'"); sql += ", ";
      sql += ("'" + post.mem_sname + "'"); sql += ", ";
      sql += ("'" + post.mem_gender + "'"); sql += ", ";
      sql += ("'" + post.mem_year + "'"); sql += ", ";
      sql += ("'" + post.mem_month + "'"); sql += ", ";
      sql += ("'" + post.mem_day + "'");
      sql += ")";
      console.log(query);
      console.log(post.mem_year);
      console.log(query.mem_year1);
      connection.query(sql, post, function (err, result){
          if(err){
            console.log(err);
            res.writeHead(404);
            res.end("fail");
          } else{
            console.log('success');
            res.writeHead(200);
            res.end("success");
          }
          
      });
  },
  check : function(query, connection, res){
    var psbool = 0;
    var sql = 'SELECT * FROM name2';
    connection.query(sql, function(err, result, field){
      if(err) {
        console.log(err);
        res.writeHead(404);
        res.end("fail");
      } else{  
        for(var cnt=0;result[cnt]!=undefined;cnt++);
          /*cnt는 전체 컬럼 개수*/
        for(var i=0;i<cnt;i++){
          if(result[i].mem_email == query.email && result[i].mem_password == query.password){ 
            psbool = 1;
            console.log('success');
          }
        }  
        res.writeHead(200);
        res.end("success");
      }
    });
    
  }  
};
module.exports = mariadb;