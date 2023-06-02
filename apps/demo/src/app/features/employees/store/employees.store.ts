import type { Employee } from '#/app/types/graphql';
import { computed, inject } from '@angular/core';
import {
  signalStore,
  withComputed,
  withEffects,
  withHooks,
  withState,
  withUpdaters,
  type SignalStoreUpdate,
} from '@ngx-rask/signal-store';
import { initialEmployeesState, type EmployeesState } from '../shared/models';
import { EmployeesService } from '../shared/services';

export const EmployeesStore = signalStore(
  { providedIn: 'root' },
  withState<EmployeesState>(initialEmployeesState),
  withComputed(({ employees, selectedEmployeeId }) => ({
    selectedEmployee: computed(() =>
      employees().find(({ id }: Employee) => id === selectedEmployeeId())
    ),
  })),
  withUpdaters(({ update }: SignalStoreUpdate<EmployeesState>) => ({
    setSelectedEmployeeId: (selectedEmployeeId: string) => update({ selectedEmployeeId }),
  })),
  withEffects(({ update }: SignalStoreUpdate<EmployeesState>) => ({
    async loadEmployees() {
      const service = inject(EmployeesService);
      update({ loading: true });
      const employees = await service.getEmployees();
      update({ loading: false, employees });
    },
  })),
  withHooks({
    onInit: ({ loadEmployees }) => loadEmployees(),
  })
);
