import { Component, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent{

  dataOne: any;
  dataTwo: any;
  dataThre: any;

  dataFour: any;
  dataSix: any;
  dataSeven: any;

  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;

      this.dataOne = {
        labels: [
          'Bebida',
          'Feijão',
          'Qtd merc. imcompt Consumo',
          'Couro',
          'DIFAL',

          'Vidros',
          'BL CNPJ',
          'Produtores GO',
          'Dist Combustível',
          'Usina SH - ZF',

          'Cigarro',
          'Rem/Exp - Desca',
          'Dest Desca',
          'Comb Susp ',
          'BL-NFE CA',

          'BL-DESV ROTA',
          'BL-Cerveja',
          'BL-Grãos',
          'BL-Bovinos',
          'Combustiveis'
        ],

        datasets: [{
            label: 'Ag. 1a Passagem',
            backgroundColor: colors.infoLight,
            borderWidth: 1,
            data: [
              this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),
              this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random()
            ],
          }, {
            label: 'Enviados',
            backgroundColor: colors.successLight,
            data: [
              this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),
              this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random()
            ],
          },
        ],
      };

      this.dataTwo = {
        labels: [
          'Bebida',
          'Feijão',
          'Qtd merc. imcompt Consumo',
          'Couro',
          'DIFAL',

          'Vidros',
          'BL CNPJ',
          'Produtores GO',
          'Dist Combustível',
          'Usina SH - ZF',

          'Cigarro',
          'Rem/Exp - Desca',
          'Dest Desca',
          'Comb Susp ',
          'BL-NFE CA',

          'BL-DESV ROTA',
          'BL-Cerveja',
          'BL-Grãos',
          'BL-Bovinos',
          'Combustiveis'
        ],

        datasets: [{
            label: 'Com resultado',
            backgroundColor: colors.infoLight,
            borderWidth: 1,
            data: [
              this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),
              this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random()
            ],
          },
          {
            label: 'Sem resultado',
            backgroundColor: colors.successLight,
            data: [
              this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),
              this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random()
            ],
          },
          {
            label: 'Total',
            backgroundColor: colors.dangerLight,
            data: [
              this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),
              this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),
            ],
          },
        ],
      };


      this.dataThre = {
        labels: [
          'Bebida',
          'Feijão',
          'Qtd merc. imcompt Consumo',
          'Couro',
          'DIFAL',

          'Vidros',
          'BL CNPJ',
          'Produtores GO',
          'Dist Combustível',
          'Usina SH - ZF',

          'Cigarro',
          'Rem/Exp - Desca',
          'Dest Desca',
          'Comb Susp ',
          'BL-NFE CA',

          'BL-DESV ROTA',
          'BL-Cerveja',
          'BL-Grãos',
          'BL-Bovinos',
          'Combustiveis'
        ],

        datasets: [{
            label: 'Auto de infração',
            backgroundColor: colors.infoLight,
            borderWidth: 1,
            data: [
              this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),
              this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),
            ],
          },
          {
            label: 'Auto de apreensão',
            backgroundColor: colors.successLight,
            data: [
              this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),
              this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),
            ],
          },

        ],
      };

      this.dataFour = {
        labels: [
          'SEFAZ AGOSTO',
          'FIS AGOSTO',
          'SEFAZ JULHO',
          'FIS JULHO',
          'SEFAZ JUNHO',
          'FIS JUNHO',
        ],

        datasets: [
          {
            label: 'MDF-E',
            backgroundColor: colors.infoLight,
            borderWidth: 1,
            data: [
              this.random(50000), this.random(50000), this.random(50000), this.random(50000), this.random(50000), this.random(50000)
            ],
          },
          {
            label: 'CT-E',
            backgroundColor: colors.dangerLight,
            data: [
              this.random(50000), this.random(50000), this.random(50000), this.random(50000), this.random(50000), this.random(50000)
            ],
          },
          {
            label: 'NF-E',
            backgroundColor: colors.basicLight,
            data: [
              this.random(50000), this.random(50000), this.random(50000), this.random(50000), this.random(50000), this.random(50000)
            ],
          },

        ],
      }

      this.dataSix = {
        labels: [
          'ANTT',
          'AGETOP',
          'CAMIONETES',
        ],

        datasets: [
          {
            label: 'MDF-E',
            backgroundColor: colors.infoLight,
            borderWidth: 1,
            data: [
              this.random(800)
            ],
          },
          {
            label: 'CT-E',
            backgroundColor: colors.dangerLight,
            data: [
              this.random(800)
            ],
          },
          {
            label: 'NF-E',
            backgroundColor: colors.basicLight,
            data: [
              this.random(800)
            ],
          },

        ],
      }

      const cpf =  this.random(250);
      const cnpj =  this.random(250);
      this.dataSeven = {
        labels: [
          'Placas',
          'CPF',
          'CNPJ',
        ],

        datasets: [
          {
            label: 'Placas',
            backgroundColor: colors.infoLight,
            borderWidth: 1,
            data: [ cpf + cnpj ],
          },
          {
            label: 'CPF',
            backgroundColor: colors.dangerLight,
            data: [ cpf  ],
          },
          {
            label: 'CNPJ',
            backgroundColor: colors.basicLight,
            data: [ cnpj   ],
          },

        ],
      }

    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  private random(value: number = 1000) {
    return Math.round(Math.random() * value);
  }

}
