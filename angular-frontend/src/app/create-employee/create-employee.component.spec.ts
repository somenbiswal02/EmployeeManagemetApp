import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CreateEmployeeComponent } from './create-employee.component';
import { EmployeeService } from './../employee.service';

describe('CreateEmployeeComponent', () => {
  let employeeService:EmployeeService;
  let component: CreateEmployeeComponent;
  let fixture: ComponentFixture<CreateEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEmployeeComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers:[EmployeeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have createEmployee function',()=>{
    const service:EmployeeService=TestBed.get(employeeService);
    expect(service.createEmployee).toBeTruthy();
  })
});
