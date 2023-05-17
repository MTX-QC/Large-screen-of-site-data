package com.suke.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.suke.pojo.EnvironmentDetection;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
@MapperScan
public interface EnvironmentDetectionMapper extends BaseMapper<EnvironmentDetectionMapper> {
    List<Date> getCheckTime();

    Integer getWindSpeedByCheckTime(Date date);



    Double getTemperatureByCheckTime(Date date);

    Double getPm25ByCheckTime(Date date);

    Double getHumidityInfoByCheckTime(Date date);


    List<EnvironmentDetection> getEnvironment();
}
