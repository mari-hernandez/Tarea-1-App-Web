function validador(){
	let numeroDeCuestionarios = k-1;
	let errores = "";
	let region = document.getElementsByName("region")[0].selectedIndex;
	let comuna = document.getElementsByName("comuna")[0].selectedIndex;
	let sector = document.getElementsByName("sector")[0].value;
	let nombre = document.getElementsByName("nombre")[0].value;


	let email = document.getElementsByName("email")[0].value;
	let celular = document.getElementsByName("celular")[0].value;


	if(region==null || region==0){
			errores+= "<p>Seleccione una region</p>";
		}
	if(comuna==null || comuna==0){
			errores+= "<p>Seleccione una comuna</p>";
		}

	if(sector.length > 100){
			errores+= "<p>Sector muy largo</p>";
		}
		
	let regex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
	if(nombre.length > 200 || nombre.length < 1 || !regex.test(nombre)|| nombre==null){
		errores+= "<p>Nombre incorrecto</p>";
	}

	let regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	if(!regexEmail.test(email)|| email==null || email==0){
		errores+= "<p>Email incorrecto</p>";
	}

	let regexCellPhone =/\D*([+56][2-9])(\d{9})\D*/;
	if(!regexCellPhone.test(celular) && celular.length!=0){
		errores+= "<p>Número de celular incorrecto</p>";
	}

	for(let numero = 0; numero < numeroDeCuestionarios; numero++){
		let avist = numero+1;
		let diaHoraAvistamiento = document.getElementsByName("dia-hora-avistamiento")[numero].value;
		let tipoAvistamiento = document.getElementsByName("tipo-avistamiento")[numero].selectedIndex;
		let estadoAvistamiento = document.getElementsByName("estado-avistamiento")[numero].selectedIndex;
		let fotoAvistamiento = document.getElementsByName("foto-avistamiento")[numero].files;


		regexDia = /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (2[0-3]|[01][0-9]):[0-5][0-9]/;
		if(!regexDia.test(diaHoraAvistamiento)|| diaHoraAvistamiento==null||diaHoraAvistamiento==0){
			errores+= "<p>Seleccione una hora de avistamiento correcta en el avistamiento "+ avist.toString() + " </p>";
		}

		if(tipoAvistamiento==null||tipoAvistamiento==0){
			errores+= "<p>Seleccione un tipo en el avistamiento "+ avist.toString() + " </p>";
		}

		if(estadoAvistamiento==null||estadoAvistamiento==0){
			errores+= "<p>Seleccione un estado en el avistamiento "+ avist.toString() + " </p>";
		}	

		if(fotoAvistamiento.length===0){
			errores+= "<p>Ingrese una Foto en el avistamiento "+ avist.toString() + " </p>";

		}

	}
	let modal = document.getElementById("myModal");

	let contenedor = document.getElementById("erroresusuario");
    if (errores !== "") {
        contenedor.innerHTML = errores;
        contenedor.style.display = "block";
        let cuadrito = document.getElementById("error");
        cuadrito.style.display="block";

        return false;
    }	


    modal.style.display = "block";
    return true;

}



