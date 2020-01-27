import { Component, OnInit } from '@angular/core';
import * as fromFilter from '../../filter/filter.actions';
import * as fromTodo from '../../todo/todo.actiones';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filtrosValidos: fromFilter.filtrosValidos[] = ['todos', 'completados', 'pendientes'];

  filtroActual: fromFilter.filtrosValidos;

  pendientes: number;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.contarPendientes(state.todos);
    });
  }

  cambiarFiltro(nuevoFiltro: fromFilter.filtrosValidos) {
    const accion = new fromFilter.SetFiltroActions(nuevoFiltro);

    this.store.dispatch(accion);
  }

  contarPendientes(todos: Todo[]) {
    this.pendientes = todos.filter(todo => !todo.completado).length;
  }

  limpiarCompletados() {
    const accion = new fromTodo.LimpiarCompletados();

    this.store.dispatch(accion);
  }

}
