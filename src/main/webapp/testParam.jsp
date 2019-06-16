<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" isELIgnored="false" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"     "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <script src="${pageContext.request.contextPath}/js/jquery.min.js" type="text/javascript"></script>
    <script>
        $(function(){
            $("#btn").click(function () {
                alert("Hello Click");
            });
        })

        $(function () {
           $("#testAjax").click(function () {
               $.ajax({
                    type:"post",
                    url:"${pageContext.request.contextPath}/ajax/testAjax",
                    contentType:"application/json;charset=utf-8",
                    dataType:"json",
                    success:function (data) {
                        alert(data);
                        alert(data.username);
                        alert(data.password);
                        alert(data.address);
                    }
               })
           })
        });
    </script>
</head>
<body>

<form action="/param/testJavaBeanParam2" method="post">
    订单Id:<input type="text" name="orderId"/><br/>
    订单时间:<input type="text" name="orderTime"/><br/>
    过期时间:<input type="text" name="expirationDate"/><br/>
    提交:<input type="submit" name="submit"/>
</form>

<form action="/model/testModel" method="post">
    用户Id:<input type="text" name="userId"/><br/>
    用户名:<input type="text" name="username"/><br/>
    提交:<input type="submit" name="submit"/>
</form><br/>


<form action="/session/testSessionAttribute2" method="post">
    用户名:<input type="text" name="uname" /><br/>
    用户Id:<input type="text" name="uid" /><br/>
    提交:<input type="submit" /><br/>
</form><br/>


<form action="/session/testSessionAttribute3" method="post">
    用户名:<input type="text" name="uname" /><br/>
    用户Id:<input type="text" name="uid" /><br/>
    提交:<input type="submit" /><br/>
</form><br/>

    <button id="btn">Click Me!</button><br/>

<form action="/ajax/testAjax" method="post" id="testAjax">
    username:<input type="text" name="username"/><br/>
    password:<input type="text" name="password"/><br/>
    address:<input type="text" name="address"/><br/>
    submit:<input type="submit"/><br/>
</form>
</body>
</html>
