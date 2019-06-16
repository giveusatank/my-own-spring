package com.pep.controller;

import com.pep.bean.Order;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("/param")
public class ParamController {

    /*
        普通的将用户的请求参数绑定
        条件就是：请求参数的Key，要和绑定的参数名称一样
     */
    @RequestMapping("/testSimpleParma")
    public String testSimpleParam(String username,Integer id){
        System.out.println(username);
        System.out.println(id);
        return "testSimpleParam";
    }


    @RequestMapping("/testJavaBeanParma")
    public String testSimpleParam(Order order){
        System.out.println(order);
        return "testSimpleParam";
    }

    @RequestMapping(value = "/testJavaBeanParam2",method = {RequestMethod.POST})
    public String testSimpleParam2(Order order){
        System.out.println(order);
        return "testSimpleParam";
    }

    @RequestMapping("/testServletApi")
    public String testSimpleParam2(HttpServletRequest request, HttpServletResponse response, HttpSession session){
        System.out.println(request);
        System.out.println(response);
        System.out.println(session);
        return "testSimpleParam";
    }
}
