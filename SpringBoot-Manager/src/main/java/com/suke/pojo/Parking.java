package com.suke.pojo;

import com.baomidou.mybatisplus.annotation.TableName;

@TableName("tb_parking")
public class Parking {

    private Integer parkingNumber;  //车场数
    private Integer gatesNumber;   //道闸数
    private Integer parkingSpace;   //车位数
    private Integer entryNumber;    //进场数
    private Integer outNumber;      //出场数
    private Integer vehiclesNumber; //场内车

    public Integer getParkingNumber() {
        return parkingNumber;
    }

    public Integer getGatesNumber() {
        return gatesNumber;
    }

    public Integer getParkingSpace() {
        return parkingSpace;
    }

    public Integer getEntryNumber() {
        return entryNumber;
    }

    public Integer getOutNumber() {
        return outNumber;
    }

    public Integer getVehiclesNumber() {
        return vehiclesNumber;
    }

    public void setParkingNumber(Integer parkingNumber) {
        this.parkingNumber = parkingNumber;
    }

    public void setGatesNumber(Integer gatesNumber) {
        this.gatesNumber = gatesNumber;
    }

    public void setParkingSpace(Integer parkingSpace) {
        this.parkingSpace = parkingSpace;
    }

    public void setEntryNumber(Integer entryNumber) {
        this.entryNumber = entryNumber;
    }

    public void setOutNumber(Integer outNumber) {
        this.outNumber = outNumber;
    }

    public void setVehiclesNumber(Integer vehiclesNumber) {
        this.vehiclesNumber = vehiclesNumber;
    }
}
