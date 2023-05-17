package com.suke.controller;

import com.suke.pojo.EnvironmentDetection;
import com.suke.service.EnvironmentDetectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.*;

@RestController
@RequestMapping("/environment")
@CrossOrigin
public class EnvironmentDetectionController {
    @Autowired
    private EnvironmentDetectionService environmentDetectionService;

    //获取风速情况
    @RequestMapping("/getwindspeedinfo")
    public Map getWindSpeedInfo(){
        Map map = new HashMap();
        List<String> times = new ArrayList<>();
        //获取所有的检测时间
        //X轴数据
        List<Date> dateList = environmentDetectionService.getCheckTime();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("MM-dd");
        for (Date date : dateList){
            String format = simpleDateFormat.format(date);
            times.add(format);
        }
        map.put("X",times);
        //Y轴数据
        List<Integer> yValue ;
        yValue = environmentDetectionService.getWindSpeed(dateList);
        map.put("Y",yValue);
        return map;
    }

    //
    @RequestMapping("/getTemperature")
    public Map getTemperatureInfo(){
        Map map = new HashMap();
        List<String> times = new ArrayList<>();
        //获取所有的检测时间
        //X轴数据
        List<Date> dateList = environmentDetectionService.getCheckTime();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("MM-dd");
        for (Date date : dateList){
            String format = simpleDateFormat.format(date);
            times.add(format);
        }
        map.put("X",times);

        //Y轴数据
        List<Double> yValue ;
        yValue = environmentDetectionService.getTemperatureInfo(dateList);
        map.put("Y",yValue);
        return map;
    }
    @RequestMapping("/getPm25Info")
    public Map getPm25Info(){
        Map map = new HashMap();
        List<String> times = new ArrayList<>();
        List<Date> dateList = environmentDetectionService.getCheckTime();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("MM-dd");
        for (Date date : dateList){
            String format = simpleDateFormat.format(date);
            times.add(format);
        }
        map.put("X",times);
        List<Double> yValue;
        yValue = environmentDetectionService.getPm25Info(dateList);
        map.put("Y",yValue);
        return map;
    }
    @RequestMapping("/getHumidityInfo")
    public Map getHumidityInfo(){
        Map map = new HashMap();
        List<String> times = new ArrayList<>();
        List<Date> dateList = environmentDetectionService.getCheckTime();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("MM-dd");
        for (Date date : dateList){
            String format = simpleDateFormat.format(date);
            times.add(format);
        }
        map.put("X",times);
        List<Double> yValue;
        yValue = environmentDetectionService.getHumidityInfo(dateList);
        map.put("Y",yValue);
        return map;
    }
    @RequestMapping("/getEnvironment")
    public List<EnvironmentDetection> getEnvironment(){

        List<EnvironmentDetection> list = environmentDetectionService.getEnvironment();
        return list;
    }
}



