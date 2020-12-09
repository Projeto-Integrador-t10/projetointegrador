import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    this.findAllCategorias()
    this.findByIdCategoria()
  }

  findAllCategorias() {
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
      console.log("Lista de categorias" + JSON.stringify(this.listaCategorias))
    })
  }
  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.categoria.id).subscribe((resp: any = Categoria) => {
      this.categoria = resp;
    })
  }
  salvarProduto() {
    this.categoria.id = this.idCategoria

    this.produtoService.postProduto(this.produto).subscribe((resp: any = Produto) => {
      this.produto = resp
      this.produto = new Produto()
    })

  }


}
