import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../model/Produto';
import { AlertasService } from '../service/alertas.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  produto:Produto = new Produto()

  prodId:number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    public alert: AlertasService
  ) { }

  ngOnInit(){
    this.prodId = this.route.snapshot.params["id"],
    this.findByIdProduto(this.prodId)
  }

  findByIdProduto(idProd: number) {
    this.produtoService.getByIdProdutos(idProd).subscribe((resp: any = Produto) => {
      this.produto = resp
    })
  }

  doar(){
    this.alert.showAlertSuccess("Doado com sucesso")
    this.router.navigate(['/home']) 
  }
  
  compra(){
    this.alert.showAlertSuccess("Comprado com sucesso")
    this.router.navigate(['/home']) 
  } 

  carrinho(){
    this.alert.showAlertSuccess("Adicionado com sucesso")
    this.router.navigate(['/home']) 
  } 

}
