<%@ page language="java" isELIgnored="false" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"     "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <title>Title</title>
</head>
<body>
    <h1>Success Page.</h1>

    Request用户名:${ requestScope.user }<br/>
    Request用户Id:${requestScope.userid}<br/>

    Session用户名:${sessionScope.user}<br/>
    Session用户Id:${sessionScope.userid}<br/>
</body>
</html>
