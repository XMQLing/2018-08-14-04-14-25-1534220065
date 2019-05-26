module.exports = function main(input) {
    var shuzi = input; 
	
	var lcd0='._....._.._....._.._.._.._.._.';
	var lcd1='|.|..|._|._||_||_.|_...||_||_|';
	var lcd2='|_|..||_.._|..|._||_|..||_|..|';
	
	var shuchu0;
	var shuchu1;
	var shuchu2;
	
	for(var i =0;i<shuzi.length;i++){
		if(shuzi[i]=="0"){
			shuchu0=shuchu0+lcd0.substr(0,3);
			shuchu1=shuchu1+lcd1.substr(0,3);
			shuchu2=shuchu2+lcd2.substr(0,3);
		}
		else if(shuzi[i]=="1"){
			shuchu0=shuchu0+lcd0.substr(3,3);
			shuchu1=shuchu1+lcd1.substr(3,3);
			shuchu2=shuchu2+lcd2.substr(3,3);
		}
		else if(shuzi[i]=="2"){
			shuchu0=shuchu0+lcd0.substr(6,3);
			shuchu1=shuchu1+lcd1.substr(6,3);
			shuchu2=shuchu2+lcd2.substr(6,3);
		}
		else if(shuzi[i]=="3"){
			shuchu0=shuchu0+lcd0.substr(9,3);
			shuchu1=shuchu1+lcd1.substr(9,3);
			shuchu2=shuchu2+lcd2.substr(9,3);
		}
		else if(shuzi[i]=="4"){
			shuchu0=shuchu0+lcd0.substr(12,3);
			shuchu1=shuchu1+lcd1.substr(12,3);
			shuchu2=shuchu2+lcd2.substr(12,3);
		}
		else if(shuzi[i]=="5"){
			shuchu0=shuchu0+lcd0.substr(15,3);
			shuchu1=shuchu1+lcd1.substr(15,3);
			shuchu2=shuchu2+lcd2.substr(15,3);
		}
		else if(shuzi[i]=="6"){
			shuchu0=shuchu0+lcd0.substr(18,3);
			shuchu1=shuchu1+lcd1.substr(18,3);
			shuchu2=shuchu2+lcd2.substr(18,3);
		}
		else if(shuzi[i]=="7"){
			shuchu0=shuchu0+lcd0.substr(21,3);
			shuchu1=shuchu1+lcd1.substr(21,3);
			shuchu2=shuchu2+lcd2.substr(21,3);
		}
		else if(shuzi[i]=="8"){
			shuchu0=shuchu0+lcd0.substr(24,3);
			shuchu1=shuchu1+lcd1.substr(24,3);
			shuchu2=shuchu2+lcd2.substr(24,3);
		}
		else if(shuzi[i]=="9"){
			shuchu0=shuchu0+lcd0.substr(27,3);
			shuchu1=shuchu1+lcd1.substr(27,3);
			shuchu2=shuchu2+lcd2.substr(27,3);
		}
	};

	console.log(shuchu0+"\n"+shuchu1+"\n"+shuchu2)
}