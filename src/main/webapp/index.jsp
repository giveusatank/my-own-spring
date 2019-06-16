<%@ page language="java" isELIgnored="false" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"     "http://www.w3.org/TR/html4/loose.dtd">
<html>
<body>
<h2>Hello World!</h2>
    <a href="user/testRequest">测试 user/testRequest</a><br/>
    <a href="user/testMethod">测试 Post请求</a><br/>
    <a href="user/testParams?username=qz&address=112">测试 请求参数1</a><br/>
    <a href="user/testParams?username=qinzhen&address=112">测试 请求参数2</a><br/><br/>

    <a href="request/testRequestParam?uname=alasijia">测试 请求参数3</a><br/>
    <a href="request/testCookie">测试 Cookie</a><br/>
    <a href="request/testRequestBody">测试 请求体</a><br/><br/>

    <form action="request/testRequestBody" method="post">
        用户名:<input type="text" name="username" /><br/>
        用户Id:<input type="text" name="id" /><br/>
        登录:<input type="submit" /><br/><br/>
    </form>

    <form action="/param/testJavaBeanParma" method="post">
        订单Id:<input type="text" name="orderId" /><br/>
        订单时间:<input type="text" name="orderTime" /><br/>
        用户名:<input type="text" name="user.username" /><br/>
        用户Id:<input type="text" name="user.userId" /><br/>
        用户薪资:<input type="text" name="user.salary" /><br/>
        提交:<input type="submit" /><br/>
    </form><br/>

    <a href="/param/testServletApi">Test ServerletApi!!</a><br/>

    <form action="/session/testSessionAttribute1" method="post">
    用户名:<input type="text" name="uname" /><br/>
    用户Id:<input type="text" name="uid" /><br/>
    提交:<input type="submit" /><br/>
    </form><br/>


    用户名:${user}<br/>
    用户Id:${userid}<br/>


    <a href="/user/testjdbc?user=qinzhen&id=1001">测试 JdbcTemplate!!</a>
</body>
</html>
