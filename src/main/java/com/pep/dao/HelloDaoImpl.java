package com.pep.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class HelloDaoImpl{


    @Autowired
    private JdbcTemplate jdbcTemplate;


    public void insertUser(String user,Integer id) {

        System.out.println(jdbcTemplate);

        String insertSql = "insert into test_jdbc VALUES (?,?)";

        Object[] objArr = new Object[2];

        objArr[0] = user;

        objArr[1] = id;

       jdbcTemplate.update(insertSql,objArr);
    }

    public String getTotalUV(){

        String querySql = "select sum(user_count) from ads_textbook_used_total where mark_date='20190615'";

        String uv = jdbcTemplate.queryForObject(querySql, String.class, null);

        return uv;
    }

    public String getTotalPV(){

        String querySql = "select sum(action_count) from ads_textbook_used_total where mark_date='20190615'";

        String pv = jdbcTemplate.queryForObject(querySql,String.class,null);

        return pv;
    }

    public List<Map<String,Object>> getXKFX(){

        String querySql = "select (case t.zxxkc when '11' then '语文' when '12' then '英语' else '其他' END) as kc,t.uc as uv from " +
                "(select zxxkc,sum(user_count) as uc from ads_textbook_zxxkc_used_total " +
                "where mark_date='20190615' and zxxkc is not null group by zxxkc) as t";


        return jdbcTemplate.queryForList(querySql);
    }

    public List<Map<String,Object>> getNJFX(){

        String querySql = "select nj_name as nj,round(avg(m.sum)) as uv from " +
                "(select textbook.nj_name,t.sum " +
                "from dim_textbook as textbook " +
                "join " +
                "(select nj,sum(user_count) as sum from ads_textbook_nj_used_total where mark_date='20190615' and nj is not null group by nj) as t " +
                "on t.nj=textbook.nj) as m group by m.nj_name,m.sum";


        return jdbcTemplate.queryForList(querySql);
    }
}
