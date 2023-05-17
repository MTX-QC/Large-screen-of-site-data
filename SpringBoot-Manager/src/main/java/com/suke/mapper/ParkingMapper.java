package com.suke.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.suke.pojo.Parking;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;


//Mybatis-Plus 封装了对单表的
@Repository
@Mapper
public interface ParkingMapper extends BaseMapper<Parking> {

    Parking getParkingInfo();
}
