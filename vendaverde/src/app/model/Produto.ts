
import { Categoria } from './Categoria'

export class Produto {
    public id: number
    public nome: string
    public preco: number
    public quantidade: number
    public estoque: boolean
    public doacao: string
    public categoria: Categoria 
}