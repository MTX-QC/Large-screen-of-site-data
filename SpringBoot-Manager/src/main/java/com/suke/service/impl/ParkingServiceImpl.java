package com.suke.service.impl;

import com.suke.mapper.ParkingMapper;

import com.suke.pojo.Parking;
import com.suke.service.ParkingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
@Service
public class ParkingServiceImpl implements ParkingService {
    @Autowired
    private ParkingMapper parkingMapper;

    @Override
    public Parking getParkingInfo() {
        Parking parking = parkingMapper.getParkingInfo();
        return parking;
    }
}

