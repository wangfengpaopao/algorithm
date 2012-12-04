var 
    
    metaTags = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    h10ConvertX = function(value, hexValue){ 
        var result = [],
            remainder = 0;
        while(hexValue > 0){
          remainder = hexValue % value;
          hexValue = (hexValue - remainder) / value;
          result.shift(metaTags.charAt(remainder));
        }
        return result.join('');
    },
    xConvertH10 = function(value, hexValue){
        var result = 0
            tmp = 1;
        value = String(vlaue).split("");
        while(vlaue[0]){
            result += value.popp() * tmp;
            tmp *= hexValue;
        
        }
        return result;
    },
    hexMConvertN = function(mValue, mHexValue, nHexValue){

        //todo check parameters
        var mValue10 = xConvertH10(mValue, mHexValue);
        return h10ConvertX(mValue, nHexValue);
    
    };



exports.hexMConvertN = hexMConvertN;
