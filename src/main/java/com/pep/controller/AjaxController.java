package com.pep.controller;

import com.pep.bean.User;
import com.pep.service.HelloService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/ajax")
public class AjaxController {

    @Autowired
    HelloService helloService;

    @ResponseBody()
    @RequestMapping("/testAjax")
    public User testAjax(User user){

        user.setUsername("Jack Ma.");
        user.setPassword(88888888L);
        user.setAddress("HangZhou");

        return user;
    }


    @ResponseBody
    @RequestMapping("/getTotalUV")
    public String getTotalUV(){
        return helloService.getTotalUV();
    }


    @ResponseBody
    @RequestMapping("/getTotalPV")
    public String getTotalPV(){
        return helloService.getTotalPV();
    }


    @ResponseBody
    @RequestMapping("/getTotalXKFX")
    public List<Map<String, Object>> getXKFX(){
        return helloService.getXKFX();
    }


    @ResponseBody
    @RequestMapping("/getTotalNJFX")
    public List<Map<String, Object>> getNJFX(){
        return helloService.getNJFX();
    }
}
