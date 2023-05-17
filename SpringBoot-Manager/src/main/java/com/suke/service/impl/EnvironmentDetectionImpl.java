package com.suke.service.impl;

import com.suke.mapper.EnvironmentDetectionMapper;
import com.suke.pojo.EnvironmentDetection;
import com.suke.service.EnvironmentDetectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
@Service
public class EnvironmentDetectionImpl implements EnvironmentDetectionService {
    @Autowired
    private EnvironmentDetectionMapper environmentDetectionMapper;

    @Override
    public List<Date> getCheckTime() {

        return environmentDetectionMapper.getCheckTime();

    }

    @Override
    public List<Integer> getWindSpeed(List<Date> dateList) {
        ArrayList<Integer> list =  new ArrayList<Integer>();
        for (Date date : dateList){
        Integer r = environmentDetectionMapper.getWindSpeedByCheckTime(date);
            list.add(r);
        }

        return list;
    }

    @Override
    public List<Double> getTemperatureInfo(List<Date> dateList) {
        ArrayList<Double> list = new ArrayList<>();
        for (Date date : dateList){
            Double d = environmentDetectionMapper.getTemperatureByCheckTime(date);
            list.add(d);
        }
        return list;
    }

    @Override
    public List<Double> getPm25Info(List<Date> dateList) {
        ArrayList<Double> list = new ArrayList<>();
        for (Date date :dateList){
            Double p = environmentDetectionMapper.getPm25ByCheckTime(date);
            list.add(p);
        }
        return list;
    }

    @Override
    public List<Double> getHumidityInfo(List<Date> dateList) {
        ArrayList<Double> list = new ArrayList<>();
        for (Date date :dateList){
            Double p = environmentDetectionMapper.getHumidityInfoByCheckTime(date);
            list.add(p);
        }
        return list;
    }

    @Override
    public List<EnvironmentDetection> getEnvironment() {
        List<EnvironmentDetection> list =  environmentDetectionMapper.getEnvironment();
        return list;
    }


}
