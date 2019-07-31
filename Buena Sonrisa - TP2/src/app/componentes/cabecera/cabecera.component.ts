import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/Usuario.service';
import { DataApiService } from 'src/app/servicios/DataApi.service';
import { take } from 'rxjs/operators';
import { Perfil } from 'src/app/clases/Usuario';
import { google } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {

  public estaLogeado: boolean;
  administrador = false;
  recepcionista = false;
  cliente = false;
  especialista = false;

  imagenUrl = "";
  nombre = "";
  perfil: Perfil;

  constructor(private usuarioService: UsuarioService, private dataApi: DataApiService) { }

  ngOnInit() {
    this.TraerUsuarioActual();
  }

  TraerUsuarioActual() {
    this.usuarioService.EstaLogeado().subscribe(user => {
      if (user) {
        this.dataApi.TraerUno(user.uid, 'usuarios').pipe(take(1)).subscribe(userx => {

          if (userx) {
            if (userx.Activo) {
              this.usuarioService.usuario = userx;

              this.imagenUrl = userx.ImagenUrl;
              this.nombre = userx.Nombre;
              this.perfil = userx.Perfil;
              this.estaLogeado = true;
            }
            else {
              this.imagenUrl = "";
              this.nombre = "";
              this.estaLogeado = false;
              this.perfil = null;
            }
          }

        });
      }
      else {
        this.imagenUrl = "";
        this.nombre = "";
        this.estaLogeado = false;
        this.perfil = null;
      }
    });
  }

  Deslogearse() {
    this.imagenUrl = "";
    this.nombre = "";
    this.usuarioService.DeslogearUsuario();
    this.perfil = null;
  }

  // geocoder;

  // initialize() {
  //   this.geocoder = new google.maps.Geocoder();
  // }

  emergencia() {

    navigator.geolocation.getCurrentPosition((position) => {
      debugger;
      var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      //https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY

      // this.geocoder.geocode({ 'latLng': latlng }, function (results, status) {
      //   debugger;
      //   if (status == google.maps.GeocoderStatus.OK) {
      //     console.log(results)
      //     if (results[1]) {
      //       //formatted address
      //       var address = results[0].formatted_address;
      //       alert("address = " + address);
      //     } else {
      //       alert("No results found");
      //     }
      //   } else {
      //     alert("Geocoder failed due to: " + status);
      //   }
      // });


    });
  }
}
