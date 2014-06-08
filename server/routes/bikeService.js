var request = require("superagent");

exports.getComponents = function(req, res) {
    var self = res;
    var data = {
    '_dyncharset' : 'UTF-8',
    '_DARGS'      : '/Store/catalog/include/bikeBuilderInit.jsp.ajaxform-getComponents',
    '/backcountry/catalog/bikebuilder/formhandler/BikeBuilderFormHandler.buildTypeId':2,
    '/backcountry/catalog/bikebuilder/formhandler/BikeBuilderFormHandler.frameSkuId':'RID0099-RED-S',
    '/backcountry/catalog/bikebuilder/formhandler/BikeBuilderFormHandler.getCompatibleComponents':null,
    '/backcountry/catalog/bikebuilder/formhandler/BikeBuilderFormHandler.gruppoId':18,
    '/backcountry/catalog/bikebuilder/formhandler/BikeBuilderFormHandler.useMockResponse':false,
    '_D:/backcountry/catalog/bikebuilder/formhandler/BikeBuilderFormHandler.buildTypeId': null,
    '_D:/backcountry/catalog/bikebuilder/formhandler/BikeBuilderFormHandler.frameSkuId': null,
    '_D:/backcountry/catalog/bikebuilder/formhandler/BikeBuilderFormHandler.getCompatibleComponents': null,
    '_D:/backcountry/catalog/bikebuilder/formhandler/BikeBuilderFormHandler.gruppoId': null,
    '_D:/backcountry/catalog/bikebuilder/formhandler/BikeBuilderFormHandler.useMockResponse': null
    };
    result = request
    .post('http://www.competitivecyclist.com/Store/catalog/productLanding.jsp')
    .send(data)
    .set('Accept', 'application/json, text/javascript, */*; q=0.01')
    .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
    .end(function(error, res){
        if (res.ok) {
          self.send(res.text);
        } else {
          self.send('error');
        }
    });
};

exports.getGruppos = function(req, res) {
    var self = res;
    var data = {
    '_dyncharset' : 'UTF-8',
    '_DARGS'      : '/Store/catalog/include/bikeBuilderInit.jsp.ajaxform-getGruppos',
    '/backcountry/catalog/bikebuilder/formhandler/BikeBuilderFormHandler.frameSkuId': 'SNZ0366',
    '/backcountry/catalog/bikebuilder/formhandler/BikeBuilderFormHandler.useMockResponse' : 'false',
    '_D:/backcountry/catalog/bikebuilder/formhandler/BikeBuilderFormHandler.frameSkuId': null,
    '_D:/backcountry/catalog/bikebuilder/formhandler/BikeBuilderFormHandler.useMockResponse': null,
    '_D:/backcountry/catalog/bikebuilder/formhandler/BikeBuilderFormHandler.getCompatibleGruppos': null,
    '/backcountry/catalog/bikebuilder/formhandler/BikeBuilderFormHandler.getCompatibleGruppos':null
    };
    result = request
    .post('http://www.competitivecyclist.com/Store/catalog/productLanding.jsp')
    .send(data)
    .set('Accept', 'application/json, text/javascript, */*; q=0.01')
    .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
    .end(function(error, res){
        if (res.ok) {
          self.send(res.text);
        } else {
          self.send('error');
        }
    });
};