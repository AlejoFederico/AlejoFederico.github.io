var texto = ['CARRER HISTORY','PROFILE','PROYECTS','CONTACT','Web desing','View proyects', 'Estudies', 'Work experience', 'Time availability', 'PERSONAL <br> DATA', 'Name:', 'Age:', 'Place of birth:', 'Date of birth:', 'View complete cv']
        const original = document.getElementById('nombre').textContent
        const originalPerfil = document.getElementById('perfil').textContent
        const originalProyecto = document.getElementById('proyecto').textContent
        const originalContacto = document.getElementById('contacto').textContent
        const originalTextoCarusel = document.getElementById('textoCarusel').textContent
        const originalTextoCarusel1 = document.getElementById('textoCarusel1').textContent
        const originalTextoCarusel2 = document.getElementById('textoCarusel2').textContent
        const nombreDatos = document.getElementById('Nombre').textContent
        const edadDatos = document.getElementById('edad').textContent
        const lugraNacimientoDatos = document.getElementById('lugarNacimiento').textContent
        const fechaNaciemientoDatos = document.getElementById('fechaNacimiento').textContent
        const cv = document.getElementById('cv').textContent
        const estudio = document.getElementById('estudio').textContent
        const experiencia = document.getElementById('experiencia').textContent
        const horario = document.getElementById('horario').textContent
        const datos = document.getElementById('datos').textContent
        const proyect = document.getElementById('proyect').textContent
        const proyect1 = document.getElementById('proyect1').textContent
        const proyect2 = document.getElementById('proyect2').textContent
        var bool = true
        function cambioTexto() { console.log(original)
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
            document.getElementById('idioma').className = 'd-block';
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
            document.getElementById('idioma').className = 'd-block';
            document.getElementById('cambioIdioma').className = 'btn btn-danger';
            bool = true           
          }
      }