var names=new Array();
names[0]="Ranju";
names[1]="jason";
names[2]="Jen";
names[3]="John";
names[4]="kaul";
names[5]="frank";
names[6]="harry";
names[7]="paula";
names[8]="raki";
names[9]="jim";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}