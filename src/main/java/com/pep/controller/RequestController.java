package com.pep.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/request")
public class RequestController {

    /*
        请求参数绑定
     */
    @RequestMapping("/testRequestParam")
    public String testRequestParam(@RequestParam("uname") String username){
        System.out.println(username);
        return "testParams";
    }

    /*
        获取请求体的内容
     */
    @RequestMapping("/testRequestBody")
    public String testRequestBody(@RequestBody String body){
        System.out.println(body);
        return "testParams";
    }

    /*
        获取Cookie
     */
    @RequestMapping("/testCookie")
    public String testCookie(@CookieValue(value = "JSESSIONID") String session){
        System.out.println(session);
        return "testParams";
    }
}
