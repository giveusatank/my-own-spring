package com.pep.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
@RequestMapping("/session")
@SessionAttributes(value = {"user","userid"})
public class SessionAttributeController {


    /**
     *   （1） Model : 将请求信息封装到Request域对象中
     *
     *   （2） ModelMap ：从Request域对象中取值
     *
     *   （3）@SessionAttribute ： 封装到Session域对象中
     *
     */

    @RequestMapping("/testSessionAttribute1")
    public String testSessionAttribute1(@RequestParam("uname") String username,
                                        @RequestParam("uid") String userid,Model model){
        model.addAttribute("user",username);
        model.addAttribute("userid",userid);
        return "success";
    }

    @RequestMapping("/testSessionAttribute2")
    public String testSessionAttribute2(@RequestParam("uname") String username,
                                        @RequestParam("uid") String userid,
                                        Model model,
                                        HttpServletRequest request,
                                        HttpServletResponse response) throws Exception {
        model.addAttribute("user",username);
        model.addAttribute("userid",userid);

        request.getRequestDispatcher("/WEB-INF/pages/success.jsp").forward(request,response);

        return "forward:/WEB-INF/pages/success.jsp";
        //return "success";
    }


    @RequestMapping("/testSessionAttribute3")
    public void testSessionAttribute3(@RequestParam("uname") String username,
                                        @RequestParam("uid") String userid,Model model,HttpServletRequest request,
                                      HttpServletResponse response) throws IOException {
        model.addAttribute("user",username);
        model.addAttribute("userid",userid);

        response.sendRedirect(request.getContextPath()+"/index.jsp");
    }
}
