import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EmployeeDetailsComponent } from './employee-details.component';
import { EmployeeService } from './../employee.service';

describe('EmployeeDetailsComponent', () => {
  let employeeService:EmployeeService;
  let component: EmployeeDetailsComponent;
  let fixture: ComponentFixture<EmployeeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers:[EmployeeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have employeeDetails function',()=>{
    const service:EmployeeService=TestBed.get(employeeService);
    expect(service.getEmployeeById).toBeTruthy();
  })
});
