package com.suke.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.suke.pojo.News;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
@Mapper
public interface NewsMapper extends BaseMapper<News> {

      List<News> getAllAnFangNewsByInfo();


}
