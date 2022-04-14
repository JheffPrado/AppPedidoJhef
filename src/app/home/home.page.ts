import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public categorias = [
    { codigo: 1, nome: 'Pizzas'    },
    { codigo: 2, nome: 'Burguers'  },
    { codigo: 3, nome: 'Assados'   },
    { codigo: 4, nome: 'Cachorrão' }
  ]

  public slideOpts = {
    slidesPerView: 2
  }

  public produtos = [
    { codigo: 1, categoria: 3, descricao: 'Pastel dos deuses ', nome: 'Pastel de Chocolate',         valor: 5.50, imagens: ['PastelChocolate.jpg'], visibled: false },
    { codigo: 2, categoria: 3, descricao: 'Pastel dos deuses ', nome: 'Coxinha de Frango',            valor: 5.00, imagens: ['CoxinhaFrango.png'], visibled: false },
    { codigo: 3, categoria: 3, descricao: 'Pastel dos deuses ', nome: 'Pastel de Frango', valor: 6.00, imagens: ['PastelFrango.jpg'], visibled: false },
    { codigo: 6, categoria: 1, descricao: 'Pizza dos deuses ', nome: 'Pedaço de Pizza',         valor: 7.00, imagens: ['pedacopizza.jpg' ], visibled: false },
    { codigo: 7, categoria: 1, descricao: 'Pizza dos deuses ', nome: 'Pizza Calabresa',        valor: 26.00, imagens: ['pizzaCalabresa.jpg' ], visibled: false },
    { codigo: 8, categoria: 1, descricao: 'Pizza dos deuses ', nome: 'Pizza Fina',         valor: 55.90, imagens: ['pizzafina.jpg' ], visibled: false },
    { codigo: 10, categoria: 2, descricao: 'Hamburguer dos deuses ', nome: 'Burguer Cheeseburger',      valor: 14.00, imagens: ['BurguerCheeseburger.png' ], visibled: false },
    { codigo: 11, categoria: 2, descricao: 'Hamburguer dos deuses', nome: 'Hamburger Big King',     valor: 16.00, imagens: ['HamburgerBigKing.jpg' ], visibled: false },
    { codigo: 12, categoria: 2, descricao: 'Hamburguer dos deuses', nome: 'hamburguer Family',       valor: 18.00, imagens: ['hamburguerFamily.png' ], visibled: false },
    { codigo: 13, categoria: 4, descricao: 'Cachorro Quente dos deuses', nome: 'Cachorro Quente Comum',                    valor: 10.00, imagens: ['CachorroComum.png' ], visibled: false },
    { codigo: 14, categoria: 4, descricao: 'Cachorro Quente dos deuses', nome: 'Cachorro Quente Gourmet',                      valor: 12.00, imagens: ['CachorroQuenteGourmet.jpg' ], visibled: false },
    { codigo: 15, categoria: 4, descricao: 'Cachorro Quente dos deuses', nome: 'Combo Dois Cachorros',        valor: 18.00, imagens: ['ComboDoisCachorros.jpg' ], visibled: false }
  ]

  public pathImgs = '../../assets/img/';

  public selected = 0;

  constructor(private navCtrl: NavController) {
    this.setSelected(1);
  }

  public formataValor(valor) {
    let retorno = "";
    
    let formatar = Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    retorno = formatar.format(valor)
    retorno = "R$ " + retorno;

    return retorno;
  }

  public setSelected(codigoCategoria) {
    this.selected = codigoCategoria;

    this.produtos.map(el => el.visibled = false);

    this.produtos
    .filter(el => el.categoria == this.selected)
    .map(el => el.visibled = true);
  }

  public goProduto(produto) {
    this.navCtrl.navigateForward('produto', {
      queryParams: { produto: produto }
    });
  }

}
