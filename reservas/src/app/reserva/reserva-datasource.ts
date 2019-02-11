import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface ReservaItem {
  name: string;
  id: number;
  especialidad:string;
  doctor:string;
  fecha:string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: ReservaItem[] = [
  {id: 1, name: 'Hydrogen', especialidad:'Medico General', doctor:'Lionel Alcon', fecha:'02/12/2019'},
  {id: 2, name: 'Helium', especialidad:'Medico General', doctor:'Lionel Alcon', fecha:'02/12/2019'},
  {id: 3, name: 'Lithium', especialidad:'Medico General', doctor:'Lionel Alcon', fecha:'02/12/2019'},
  {id: 4, name: 'Beryllium', especialidad:'Medico General', doctor:'Lionel Alcon', fecha:'02/12/2019'},
  {id: 5, name: 'Boron', especialidad:'Medico General', doctor:'Lionel Alcon', fecha:'02/12/2019'},
  {id: 6, name: 'Carbon', especialidad:'Medico General', doctor:'Lionel Alcon', fecha:'02/12/2019'},
  {id: 7, name: 'Nitrogen', especialidad:'Medico General', doctor:'Lionel Alcon', fecha:'02/12/2019'},
  {id: 8, name: 'Oxygen', especialidad:'Medico General', doctor:'Lionel Alcon', fecha:'02/12/2019'},
  {id: 9, name: 'Fluorine', especialidad:'Medico General', doctor:'Lionel Alcon', fecha:'02/12/2019'},
  {id: 10, name: 'Neon', especialidad:'Medico General', doctor:'Lionel Alcon', fecha:'02/12/2019'},
  {id: 11, name: 'Sodium', especialidad:'Medico General', doctor:'Lionel Alcon', fecha:'02/12/2019'},
  {id: 12, name: 'Magnesium', especialidad:'Medico General', doctor:'Lionel Alcon', fecha:'02/12/2019'},
  {id: 13, name: 'Aluminum', especialidad:'Medico General', doctor:'Lionel Alcon', fecha:'02/12/2019'},
  {id: 14, name: 'Silicon', especialidad:'Medico General', doctor:'Lionel Alcon', fecha:'02/12/2019'},
  {id: 15, name: 'Phosphorus', especialidad:'Medico General', doctor:'Lionel Alcon', fecha:'02/12/2019'},
  {id: 16, name: 'Sulfur', especialidad:'Medico General', doctor:'Lionel Alcon', fecha:'02/12/2019'},
  {id: 17, name: 'Chlorine', especialidad:'Medico General', doctor:'Lionel Alcon', fecha:'02/12/2019'},
  {id: 18, name: 'Argon', especialidad:'Medico General', doctor:'Lionel Alcon', fecha:'02/12/2019'},
  {id: 19, name: 'Potassium', especialidad:'Medico General', doctor:'Lionel Alcon', fecha:'02/12/2019'},
  {id: 20, name: 'Calcium', especialidad:'Medico General', doctor:'Lionel Alcon', fecha:'02/12/2019'},
];

/**
 * Data source for the Reserva view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ReservaDataSource extends DataSource<ReservaItem> {
  data: ReservaItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ReservaItem[]> {
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
  private getPagedData(data: ReservaItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ReservaItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'especialidad': return compare(+a.especialidad, +b.especialidad, isAsc);
        case 'doctor': return compare(+a.doctor, +b.doctor, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
