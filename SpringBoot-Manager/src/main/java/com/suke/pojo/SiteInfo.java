package com.suke.pojo;

import com.baomidou.mybatisplus.annotation.TableName;

@TableName("tb_site_info")
public class SiteInfo {
    private Integer companyNumber;
    private Integer dettledCompanyNumber;
    private Integer engagedPeopleNumber;
    private Double CoveredArea;
    private Double ConstructionErea;
    private Double ConstructionLandErea;

    public void setConstructionLandErea(Double constructionLandErea) {
        ConstructionLandErea = constructionLandErea;
    }

    public Double getConstructionLandErea() {
        return ConstructionLandErea;
    }

    public void setCompanyNumber(Integer companyNumber) {
        this.companyNumber = companyNumber;
    }

    public void setDettledCompanyNumber(Integer dettledCompanyNumber) {
        this.dettledCompanyNumber = dettledCompanyNumber;
    }

    public void setEngagedPeopleNumber(Integer engagedPeopleNumber) {
        this.engagedPeopleNumber = engagedPeopleNumber;
    }

    public void setCoveredArea(Double coveredArea) {
        CoveredArea = coveredArea;
    }

    public void setConstructionErea(Double constructionErea) {
        ConstructionErea = constructionErea;
    }


    public Integer getCompanyNumber() {
        return companyNumber;
    }

    public Integer getDettledCompanyNumber() {
        return dettledCompanyNumber;
    }

    public Integer getEngagedPeopleNumber() {
        return engagedPeopleNumber;
    }

    public Double getCoveredArea() {
        return CoveredArea;
    }

    public Double getConstructionErea() {
        return ConstructionErea;
    }

}
