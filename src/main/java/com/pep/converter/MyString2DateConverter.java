package com.pep.converter;

import org.springframework.core.convert.converter.Converter;
import org.springframework.lang.Nullable;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class MyString2DateConverter implements Converter<String,Date>{

    @Nullable
    @Override
    public Date convert(String source) {
        if(source == null){
            throw new RuntimeException("传入的时间为空！");
        }
            SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        try {
            Date strDate = format.parse(source);
            //如果上面产生了异常，那么这句return就执行不到
            return strDate;
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return null;
    }
}
