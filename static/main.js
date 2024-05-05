var texto = ['CARRER HISTORY','PROFILE','PROYECTS','CONTACT','Web desing','View proyects', 'Estudies', 'Work experience', 'Time availability', 'PERSONAL <br> DATA', 'Name:', 'Age:', 'Place of birth:', 'Date of birth:', 'View complete cv'],
    original = document.getElementById('nombre').textContent,
    originalPerfil = document.getElementById('perfil').textContent,
    originalProyecto = document.getElementById('proyecto').textContent,
    originalContacto = document.getElementById('contacto').textContent,
    originalTextoCarusel = document.getElementById('textoCarusel').textContent,
    originalTextoCarusel1 = document.getElementById('textoCarusel1').textContent,
    originalTextoCarusel2 = document.getElementById('textoCarusel2').textContent,
    nombreDatos = document.getElementById('Nombre').textContent,
    edadDatos = document.getElementById('edad').textContent,
    lugraNacimientoDatos = document.getElementById('lugarNacimiento').textContent,
    fechaNaciemientoDatos = document.getElementById('fechaNacimiento').textContent,
    cv = document.getElementById('cv').textContent,
    estudio = document.getElementById('estudio').textContent,
    experiencia = document.getElementById('experiencia').textContent,
    horario = document.getElementById('horario').textContent,
    datos = document.getElementById('datos').textContent,
    proyect = document.getElementById('proyect').textContent,
    proyect1 = document.getElementById('proyect1').textContent,
    proyect2 = document.getElementById('proyect2').textContent,
    bool = true
    
    function cambioTexto() {
          if (bool === true) {
            document.getElementById('nombre').innerHTML = texto[0];
            document.getElementById('perfil').innerHTML = '<i class="fas fa-home"></i>' + texto[1];
            document.getElementById('proyecto').innerHTML = '<i class="fas fa-list"></i>' + texto[2];
            document.getElementById('contacto').innerHTML = '<i class="fas fa-user"></i>' + texto[3];
            document.getElementById('textoCarusel').innerHTML = texto[4];
            document.getElementById('textoCarusel1').innerHTML = texto[4];
            document.getElementById('textoCarusel2').innerHTML = texto[4];
            document.getElementById('Nombre').innerHTML = texto[10];
            document.getElementById('edad').innerHTML = texto[11];
            document.getElementById('lugarNacimiento').innerHTML = texto[12];
            document.getElementById('fechaNacimiento').innerHTML = texto[13];
            document.getElementById('cv').innerHTML = texto[14]
            document.getElementById('estudio').innerHTML = texto[6]
            document.getElementById('experiencia').innerHTML = texto[7]
            document.getElementById('horario').innerHTML = texto[8]
            document.getElementById('datos').innerHTML = texto[9]
            document.getElementById('proyect').innerHTML = texto[5]
            document.getElementById('proyect1').innerHTML = texto[5]
            document.getElementById('proyect2').innerHTML = texto[5]
            document.getElementById('idioma').innerHTML= 'Idioma: <b>Ingles</b>';
            document.getElementById('idioma').className = 'd-block text-center';
            document.getElementById('cambioIdioma').className = 'btn btn-success';
            bool = false
          }
          else if(bool === false){
            document.getElementById('nombre').innerHTML = original;
            document.getElementById('perfil').innerHTML ='<i class="fas fa-home"></i>' + originalPerfil;
            document.getElementById('proyecto').innerHTML ='<i class="fas fa-list"></i>' + originalProyecto;
            document.getElementById('contacto').innerHTML ='<i class="fas fa-user"></i>' + originalContacto;
            document.getElementById('textoCarusel').innerHTML = originalTextoCarusel;
            document.getElementById('textoCarusel1').innerHTML = originalTextoCarusel1;
            document.getElementById('textoCarusel2').innerHTML = originalTextoCarusel2;
            document.getElementById('Nombre').innerHTML = nombreDatos;
            document.getElementById('edad').innerHTML = edadDatos;
            document.getElementById('lugarNacimiento').innerHTML = lugraNacimientoDatos;
            document.getElementById('fechaNacimiento').innerHTML = fechaNaciemientoDatos;
            document.getElementById('cv').innerHTML = cv
            document.getElementById('estudio').innerHTML = estudio 
            document.getElementById('experiencia').innerHTML = experiencia
            document.getElementById('horario').innerHTML = horario
            document.getElementById('datos').innerHTML = datos
            document.getElementById('proyect').innerHTML = proyect
            document.getElementById('proyect1').innerHTML = proyect1
            document.getElementById('proyect2').innerHTML = proyect2
            document.getElementById('idioma').innerHTML = 'Idioma: <b>Español</b>';
            document.getElementById('idioma').className = 'd-block text-center';
            document.getElementById('cambioIdioma').className = 'btn btn-danger';
            bool = true           
          }
      }