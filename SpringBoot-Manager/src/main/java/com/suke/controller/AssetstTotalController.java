package com.suke.controller;

import com.suke.pojo.AssetsTotal;
import com.suke.service.AssetsTotalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/assetst")
@CrossOrigin    //允许访问
public class AssetstTotalController {
    @Autowired
    private AssetsTotalService assetsTotalService;
    @RequestMapping("/findById/{id}")
    public AssetsTotal findById(@PathVariable("id") int id){

        return assetsTotalService.queryById(id);
    }
}