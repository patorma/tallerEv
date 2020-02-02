import { Component, OnInit ,Input} from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PokemonIdServiceService } from '../../services/pokemon-id-service.service';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {
 // @Input() indice: any;
  pokemonId: any;
  title = 'Hola a todos!';
  lista = [];

  title2: Persona = {
    nombre: 'Mauricio',
    apellido: 'Ibañez',
    seleccionado: true
  };

  saludo = 'Hola Mauricio';
  mensajeDeHijo: string;

  //se inyecta el objeto rutaActiva de la clase ActivatedRoute es como un @Autowired
  constructor(private pokemonService: PokemonIdServiceService, private rutaActiva: ActivatedRoute ) {
    // this.pokemonId = this.rutaActiva.snapshot.paramMap.get('id');
     }

  ngOnInit() {
    this.rutaActiva.params.subscribe(params =>{
      let id = params['id']
      if(id){
        this.pokemonService.getPokemonById(id).subscribe(res =>{
          console.log('hola');
          console.log(res);
         this.lista = res.abilities;
        })
      }
    })
   
    // this.pokemonService.getPokemonById(this.pokemonId ).subscribe(res =>{
    //   console.log('hola');
    //   console.log(res);
    //  this.lista = res.abilities;
    // })
  }

  imprimirMensaje(msg: string) {
    this.mensajeDeHijo = msg;
  }

}
