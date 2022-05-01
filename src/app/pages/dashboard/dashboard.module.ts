import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../@theme/theme.module';
import { ChartsRoutingModule } from '../charts/charts-routing.module';
import { BarChartComponent } from './chart/bar-chart/bar-chart.component';
import { DashboardComponent } from './dashboard.component';
import { GraficosComponent } from './graficos/graficos.component';
import { BarChartVerficalComponent } from './chart/bar-chart-verfical/bar-chart-verfical.component';
import { PieChartComponent } from './chart/pie-chart/pie-chart.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,

    ChartsRoutingModule,
    NgxEchartsModule,
    NgxChartsModule,
    ChartModule,
  ],
  declarations: [
    DashboardComponent,
    GraficosComponent,
    BarChartComponent,
    BarChartVerficalComponent,
    PieChartComponent,
  ],
})
export class DashboardModule { }
