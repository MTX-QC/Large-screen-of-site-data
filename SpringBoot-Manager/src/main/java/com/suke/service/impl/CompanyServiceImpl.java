package com.suke.service.impl;

import com.suke.mapper.CompanyMapper;
import com.suke.pojo.CompanyVO;
import com.suke.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyServiceImpl implements CompanyService {

    @Autowired
    private CompanyMapper companyMapper;
    @Override
    public List<CompanyVO> getCompanyReport() {
        List<CompanyVO> list = companyMapper.getCompanyReport();
        return list;
    }

















}
