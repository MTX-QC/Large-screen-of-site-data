package com.suke.controller;

import com.suke.pojo.SiteInfo;
import com.suke.service.SiteInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/siteinfo")
@CrossOrigin
public class SiteInfoController {
    @Autowired
    private SiteInfoService siteInfoService;

    //获取工地概况
    @RequestMapping("/getsiteinfo")
    public SiteInfo getSiteInfo(){
        SiteInfo siteInfo = siteInfoService.getSiteInfo();
        return siteInfo;
    }

}
