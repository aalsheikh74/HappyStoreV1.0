$( document ).ready(function() {
    //alert( "ready!" );

    var arrProduct = []
    var arrCNames = []
    var categoryName = []
    var drob ='';
    drob="<select>"
    for(var i=0;i<=10;i++){
    	drob+="<option >"+i+"</option>"
    }
    drob+="</select>"


    function product(pName, pPrice, pDescription, pImg,x){
    	return {
    		pName: pName,
    		pPrice: pPrice,
    		pDescription: pDescription, 
    		pImg: pImg,
    		categoryName:categoryName[x]
    	}
    }

    function CustomerList(cName, cPass) {
    	return {
    		cName: cName,
    		cPass: cPass,
    	}
    }
    function category(cName,cimg) {
    	return {
    		cName: cName,
    		cimg:cimg
    	}
    }
    categoryName[0] =category('food',"img/cat/wat.jpg");
    categoryName[1] =category('drink',"img/cat/food.jpg");


    arrProduct[0] = product("pName0", 10, "pName0 pDescription", "pImg",0);

    arrProduct[1] = product("pName1", 12, "pName1 pDescription", "pImg",1);

    arrProduct[2] = product("pName2", 43, "pName2 pDescription", "pImg",0);

    arrProduct[3] = product("pName3", 5, "pName3 pDescription", "pImg",1);

    arrProduct[4] = product("pName4", 77, "pName4 pDescription", "pImg",0);

    arrProduct[5] = product("pName5", 5, "pName5 pDescription", "pImg",1);

    arrCNames[0] = CustomerList("Name1", "123")

    arrCNames[1] = CustomerList("Name2", "321")

    arrCNames[2] = CustomerList("Name3", "213")
    console.log(arrProduct)






/////////////////////////////////////////////////////////
$('#category').click(function(){
// alert("category")

$('#se1').html(diplayCat());



});
//////
$('#p2').click(function(){
	alert("p2")


	$('#se1').html(diplayProduct());

});
//////////
$('#p3').click(function(){
	alert("p3")


	$('#se1').html(disp1(0));

});


//// Need Fix/
$('span').on('click', function(){

		var x=$(this).text()
		alert(x)
	});



function diplayCat(){
	var str='<div class="container row">'
	for(var i=0;i<categoryName.length;i++){
		str+= '<div class="container col-md-4">'
		str+='<h2>' +categoryName[i].cName +'</h2>'
		str+='<div class="card" style="height: 15rem ">'
		str+='<img class="card-img-top" src="'+ categoryName[i].cimg +' " alt="Card image cap" >'
		str+='</div>'
		str+='</div>'
		str+='</div>'

	}
	return str;
}
function diplayProduct(){
	var str='<div class="container row " style="border:solid green" >'
	var x=1;

	for(var i=0;i<arrProduct.length;i++){
		/*if(x ===1){
		 str+='<div class="container row " style="border:solid green" >';
		}*/
		str+= '<div class="container col-md-4" style="border:solid red">';
		str+='<h2><a href="#"><span>' +arrProduct[i].pName +'</span></a></h2>';
		str+='<div class="card" >';
		str+='<img class="card-img-top " src="'+ arrProduct[i].pImg +' " alt="Card image cap" >';
		str+='<div class="card-body">'+arrProduct[i].pDescription+'</div>';
		str+='<div class="card-footer">'+arrProduct[i].pPrice + '</div>';
		//srt+='<button id="plus">+</button>';

		str+='</div>'
		str+='</div>'
		/*if(x===3){
		 str+='</div>';
		 x=0;
		}
		x++;*/
	}
	str+='</div>'
	str+='</div>'



	return str;
}



function disp1(num){
var str='';
str+= '<div class="container col-md-4" style="border:solid red">';
		str+='<h2><a href="#"><span>' +arrProduct[num].pName +'</span></a></h2>';
		str+='<div class="card" >';
		str+='<img class="card-img-top " src="'+ arrProduct[num].pImg +' " alt="Card image cap" >';
		str+='<div class="card-body">'+arrProduct[num].pDescription+'</div>';
		str+='<div class="card-footer">'+arrProduct[num].pPrice + drob+'</div>';
		str+='</div>'
		str+='</div>'
	return str;

}
});











/*<div class="container row">
		<div class="container col-md-4">
			<h2>Catname<\/h2>
			<div class="card" style="height: 15rem ">
				<img class="card-img-top" src="..." alt="Card image cap" >
				<div class="card-body">Content<\/div> 
				<div class="card-footer">Footer<\/div>
			<\/div>
		<\/div>
		<div class="container col-md-4">
			<h2>Catname<\/h2>
			<div class="card" style="height: 15rem ">
				<img class="card-img-top" src="..." alt="Card image cap" >
				<div class="card-body">Content<\/div> 
				<div class="card-footer">Footer<\/div>
			<\/div>
		<\/div>
		<div class="container col-md-4">
			<h2>Catname<\/h2>
			<div class="card" style="height: 15rem ">
				<img class="card-img-top" src="..." alt="Card image cap" >
				<div class="card-body ">Content<\/div> 
				<div class="card-footer">Footer<\/div>
			<\/div>
		<\/div>
	<\/div>)*/