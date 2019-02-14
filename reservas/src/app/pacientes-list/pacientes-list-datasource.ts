import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

import { PacientesService } from '../services/pacientes.service';

// TODO: Reemplace esto con su propio tipo de modelo de datos
export interface PacientesListItem {
  id: string;
  Usuario: string;
  Email: string;
  OrgVenta: number;
}


const data = [
  {id:"11111",Usuario:"LIMIN",Email:"INGLIM@gmail.com",OrgVenta:2000},
  {id:"12345",Usuario:"JALCON",Email:"jalcon@gmail.com",OrgVenta:2000},
  {id:"40c853b9-0aa8-11e9-82a4-00155d01cb0e",Usuario:"FPACAJES",Email:"fpacajes@hansa.com.bo",OrgVenta:1100},
  {id:"40c856f4-0aa8-11e9-82a4-00155d01cb0e",Usuario:"ARAMOS",Email:"aramos@hansa.com.bo",OrgVenta:1100},
  {id:"40c85805-0aa8-11e9-82a4-00155d01cb0e",Usuario:"MORELLANA",Email:"morellana@hansa.com.bo",OrgVenta:1100},
  {id:"72a3bbf2-09f1-11e9-82a4-00155d01cb0e",Usuario:"LALCON",Email:"lalcon@hansa.com.bo",OrgVenta:1200},
  {id:"72a3be7a-09f1-11e9-82a4-00155d01cb0e",Usuario:"ARAMOS",Email:"aramos@hansa.com.bo",OrgVenta:1200},
  {id:"72a3bee8-09f1-11e9-82a4-00155d01cb0e",Usuario:"MORELLANA",Email:"morellana@hansa.com.bo",OrgVenta:99},
  {id:"b0ccbc10-0a1d-11e9-82a4-00155d01cb0e",Usuario:"FPACAJES",Email:"fpacajes@hansa.com.bo",OrgVenta:1200}];
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
        case 'Usuario': return compare(a.Usuario, b.Usuario, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'Email': return compare(+a.Email, +b.Email, isAsc);
        case 'OrgVenta': return compare(+a.OrgVenta, +b.OrgVenta, isAsc);
        default: return 0;
      }
    });
  }
}

/** Comparador de clasificación simple, por ejemplo, columnas de ID / Nombre (para la clasificación del lado del cliente). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
