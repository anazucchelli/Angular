import { Component, OnInit } from '@angular/core';
import { Tarefa } from "../../models/Tarefa";

@Component({
  selector: 'app-lista-de-tarefas',
  templateUrl: './lista-de-tarefas.component.html',
  styleUrls: ['./lista-de-tarefas.component.css']
})
export class ListaDeTarefasComponent implements OnInit {


  lista:Tarefa[] = [];

  constructor() { 
  this.lista.push(new Tarefa("Cozinhar Feijão", false));
  this.lista.push(new Tarefa("Fazer pudim", false));
  this.lista.push(new Tarefa("Fazer frango assado", true));
  }
  
  ngOnInit(): void {
  }

}
