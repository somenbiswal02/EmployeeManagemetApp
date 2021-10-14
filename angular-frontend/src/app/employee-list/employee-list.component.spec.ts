import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeService } from './../employee.service';
import { of } from 'rxjs';

describe('EmployeeListComponent', () => {
  let employeeService: EmployeeService
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeListComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers:[EmployeeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('all', () => {
    it('should return a collection of users', () => {
      const userResponse = [
        {
          id: 1,
          firstName: 'Jane',
          lastName: 'Designer',
          emailId: 'Blastoise'
        }
         ];
      let response:any;
      spyOn(employeeService, 'getEmployeesList').and.returnValue(of(userResponse));

      employeeService.getEmployeesList().subscribe(res => {
        response = res;
      });

      expect(response).toEqual(userResponse);
    });
  });
});
