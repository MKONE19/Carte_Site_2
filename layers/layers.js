ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32616").setExtent([296600.558880, 4888176.579820, 296630.400000, 4888261.223500]);
var wms_layers = [];

var lyr_EX_DSM0_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "EX_DSM0",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/EX_DSM0_0.png",
    attributions: ' ',
                                projection: 'EPSG:32616',
                                alwaysInRange: true,
                                imageExtent: [296605.640140, 4888182.361340, 296624.646140, 4888250.939340]
                            })
                        });
var lyr_CHMtest_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "CHM test",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/CHMtest_1.png",
    attributions: ' ',
                                projection: 'EPSG:32616',
                                alwaysInRange: true,
                                imageExtent: [296605.637970, 4888182.343160, 296624.656210, 4888250.940200]
                            })
                        });
var lyr_CVMtest_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "CVM test",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/CVMtest_2.png",
    attributions: ' ',
                                projection: 'EPSG:32616',
                                alwaysInRange: true,
                                imageExtent: [296605.637970, 4888182.343160, 296624.656210, 4888250.940200]
                            })
                        });
var lyr_Index_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Index",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Index_3.png",
    attributions: ' ',
                                projection: 'EPSG:32616',
                                alwaysInRange: true,
                                imageExtent: [296600.558880, 4888176.579820, 296630.400000, 4888261.223500]
                            })
                        });
var lyr_Mask_RGB_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Mask_RGB",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Mask_RGB_4.png",
    attributions: ' ',
                                projection: 'EPSG:32616',
                                alwaysInRange: true,
                                imageExtent: [296600.558880, 4888176.579820, 296630.400000, 4888261.223500]
                            })
                        });

lyr_EX_DSM0_0.setVisible(true);lyr_CHMtest_1.setVisible(true);lyr_CVMtest_2.setVisible(true);lyr_Index_3.setVisible(true);lyr_Mask_RGB_4.setVisible(true);
var layersList = [lyr_EX_DSM0_0,lyr_CHMtest_1,lyr_CVMtest_2,lyr_Index_3,lyr_Mask_RGB_4];
