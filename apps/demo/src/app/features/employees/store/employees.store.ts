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
import { initialEmployeesState, type EmployeeFilter, type EmployeesState } from '../shared/models';
import { EmployeesService } from '../shared/services';

export const EmployeesStore = signalStore(
  { providedIn: 'root' },
  withState<EmployeesState>(initialEmployeesState),
  withComputed(({ employees, selectedEmployeeId, query }) => ({
    selectedEmployee: computed(() =>
      employees().find(({ id }: Employee) => id === selectedEmployeeId())
    ),
    filteredEmployees: computed(() => {
      const { departmentIds } = query();

      if (departmentIds.length) {
        return employees().filter(({ departmentId }) => departmentIds.includes(departmentId));
      }

      return employees();
    }),
  })),
  withComputed(({ query }) => ({
    filter: computed(() => query()),
  })),
  withUpdaters(({ update }: SignalStoreUpdate<EmployeesState>) => ({
    setSelectedEmployeeId: (selectedEmployeeId: string) => update({ selectedEmployeeId }),
    setFilter: (query: EmployeeFilter) => update({ query }),
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
