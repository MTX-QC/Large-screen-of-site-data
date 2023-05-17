package com.suke.pojo;

import com.baomidou.mybatisplus.annotation.TableName;

import java.util.Date;
@TableName("tb_environment_detection")
public class EnvironmentDetection {
    private Integer id;
    private Double temperature;
    private Double pm25;
    private Double humidity;
    private Double noise;
    private Double windSpeed;
    private Date checkTime;

    private CheckPoint checkPoint;

    public CheckPoint getCheckPoint() {
        return checkPoint;
    }

    public void setCheckPoint(CheckPoint checkPoint) {
        this.checkPoint = checkPoint;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setTemperature(Double temperature) {
        this.temperature = temperature;
    }

    public void setPm25(Double pm25) {
        this.pm25 = pm25;
    }

    public void setHumidity(Double humidity) {
        this.humidity = humidity;
    }

    public void setNoise(Double noise) {
        this.noise = noise;
    }

    public void setWindSpeed(Double windSpeed) {
        this.windSpeed = windSpeed;
    }

    public void setCheckTime(Date checkTime) {
        this.checkTime = checkTime;
    }

    public Integer getId() {
        return id;
    }

    public Double getTemperature() {
        return temperature;
    }

    public Double getPm25() {
        return pm25;
    }

    public Double getHumidity() {
        return humidity;
    }

    public Double getNoise() {
        return noise;
    }

    public Double getWindSpeed() {
        return windSpeed;
    }

    public Date getCheckTime() {
        return checkTime;
    }
}
