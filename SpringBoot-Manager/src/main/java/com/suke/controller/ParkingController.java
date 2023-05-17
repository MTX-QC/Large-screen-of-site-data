package com.suke.controller;


import com.suke.pojo.Parking;

import com.suke.service.ParkingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/parking")
@CrossOrigin
public class ParkingController {

    @Autowired
    private ParkingService parkingService;

    //获取实时车位数据
    @RequestMapping("/getparkinginfo")
    public Parking getParkingInfo(){
        Parking parking = parkingService.getParkingInfo();
        return parking;
    }


}
