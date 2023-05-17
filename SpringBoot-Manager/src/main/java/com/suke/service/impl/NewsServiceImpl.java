package com.suke.service.impl;

import com.suke.mapper.NewsMapper;
import com.suke.pojo.News;
import com.suke.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class NewsServiceImpl implements NewsService {
    @Autowired
    private NewsMapper newsMapper;

    @Override
    public List<News> getAllAnFangNews() {
        return newsMapper.getAllAnFangNewsByInfo();
    }
}
