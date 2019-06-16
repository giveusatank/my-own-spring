package com.pep.controller;

import com.pep.bean.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

@RequestMapping("/model")
@Controller
public class ModeAttributeController {

    /*@ModelAttribute()
    public User testUserModel(User user){
        user.setSalary(8888.88);
        return user;
    }*/



    @RequestMapping("/testModel")
    public String testModelAttribute(@ModelAttribute("fullInfo") User user){
        System.out.println(user);
        return "success";
    }
}
