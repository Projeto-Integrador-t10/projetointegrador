import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../model/Produto';
import { AlertasService } from '../service/alertas.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-doar',
  templateUrl: './doar.component.html',
  styleUrls: ['./doar.component.css']
})
export class DoarComponent implements OnInit {

  produto: Produto = new Produto()

  prodId:number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    public alert: AlertasService
  ) { }

  ngOnInit(){   
  }

  doar(){
    this.alert.showAlertSuccess("Produto doado com sucesso")
    this.router.navigate(['/home']) 
  }  
}