import { Directive, inject, type OnInit } from '@angular/core';
import { RkSelect } from '@ngx-rask/components';
import { DepartmentService } from '../../common';

@Directive({
  selector: '[appDepartmentSelectOptions]',
  standalone: true,
  providers: [DepartmentService],
})
export class DepartmentSelectOptionsDirective implements OnInit {
  #select = inject(RkSelect);
  #departmentService = inject(DepartmentService);

  async ngOnInit() {
    this.#select.placeholder = 'Select...';

    const departments = await this.#departmentService.getDepartments();
    this.#select.options = departments.map(({ id, name }) => ({ id, label: name }));
  }
}
