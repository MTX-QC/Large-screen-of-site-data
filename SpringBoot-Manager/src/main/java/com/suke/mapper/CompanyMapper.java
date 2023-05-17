package com.suke.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.suke.pojo.CompanyVO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

//
@Mapper
@Repository
public interface CompanyMapper extends BaseMapper<CompanyVO> {
    List<CompanyVO> getCompanyReport();
}
