import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';

import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  nome:string
  

  produto: Produto = new Produto()
  listaProdutos: Produto[]
 

  constructor(

    private produtoService: ProdutoService   

  ) { }

  ngOnInit( 
    tamanho:number = this.listaProdutos.length
  ){
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