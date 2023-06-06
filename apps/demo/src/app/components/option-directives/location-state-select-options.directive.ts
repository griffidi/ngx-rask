import { LocationStateService } from '#/app/common/services';
import { Directive, inject, type OnInit } from '@angular/core';
import { RkSelect } from '@ngx-rask/components';

@Directive({
  selector: '[appLocationStateSelectOptions]',
  standalone: true,
  providers: [LocationStateService],
})
export class LocationStateSelectOptionsDirective implements OnInit {
  #select = inject(RkSelect);
  #service = inject(LocationStateService);

  async ngOnInit() {
    this.#select.label = 'State';

    const results = await this.#service.getLocationStates();
    this.#select.options = results.map(({ id, name }) => ({ id, label: name }));
  }
}
