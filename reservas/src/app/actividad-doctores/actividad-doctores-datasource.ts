import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface ActividadDoctoresItem {
  especialidad:string;
  turno:string;
  nombre: string;
  ci: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: ActividadDoctoresItem[] = [
  {ci: 1, nombre: 'Hydrogen', turno:'noche', especialidad:'Medico General '},
  {ci: 2, nombre: 'Helium', turno:'noche', especialidad:'Medico General '},
  {ci: 3, nombre: 'Lithium', turno:'noche', especialidad:'Medico General '},
  {ci: 4, nombre: 'Beryllium', turno:'noche', especialidad:'Medico General '},
  {ci: 5, nombre: 'Boron', turno:'noche', especialidad:'Medico General '},
  {ci: 6, nombre: 'Carbon', turno:'noche', especialidad:'Medico General '},
  {ci: 7, nombre: 'Nitrogen', turno:'noche', especialidad:'Medico General '},
  {ci: 8, nombre: 'Oxygen', turno:'noche', especialidad:'Medico General '},
  {ci: 9, nombre: 'Fluorine', turno:'noche', especialidad:'Medico General '},
  {ci: 10, nombre: 'Neon', turno:'noche', especialidad:'Medico General '},
  {ci: 11, nombre: 'Sodium', turno:'noche', especialidad:'Medico General '},
  {ci: 12, nombre: 'Magnesium', turno:'noche', especialidad:'Medico General '},
  {ci: 13, nombre: 'Aluminum', turno:'noche', especialidad:'Medico General '},
  {ci: 14, nombre: 'Silicon', turno:'noche', especialidad:'Medico General '},
  {ci: 15, nombre: 'Phosphorus', turno:'noche', especialidad:'Medico General '},
  {ci: 16, nombre: 'Sulfur', turno:'noche', especialidad:'Medico General '},
  {ci: 17, nombre: 'Chlorine', turno:'noche', especialidad:'Medico General '},
  {ci: 18, nombre: 'Argon', turno:'noche', especialidad:'Medico General '},
  {ci: 19, nombre: 'Potassium', turno:'noche', especialidad:'Medico General '},
  {ci: 20, nombre: 'Calcium', turno:'noche', especialidad:'Medico General '},
];

/**
 * Data source for the ActividadDoctores view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ActividadDoctoresDataSource extends DataSource<ActividadDoctoresItem> {
  data: ActividadDoctoresItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ActividadDoctoresItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: ActividadDoctoresItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ActividadDoctoresItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'nombre': return compare(a.nombre, b.nombre, isAsc);
        case 'ci': return compare(+a.ci, +b.ci, isAsc);
        case 'turno': return compare(+a.turno, +b.turno, isAsc);
        case 'especialidad': return compare(+a.especialidad, +b.especialidad, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
