package com.suke.pojo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

/**
 * 工地资产统计类
 *  assets_total
 */
@Data
@TableName("tb_assets_total")
public class AssetsTotal {
    //属性的数据类型必须是包装类型
    @TableId(type= IdType.AUTO)  //该列主键生成策略: 自增
    private  Integer id;
    /**
     * 总产值
     * 列: total_assets
     */
    private  Double totalAssets;
    /**
     * 总投资
     */
    private  Double totalInvestment;
    /**
     * 总净利
     */
    private  Double totalNetProfit;
    /**
     *总税收
     */
    private  Double totalRevenue;
    /**
     * 所属工地
     */
    private  Double siteId;

    public Integer getId() {
        return id;
    }

    public Double getTotalAssets() {
        return totalAssets;
    }

    public Double getTotalInvestment() {
        return totalInvestment;
    }

    public Double getTotalNetProfit() {
        return totalNetProfit;
    }

    public Double getTotalRevenue() {
        return totalRevenue;
    }

    public Double getSiteId() {
        return siteId;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setTotalAssets(Double totalAssets) {
        this.totalAssets = totalAssets;
    }

    public void setTotalInvestment(Double totalInvestment) {
        this.totalInvestment = totalInvestment;
    }

    public void setTotalNetProfit(Double totalNetProfit) {
        this.totalNetProfit = totalNetProfit;
    }

    public void setTotalRevenue(Double totalRevenue) {
        this.totalRevenue = totalRevenue;
    }

    public void setSiteId(Double siteId) {
        this.siteId = siteId;
    }
}