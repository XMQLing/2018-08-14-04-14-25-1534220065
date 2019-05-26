module.exports = function main(input) {
    var shuzi = input; 
	
	var lcd0='1._....._.._....._.._.._.._.._.'; 
	var lcd1='1|.|..|._|._||_||_.|_...||_||_|';
	var lcd2='1|_|..||_.._|..|._||_|..||_|..|';
	//console.log(shuzi, typeof shuzi);
	var shuchu0="0";
	var shuchu1="0";
	var shuchu2="0";
	
	
	for(var i =0;i<shuzi.length;i++){
			if(shuzi[i]=="0"){
			shuchu0=shuchu0+lcd0.substr(1,3)+" ";
			shuchu1=shuchu1+lcd1.substr(1,3)+" ";
			shuchu2=shuchu2+lcd2.substr(1,3)+" ";
		}
		else if(shuzi[i]=="1"){
			shuchu0=shuchu0+lcd0.substr(4,3)+" ";
			shuchu1=shuchu1+lcd1.substr(4,3)+" ";
			shuchu2=shuchu2+lcd2.substr(4,3)+" ";
		}
		else if(shuzi[i]=="2"){
			shuchu0=shuchu0+lcd0.substr(7,3)+" ";
			shuchu1=shuchu1+lcd1.substr(7,3)+" ";
			shuchu2=shuchu2+lcd2.substr(7,3)+" ";
		}
		else if(shuzi[i]=="3"){
			shuchu0=shuchu0+lcd0.substr(10,3)+" ";
			shuchu1=shuchu1+lcd1.substr(10,3)+" ";
			shuchu2=shuchu2+lcd2.substr(10,3)+" ";
		}
		else if(shuzi[i]=="4"){
			shuchu0=shuchu0+lcd0.substr(13,3)+" ";
			shuchu1=shuchu1+lcd1.substr(13,3)+" ";
			shuchu2=shuchu2+lcd2.substr(13,3)+" ";
		}
		else if(shuzi[i]=="5"){
			shuchu0=shuchu0+lcd0.substr(16,3)+" ";
			shuchu1=shuchu1+lcd1.substr(16,3)+" ";
			shuchu2=shuchu2+lcd2.substr(16,3)+" ";
		}
		else if(shuzi[i]=="6"){
			shuchu0=shuchu0+lcd0.substr(19,3)+" ";
			shuchu1=shuchu1+lcd1.substr(19,3)+" ";
			shuchu2=shuchu2+lcd2.substr(19,3)+" ";
		}
		else if(shuzi[i]=="7"){
			shuchu0=shuchu0+lcd0.substr(22,3)+" ";
			shuchu1=shuchu1+lcd1.substr(22,3)+" ";
			shuchu2=shuchu2+lcd2.substr(22,3)+" ";
		}
		else if(shuzi[i]=="8"){
			shuchu0=shuchu0+lcd0.substr(25,3)+" ";
			shuchu1=shuchu1+lcd1.substr(25,3)+" ";
			shuchu2=shuchu2+lcd2.substr(25,3)+" ";
		}
		else if(shuzi[i]=="9"){
			shuchu0=shuchu0+lcd0.substr(28,3)+" ";
			shuchu1=shuchu1+lcd1.substr(28,3)+" ";
			shuchu2=shuchu2+lcd2.substr(28,3)+" ";
		}
	};
	shuchu0=shuchu0.substr(1,shuchu0.length-2);
	shuchu1=shuchu1.substr(1,shuchu1.length-2);
	shuchu2=shuchu2.substr(1,shuchu2.length-2);
	var result = (shuchu0+'\n'+
			shuchu1+'\n'+
			shuchu2+'\n');
	return result;

	

}

