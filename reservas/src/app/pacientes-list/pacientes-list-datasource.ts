import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

import { PacientesService } from '../services/pacientes.service';

// TODO: Reemplace esto con su propio tipo de modelo de datos
export interface PacientesListItem {
  id: string;
  usuario: string;
  email: string;
  orgVenta: number;
}
const data = [{id:"",usuario:"",email:"",orgVenta:123}];
// TODO: Reemplaza esto con datos reales de tu aplicación.
const PACIENTES: PacientesListItem[] = data//[{id:"",usuario:"",email:"",orgVenta:123}]

/**
 * 
 *   this.pacientesService.getGames().subscribe(
    res => {
        this.pacient = res;      
    },
    err => console.log(err)
  );
 * Fuente de datos para la vista PacientesList. Esta clase debe
 * encapsular toda la lógica para obtener y manipular los datos mostrados
 * (incluyendo clasificación, paginación y filtrado). 
 * private pacientesService: PacientesService
*/
export class PacientesListDataSource extends DataSource<PacientesListItem> {
  data: PacientesListItem[] = PACIENTES;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

/**
* Conectar esta fuente de datos a la tabla. La tabla solo se actualizará cuando
* El flujo devuelto emite nuevos elementos.
* @returns Una secuencia de los elementos a ser renderizados.
*/
  connect(): Observable<PacientesListItem[]> {
    // Combina todo lo que afecta a los datos renderizados en una actualización
    // flujo para la tabla de datos para consumir.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

  // Establecer la longitud del paginador
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
  * Llamado cuando la tabla está siendo destruida. Usa esta función, para limpiar
  * cualquier conexión abierta o libre de los recursos retenidos que se configuraron durante la conexión.
  */
  disconnect() {}

  /**
  * Pagina los datos (del lado del cliente). Si está utilizando la paginación del lado del servidor,
  * esto sería reemplazado solicitando los datos apropiados del servidor.
  */
  private getPagedData(data: PacientesListItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**   
   * Ordenar los datos (del lado del cliente). Si está utilizando la clasificación del lado del servidor,
   * esto sería reemplazado solicitando los datos apropiados del servidor.
   */
  private getSortedData(data: PacientesListItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'usuario': return compare(a.usuario, b.usuario, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'email': return compare(+a.email, +b.email, isAsc);
        default: return 0;
      }
    });
  }
}

/** Comparador de clasificación simple, por ejemplo, columnas de ID / Nombre (para la clasificación del lado del cliente). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
