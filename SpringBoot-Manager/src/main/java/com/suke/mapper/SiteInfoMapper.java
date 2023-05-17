package com.suke.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.suke.pojo.SiteInfo;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
@Mapper
@Repository
public interface SiteInfoMapper extends BaseMapper<SiteInfo> {
    SiteInfo getSiteInfo();
}
