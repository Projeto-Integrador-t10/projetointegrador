import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  produto: Produto = new Produto()
  listaProdutos: Produto[]
  nome: string

  constructor(
    
    private produtoService: ProdutoService
  ) { }

  ngOnInit(){
    window.scroll(0, 0),
    this.findAllProdutos()
  }
  findAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
      console.log(this.listaProdutos)
    })
  }
}