import { JsonPipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token')!)
  }

  getAllProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>('https://vendaverde.herokuapp.com/produtos', this.token)
  }

  getByIdProduto(id: number): Observable<Produto>{
    return this.http.get<Produto>(`https://vendaverde.herokuapp.com/produtos/${id}`, this.token)
  }

  getByIdProdutos(id: number) : Observable<Produto>{
    return this.http.get<Produto>(`https://vendaverde.herokuapp.com/produtos/${id}`, this.token)
  }
  getByNameProduto(nome: string): Observable<Produto[]> {
    return this.http.get<Produto[]>(`https://vendaverde.herokuapp.com/produtos/nome/${nome}`, this.token)
  }

  postProduto(produto: Produto) : Observable<Produto[]> {
    return this.http.post<Produto[]>('https://vendaverde.herokuapp.com/produtos', produto, this.token)
  }

  putProduto(produto: Produto) : Observable<Produto>{
    return this.http.put<Produto>('https://vendaverde.herokuapp.com/produtos', produto ,this.token)
  }

  deleteProduto(id: number) {
    return this.http.delete(`https://vendaverde.herokuapp.com/produtos/${id}`, this.token)
  }
}