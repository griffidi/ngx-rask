import { GetEmployeesDocument, type Employee } from '#/app/types/graphql';
import { ChangeDetectionStrategy, Component, inject, signal, type OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Client } from '@ngx-rask/graphql';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatInputModule, MatTableModule],
})
export default class EmployeeList implements OnInit {
  #client = inject(Client);

  protected readonly dataSource = new MatTableDataSource<Employee>();
  protected readonly employees = signal<Employee[]>([]);
  protected readonly displayedColumns = ['firstName', 'lastName', 'email', 'phone', 'gender'];

  async ngOnInit() {
    const { employees } = await this.#client.queryPromise(GetEmployeesDocument);
    this.employees.set(employees as Employee[]);
  }

  protected applyFilter({ target }: Event) {
    const filterValue = (target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
