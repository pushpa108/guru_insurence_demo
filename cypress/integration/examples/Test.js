/// <reference types="Cypress" />

describe('suite',function(){
    it('Testcase Login',function(){
        //login
        cy.visit("https://demo.guru99.com/insurance/v1/index.php")
        cy.get('#email').type('type email')
        cy.get('#password').type('type password')
        cy.get("input[type='submit']").click() 
    })
    it('Testcase Register',function(){
        //Register 
        cy.visit("https://demo.guru99.com/insurance/v1/index.php")
        cy.get("a.btn.btn-default").click()
        cy.get("form[id='new_user'] select[id='user_title']").select("Miss").should('have.value','Miss')
        cy.get('#user_firstname').type("Pushpa")
        cy.get('#user_surname').type("Ram")
        cy.get('#user_phone').type("123456789")
        cy.get("form[id='new_user'] select[id='user_dateofbirth_1i']").select("1995").should('have.value','1995')
        cy.get("form[id='new_user'] select[id='user_dateofbirth_2i']").select("October").should('have.value','10')
        cy.get("form[id='new_user'] select[id='user_dateofbirth_3i']").select("23").should('have.value','23')
        cy.get('#licencetype_f').check().should('be.checked')
        cy.get("form[id='new_user'] select[id='user_licenceperiod']").select("2").should('have.value','2')
        cy.get("form[id='new_user'] select[id='user_occupation_id']").select("Doctor").should('have.value','4')
        cy.get('#user_address_attributes_street').type('Tenali')
        cy.get('#user_address_attributes_city').type('Tenali')
        cy.get('#user_address_attributes_county').type('India')
        cy.get('#user_address_attributes_postcode').type('522202')
        cy.get('#user_user_detail_attributes_email').type("pushpa.ramanadham@gmail.com")
        cy.get('#user_user_detail_attributes_password').type("Radha@9492")
        cy.get('#user_user_detail_attributes_password_confirmation').type("Radha@9492")
        cy.get('[name="submit"]').click()
            
    })
    it('Request Quotation',function(){
        //login
        cy.visit("https://demo.guru99.com/insurance/v1/index.php")
        cy.get('#email').type('pushpa.ramanadham@gmail.com')
        cy.get('#password').type('Radha@9492')
        cy.get("input[type='submit']").click() 

        cy.get('#ui-id-2', { timeout: 10000 }).should('be.visible');
        
        cy.get('#ui-id-2').click()
        cy.get('#quotation_breakdowncover').select("No cover").should('have.value','No cover')
        cy.get('#quotation_windscreenrepair_t').check().should('be.checked')
        cy.get('#quotation_incidents').type('checking Incident')
        cy.get('#quotation_vehicle_attributes_registration').type('Registration')
        cy.get('#quotation_vehicle_attributes_mileage').type("20")
        cy.get('#quotation_vehicle_attributes_value').type("Vechicle value 200Rs")
        cy.get('#quotation_vehicle_attributes_parkinglocation').select("Locked Garage").should('have.value','Garage')
        cy.get('#quotation_vehicle_attributes_policystart_1i').select("2023").should('have.value','2023')
        cy.get('#quotation_vehicle_attributes_policystart_2i').select("October").should('have.value','10')
        cy.get('#quotation_vehicle_attributes_policystart_3i').select("1").should('have.value','1')
        cy.get('#new_quotation > .actions > .btn-success').click();  
    })
    it('Retrieve Quotation',function(){        
        cy.visit("https://demo.guru99.com/insurance/v1/index.php")
        cy.get('#email').type('pushpa.ramanadham@gmail.com')
        cy.get('#password').type('Radha@9492')
        cy.get("input[type='submit']").click() 
        
        
        cy.get('#ui-id-3', { timeout: 10000 }).should('be.visible');
        cy.get('#ui-id-3').click()
        cy.get('form > [type="text"]').type("22822")
        cy.get('#getquote').click();


}
)
it('Profile',function(){        
        cy.visit("https://demo.guru99.com/insurance/v1/index.php")
        cy.get('#email').type('pushpa.ramanadham@gmail.com')
        cy.get('#password').type('Radha@9492')
        cy.get("input[type='submit']").click() 
        cy.get('#ui-id-4', { timeout: 10000 }).should('be.visible');
        cy.get('#ui-id-4').click()
    
    
    }
    )

it('Edit Profile',function(){        
        cy.visit("https://demo.guru99.com/insurance/v1/index.php")
        cy.get('#email').type('pushpa.ramanadham@gmail.com')
        cy.get('#password').type('Radha@9492')
        cy.get("input[type='submit']").click() 
        cy.get('#ui-id-5', { timeout: 10000 }).should('be.visible');
        cy.get('#ui-id-5').click()
        cy.get('#user_title').select("Miss").should('have.value','Miss')
        cy.get('#user_surname').type("PushpaRam")
        cy.get('#user_firstname').type("Rama")
        cy.get('#user_phone').type("123456789")
        cy.get('#user_dateofbirth_1i').select("1995").should('have.value','1995')
        cy.get('#user_dateofbirth_2i').select("October").should('have.value','10')
        cy.get('#user_dateofbirth_3i').select("23").should('have.value','23')
        cy.get('#user_licencetype_f').check().should('be.checked')
        cy.get('#user_licenceperiod').select("2").should('have.value','2')
        cy.get('#user_occupation_id').select("Doctor").should('have.value','4')
        cy.get('#user_address_attributes_street').type('Tenali')
        cy.get('#user_address_attributes_city').type('Tenali')
        cy.get('#user_address_attributes_county').type('India')
        cy.get('#user_address_attributes_postcode').type('522202')
        cy.get('#edit_user_ > .actions > .btn').click()
    
    }
    )
it('Logout',function(){        
        cy.visit("https://demo.guru99.com/insurance/v1/index.php")
        cy.get('#email').type('pushpa.ramanadham@gmail.com')
        cy.get('#password').type('Radha@9492')
        cy.get("input[type='submit']").click() 
        //cy.wait(4000)
        cy.get('.button_to > .btn').click()
    }
    )

})