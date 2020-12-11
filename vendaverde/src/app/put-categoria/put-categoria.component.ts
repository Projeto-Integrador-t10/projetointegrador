import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-put-categoria',
  templateUrl: './put-categoria.component.html',
  styleUrls: ['./put-categoria.component.css']
})
export class PutCategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria: number

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    let id: number = this.route.snapshot.params["id"]
    this.findByIdCategoria(id)
  }

  findByIdCategoria (id: number) {
    this.categoriaService.getByIdCategoria(id).subscribe((resp: any = Categoria) => {
      this.categoria = resp;
    })
  }

  salvar() {
    this.categoriaService.putCategoria(this.categoria).subscribe((resp: any = Categoria) => {
      this.categoria = resp
      this.router.navigate(['/cadastro-produto'])
      alert('Tema atualizado com sucesso!')
    })
  }
}