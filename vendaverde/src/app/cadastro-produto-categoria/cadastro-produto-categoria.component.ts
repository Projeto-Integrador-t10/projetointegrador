import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-cadastro-produto-categoria',
  templateUrl: './cadastro-produto-categoria.component.html',
  styleUrls: ['./cadastro-produto-categoria.component.css']
})
export class CadastroProdutoCategoriaComponent implements OnInit {

  produto: Produto = new Produto()
  listaProdutos: Produto[]

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria: number

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {
  }

  salvarProduto() {
    this.categoria.id = this.idCategoria

    this.produtoService.postProduto(this.produto).subscribe((resp: any = Produto) => {
      this.produto = resp
      this.produto = new Produto()
    })
    console.log(this.produto)
  }

/*   findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) => {
      this.categoria = resp;
    })
  }
 */
}
