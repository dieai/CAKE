const express=require("express");
const router=express.Router();
const pool=require("../pool");
//1.用户登录
router.post("/wai_login",function(req,res){
    var obj=req.body;
    console.log(obj)
    if (!obj.uname)
    {
        res.send({code:401,msg:"uname required"});
        return;
    }
    if (!obj.upwd)
    {
        res.send({code:402,msg:"upwd required"});
      return;
    }
    //执行sql语句
    //用户表中是否含有用户名，密码同时匹配
    pool.query("SELECT * FROM wx_user WHERE uname=? AND upwd=?"
    ,[obj.uname,obj.upwd],function(err,result){
    if (err) throw err;

    //判断数组的长度是否大于0
    if (result.length>0)
    {
        res.send("200");
    }else{
      res.send("400");
    }
    });
    });
//2.用户注册
 router.post("/reg_name",function(req,res){
   var $uname=req.body.uname;
    var obj=req.body;
    pool.query("SELECT * FROM wx_user WHERE uname=?"
    ,[$uname],function(err,result){
      if (err) throw err;
    if(result.length>0){
        res.send("0")
    }else{
        res.send("1")
    }
})
})
router.post("/wai_reg",function(req,res){
    //获取get请求的数据
    var obj=req.body;
    //检查名字是否为空
    if (!obj.uname)
    {res.send({code:401,msg:"uname required"});
    //阻止往后执行
    return;
    }
    //检查密码是否为空
    if (!obj.upwd)
    {res.send({code:402,msg:"upwd required"});
    return;
    }
    //检查手机是否为空
    if (!obj.phone)
    {res.send({code:403,msg:"phone required"});
    return;
    }
    //检查邮箱是否为空
    if (!obj.email)
    {res.send({code:404,msg:"email required"});
    return;
    }
    console.log(obj);
    //执行sql语句
    pool.query("INSERT INTO wx_user SET ?",[obj],function(err,result){
      if (err) throw err;
     console.log(result);
     //判断是否注册成功
     if (result.affectedRows>0)
     {
         res.send("11");
     }else{
         res.send("12")
     }
    });
    });
module.exports=router;