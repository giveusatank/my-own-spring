package com.pep.service;

import com.pep.dao.HelloDaoImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class HelloService {

    @Autowired
    HelloDaoImpl helloDao;

    public void insertUser(String username,Integer id){
        helloDao.insertUser(username,id);
    }

    public String getTotalUV(){

        return helloDao.getTotalUV();
    }

    public String getTotalPV(){
        return helloDao.getTotalPV();
    }

    public List<Map<String,Object>> getXKFX(){
        return helloDao.getXKFX();
    }

    public List<Map<String,Object>> getNJFX(){
        return helloDao.getNJFX();
    }
}
