import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseURL = 'http://localhost:8080/api/v1/employees';

  constructor(private http: HttpClient) {}

  getEmployeesList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee: Employee): Observable<Object> {
    return this.http.post(`${this.baseURL}`, employee);
  }

  getEmployeeById(id: string): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseURL}/${id}`);
  }
  updateEmployee(id: string, employee: Employee): Observable<Object> {
    return this.http.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id: string): Observable<Object> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
