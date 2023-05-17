package com.suke.controller;


import com.suke.pojo.News;
import com.suke.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
@RequestMapping("/news")
@CrossOrigin
public class NewsController {
    @Autowired
    private NewsService newsService;

    //
    @RequestMapping("/getAllAnFangNews")
    public List<News> getAllAnFangNews(){
        List<News> newsList = newsService.getAllAnFangNews();
        return newsList;
    }
}
