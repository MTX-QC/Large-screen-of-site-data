package com.suke.service;

import com.suke.pojo.AssetsTotal;

public interface AssetsTotalService {
    /**
     * 根据id查询工资资产信息
     * @param id
     * @return
     */
     AssetsTotal queryById(Integer id);
}
