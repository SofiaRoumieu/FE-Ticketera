import { Component } from '@angular/core';
import { DataService } from './services/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'veterinaria-app';
  //Array de JSON que representa a los botones del front
  botones = [
    {
      descripcion: "1. Ver todos los tickets", //Texto del boton
      link: "http://localhost:8080/ticket/", //Link a donde voy a realizar la peticion. En este ejemplo es localhost, aca iria un link de heroku con rutas validas de la API
      metodo: "get", //Metodo a utilizar para hacer la peticion
      resultado: null //Sirve para mostrar o no una caja de texto con el resultado de la peticion, meramente visual
    },
    {
      descripcion: "2. Cantidad de tickets sin resolver por cliente",
      link:"http://localhost:8080/ticket/cantTicketsNoResueltosCliente",
      metodo: "get",
      resultado: null
    },
    {
      descripcion: "3. Ver tickets de tipo Defecto",
      link: "http://localhost:8080/ticket/listarDesperfectos",
      metodo: "get",
      resultado: null
    },
    {
      descripcion: "4. Ver derivaciones del ticket 1",
      link: "http://localhost:8080/ticket/derivacionesTicketUno",
      metodo: "get",
      resultado: null
    },
    {
      descripcion: "5. Personas que sean cliente y empleado ingresado en Octubre 2018",
      link: "http://localhost:8080/ticket/personasClienteYEmpleado",
      metodo: "get",
      resultado: null
    },
    {
      descripcion: "6. Personas no empleados con tickets generados",
      link: "http://localhost:8080/ticket/personasNoEmpleadoConTickets",
      metodo: "get",
      resultado: null
    },
    {
      descripcion: "7. Cantidad de tickets para la sucursal Wilde",
      link: "http://localhost:8080/ticket/ticketsZonaWilde",
      metodo: "get",
      resultado: null
    },
    {
      descripcion: "8. Sucursal par acliente 32382709 segun ubicacion",
      link: "http://localhost:8080/ticket/sucursalParaCliente32382709",
      metodo: "get",
      resultado: null
    },
    {
      descripcion: "9. Ultimo ticket de Wilde o Lanus",
      link: "http://localhost:8080/ticket/ultimoTicketsWildeLanus",
      metodo: "get",
      resultado: null
    },
    {
      descripcion: "10. Clientes a menos de 5 kms de la sucursar Wilde",
      link: "http://localhost:8080/ticket/clientesCercanosSucuWilde",
      metodo: "get",
      resultado: null
    },
  ]

  constructor(private servicioDatos: DataService){
  }

  //Esta funcion es la encargada de determinar que peticion se va a hacer de a cuerdo a los valores de un boton
  hacerPeticion(boton: any){
    //Que no se vean las cajas de texto de ningun boton
    this.botones.forEach(boton => {
      boton.resultado = null;
    });

    //Switch para determinar que clase de peticion voy a hacer
    switch(boton.metodo)
    {
      case "get":
        this.servicioDatos.getData(boton.link)
        .subscribe((datos: any)=>{
          boton.resultado = JSON.stringify(datos);
        });
        break;
      case "post":
        this.servicioDatos.postData(boton.link)
        .subscribe((datos: any)=>{
          boton.resultado = JSON.stringify(datos);
        });
        break;
      case "put":
        this.servicioDatos.putData(boton.link)
        .subscribe((datos: any)=>{
          boton.resultado = JSON.stringify(datos);
        });
        break;
      case "delete":
        this.servicioDatos.deleteData(boton.link)
        .subscribe((datos: any)=>{
          boton.resultado = JSON.stringify(datos);
        });
        break;
    }
    
  }
}
