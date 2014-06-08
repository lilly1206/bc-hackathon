var request = require("superagent");

exports.getComponents = function(req, res) {
    var data = {
    '_dyncharset' : 'UTF-8',
    '_DARGS'      : '/Store/catalog/include/bikeBuilderInit.jsp.ajaxform-getGruppos',
    '/backcountry/catalog/bikebuilder/formhandler/BikeBuilderFormHandler.frameSkuId': 'PIN0139',
    '/backcountry/catalog/bikebuilder/formhandler/BikeBuilderFormHandler.useMockResponse' : 'false',
    '_D:/backcountry/catalog/bikebuilder/formhandler/BikeBuilderFormHandler.frameSkuId': null,
    '_D:/backcountry/catalog/bikebuilder/formhandler/BikeBuilderFormHandler.useMockResponse': null,
    '_D:/backcountry/catalog/bikebuilder/formhandler/BikeBuilderFormHandler.getCompatibleGruppos': null,
    '/backcountry/catalog/bikebuilder/formhandler/BikeBuilderFormHandler.getCompatibleGruppos':null
    };
    request
    .post('http://www.competitivecyclist.com/Store/catalog/productLanding.jsp')
    .send(data)
    .set('Accept', 'application/json, text/javascript, */*; q=0.01')
    .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
    .end(function(error, res){
        console.log(error);
        console.log(res.text);
    });
};