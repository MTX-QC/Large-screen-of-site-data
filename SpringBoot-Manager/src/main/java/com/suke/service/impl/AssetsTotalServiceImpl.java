package com.suke.service.impl;

import com.suke.mapper.AssetsTotalMapper;
import com.suke.pojo.AssetsTotal;
import com.suke.service.AssetsTotalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AssetsTotalServiceImpl implements AssetsTotalService {
    //注入Mapper
    @Autowired
    private AssetsTotalMapper assetsTotalMapper;

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public AssetsTotal queryById(Integer id) {
        if(id == null){
            //抛出异常
            throw new RuntimeException("id不能为空");
        }
        return assetsTotalMapper.selectById(id);
    }
}
