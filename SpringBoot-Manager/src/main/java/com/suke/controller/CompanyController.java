package com.suke.controller;

import com.suke.pojo.CompanyVO;
import com.suke.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/company")
@CrossOrigin
public class CompanyController {
    @Autowired
    private CompanyService companyService;
    //获取入驻企业统计信息
    @RequestMapping("/getcompanyreport")
    public List<CompanyVO> getCompanyReport(){
        List<CompanyVO> list = companyService.getCompanyReport();

        return list;
    }
}
