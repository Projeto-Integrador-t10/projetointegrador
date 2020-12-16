import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nome:string
  
  produto: Produto = new Produto()
  listaProdutos: Produto[]

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
  findAllByName(){
    if(this.nome == ""){
      alert("Preencha a barra antes de pesquisar!")
    } else{
      this.produtoService.getByNameProduto(this.nome).subscribe((resp: Produto[])=>{
        this.listaProdutos = resp
      })
    }
  }
}