import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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
    this.findAllProdutos()
  }

  cadastrar() {
    if (this.categoria.nome == null) {
      alert('Preencha o campo "Descrição" corretamente')
    } else {
      this.categoriaService.postCategoria(this.categoria).subscribe((resp: any = Categoria) => {
        this.categoria = resp
        alert('Categoria cadastrado com sucesso!')
        this.findAllCategorias()
      })
    }
  }

  findAllCategorias()  {
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

    if (this.produto.nome == null || this.produto.preco == null || this.produto.quantidade == null || this.produto.estoque == null) {
      alert("Preencha todos os campos")
    } else {
      this.produtoService.postProduto(this.produto).subscribe((resp: any = Produto) => {
        this.produto = resp
        this.produto = new Produto()
        this.router.navigate(["/cadastro-produto"])
        alert("Produto cadastrado com sucesso!")
        this.findAllProdutos()
      })
    }
  }

  findAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
      console.log(this.listaProdutos)
    })
  }
}