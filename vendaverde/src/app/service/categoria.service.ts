import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token')!)
  }

  getAllCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>('http://localhost:8080/categoria', this.token)
  }

  getByIdCategoria(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`http://localhost:8080categoria/${id}`, this.token)
  }
  postCategoria(categoria: Categoria) {
    return this.http.post('http://localhost:8080/categoria', categoria, this.token)
  }

  putCategoria(categoria: Categoria) {
    return this.http.put('http://localhost:8080/categoria', categoria, this.token)
  }

  deleteCategoria(id: number){
    return this.http.delete<Categoria>(`http://localhost:8080/categoria/${id}`, this.token)
  }
}