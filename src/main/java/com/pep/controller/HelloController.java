package com.pep.controller;


import com.pep.service.HelloService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping(path="/user")
public class HelloController {

    @Autowired
    HelloService helloService;

    @RequestMapping("hello")
    public String method1(){

        return "success";
    }

    @RequestMapping(path = "/testRequest")
    public String hello(){
        return "testRequestMapping";
    }

    @RequestMapping(value="/testMethod",method = {RequestMethod.POST})
    public String testMethod(){
        return "testMethod";
    }

    @RequestMapping(value="/testParams",params={"username=qz","address"})
    public String testParams(){
        return "testParams";
    }

    @RequestMapping("/testjdbc")
    public String testJdbc(@RequestParam("user") String username,
                           @RequestParam("id") Integer id){

        helloService.insertUser(username,id);

        return "success";
    }

}
