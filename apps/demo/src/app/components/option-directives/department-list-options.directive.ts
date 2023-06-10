import { DepartmentService } from '#/app/common/services';
import { Directive, inject, type OnInit } from '@angular/core';
import { RkSelectionList } from '@ngx-rask/components';

@Directive({
  selector: '[appDepartmentListOptions]',
  standalone: true,
  providers: [DepartmentService],
})
export class DepartmentListOptionsDirective implements OnInit {
  #list = inject(RkSelectionList);
  #departmentService = inject(DepartmentService);

  async ngOnInit() {
    const departments = await this.#departmentService.getDepartments();
    this.#list.options = departments.map(({ id, name }) => ({ id, label: name }));
  }
}
