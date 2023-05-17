package com.suke.service.impl;

import com.suke.mapper.SiteInfoMapper;
import com.suke.pojo.SiteInfo;
import com.suke.service.SiteInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SiteInfoServiceImpl implements SiteInfoService {

    @Autowired
    private SiteInfoMapper siteInfoMapper;
    @Override
    public SiteInfo getSiteInfo() {
        SiteInfo siteInfo = siteInfoMapper.getSiteInfo();
        return siteInfo;
    }
}
