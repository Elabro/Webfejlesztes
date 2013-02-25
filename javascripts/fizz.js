function fizz(n) {
	szoveg="";
	if(n%3==0) szoveg="fizz";
	if(n%5==0) szoveg=szoveg+"buzz";
	if(n%7==0) szoveg=szoveg+"bizz";
	if(szoveg===""){
		return n;
	}else{
		return szoveg;		
	}
}