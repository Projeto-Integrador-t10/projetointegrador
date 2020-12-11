import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-delete-produtos',
  templateUrl: './delete-produtos.component.html',
  styleUrls: ['./delete-produtos.component.css']
})
export class DeleteProdutosComponent implements OnInit {

  produto: Produto = new Produto() 

  listaProdutos: Produto[]
 

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){

    window.scroll(0,0)
    let id: number = this.route.snapshot.params["id"]
    this.findByIdProduto(id)
    this.findAllProdutos()
  }

  findByIdProduto(id: number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp
    })
  }

  btnSim() {
    this.produtoService.deleteProduto(this.produto.id).subscribe(() => {
      this.router.navigate(['/cadastro-produto'])
      alert('Produto apagado com sucesso!!')
      this.findAllProdutos()
    })
  }

  btnNao() {
    this.router.navigate(['/cadastro-produto'])
  }

  findAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp      
    })
  }
}