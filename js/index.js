const barraBlanca = document.querySelector(".barra-blanca");
const imgLogo = document.querySelector(".logo"); 


let scroll = 0;

window.addEventListener("scroll",function(e){

	if(window.scrollY>scroll){
		
		barraBlanca.classList.add("pintar-barra-blanca");
		imgLogo.setAttribute("src","https://wp.zozotheme.com/wp-provase/wp-content/uploads/2020/06/consulting_logo.png");

	}else{

		barraBlanca.classList.remove("pintar-barra-blanca");
		imgLogo.setAttribute("src","https://wp.zozotheme.com/wp-provase/wp-content/uploads/2020/06/logo_home4.png");

	}

})