package com.suke.service;

import com.suke.pojo.EnvironmentDetection;

import java.util.Date;
import java.util.List;

public interface EnvironmentDetectionService {
    List<Date> getCheckTime();

    List<Integer> getWindSpeed(List<Date> dateList);


    List<Double> getTemperatureInfo(List<Date> dateList);

    List<Double> getPm25Info(List<Date> dateList);

    List<Double> getHumidityInfo(List<Date> dateList);

    List<EnvironmentDetection> getEnvironment();
}
