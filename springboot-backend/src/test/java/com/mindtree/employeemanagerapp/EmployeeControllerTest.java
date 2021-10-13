package com.mindtree.employeemanagerapp;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Arrays;
import java.util.List;

import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;


import com.mindtree.employeemanagerapp.controller.EmployeeController;
import com.mindtree.employeemanagerapp.model.Employee;
import com.mindtree.employeemanagerapp.service.EmployeeService;

@ExtendWith(SpringExtension.class)
@WebMvcTest(EmployeeController.class)
public class EmployeeControllerTest {

	@MockBean
	EmployeeService employeeService;

	@Autowired
	MockMvc mockMvc;

	@Test
	public void testfindAll() throws Exception {
		Employee employee = new Employee("rakshit", "kumar" ,"rakesh@gmail.com");
		Employee employee2 = new Employee("somen", "biswal" ,"somen@gmail.com");
		Employee employee3 = new Employee("rohit", "raj" ,"rohit@gmail.com");
		Employee employee4 = new Employee("rajesh", "Ghosh" ,"rahul@gmail.com");
		List<Employee> employees = Arrays.asList(employee,employee2,employee3,employee4);

		Mockito.when(employeeService.getAllEmployees()).thenReturn(employees);

		mockMvc.perform(get("/api/v1/employees"))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$", Matchers.hasSize(4)))
				.andExpect(jsonPath("$[0].firstName", Matchers.is("rakshit")))
				.andExpect(jsonPath("$[1].firstName", Matchers.is("somen")))
				.andExpect(jsonPath("$[2].firstName", Matchers.is("rohit")))
				.andExpect(jsonPath("$[3].firstName", Matchers.is("rahul")))
				;
	}

}