        function ValidarNombre(campo)
        {
        //Función para comprobar el nombre y los apellidos
        let NumEspacios=0;
        let ControlForm=document.getElementById(campo).value;

          for (i=0; i<ControlForm.length-1; i++)
          {
            if (ControlForm.substring(i,i+1) == " ") NumEspacios=NumEspacios+1;
          }
          if (NumEspacios<2) {
            alert("Debe introducir NOMBRE y los dos APELLIDOS");
            //ControlForm.focus(); //Solo útil para IE
          
            setTimeout(function(){document.getElementById(campo).focus(); },100);
            //En navegadores como Edge o Chrome sobretodo es necesario añadir
            //un retardo en la colocación del foco ya que de forma automática hace
            //un cambio de casilla y esto provoca un error que hace repetir el 
            //mensaje en forma de bucle

           
          }
        }

        function SeleccionaContenido(campo)
        {
        //Función que selecciona el contenido del campo que se pasa como parámetro
         document.getElementById(campo).select();
        }

        function ValidarEmail(campo)
        {
        //Función para validar el E-Mail introducido
        var Valido=false;
        var ControlForm=document.getElementById(campo).value;
        
          for (i=1; i<ControlForm.length; i++)
          {
            if (ControlForm.substring(i,i+1) == "@") Valido=true;
          }
          if (!Valido) {
            alert("La dirección de correo es incorrecta");
            //document.getElementById(campo).focus();
            //Si se vuelve a dejar el foco en la caja CHROME vuelve a lanzar el
            //método onBlur, mientras que explorer no
          }
        }

        function ValidarFrm()
        {
        //Función para validar los datos introducidos en el formulario
          let Valido=false;
          let Formulario=document.getElementById("formu");

          Valido=confirm("¿Sigue adelante con la validacion?");
          if (!Valido) {              
            Formulario.Nombre.value="";
            Formulario.Nacionalidad.value="España";
            Formulario.Email.value="";
            Formulario.Nombre.focus();
            //también podemos trabajar directamente con los controles del formulario
            /*document.getElementById(Nombre).value="";
            document.getElementById(Nacionalidad).value="España";
            document.getElementById(Email).value="";
            document.getElementById(Nombre).focus();*/
            
          }
        }

