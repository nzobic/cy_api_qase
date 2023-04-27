describe('API QASE Tests', () => {

  it('post-request: Create New Project', () => {

    cy.request({
      method: "POST",
      url: "https://api.qase.io/v1/project",
      headers:{
        Token: "176f27f11d53996090b2aa3a8826cf681d4fb2379f2a7e79701c751588b4f51d",
        accept: "application/json",
        "content-type": "application/json"
      },
      body: {
        title: "API Project",
        code: "API",
      }
    }).then(response => {
        expect(response.status).eq(200)
        expect(response.body.result.code).eq("API")
      })
  })


  it('post-request: Create New Suite', () => {

    cy.request({
      method: "POST",
      url: "https://api.qase.io/v1/suite/API",
      headers:{
        Token: "176f27f11d53996090b2aa3a8826cf681d4fb2379f2a7e79701c751588b4f51d",
        accept: "application/json",
        "content-type": "application/json"
      },
      body: {
        title: "API Suite"
      }
    }).then(response => {
        expect(response.status).eq(200)
      })
  })


  it('post-request: Create New Test Case', () => {

    cy.request({
      method: "POST",
      url: "https://api.qase.io/v1/case/API",
      headers:{
        Token: "176f27f11d53996090b2aa3a8826cf681d4fb2379f2a7e79701c751588b4f51d",
        accept: "application/json",
        "content-type": "application/json"
      },
      body: {
        title: "TestCase",
        suite_id: 1,
        steps: [
          {
            action: "Action step 1",
            expected_result: "Expected result 1",
            data: "Data 1"
          }
        ],
      }
    }).then(response => {
        expect(response.status).eq(200)
        //expect(response.body.result.id).eq(3)
      })
  })


  it('post-request: Create New Test Plan', () => {

    cy.request({
      method: "POST",
      url: "https://api.qase.io/v1/plan/API",
      headers:{
        Token: "176f27f11d53996090b2aa3a8826cf681d4fb2379f2a7e79701c751588b4f51d",
        accept: "application/json",
        "content-type": "application/json"
      },
      body: {
        title: "Test Plan",
        cases: [
          1
        ],
      }
    }).then(response => {
        expect(response.status).eq(200)
      })
  })


  it('post-request: Create New Defect', () => {

    cy.request({
      method: "POST",
      url: "https://api.qase.io/v1/defect/API",
      headers:{
        Token: "176f27f11d53996090b2aa3a8826cf681d4fb2379f2a7e79701c751588b4f51d",
        accept: "application/json",
        "content-type": "application/json"
      },
      body: {
        title: "Test Defect",
        actual_result: "FAILED",
        severity: 5
      }
    }).then(response => {
        expect(response.status).eq(200)
      })
  })


  it('post-request: Create New Test Run', () => {

    cy.request({
      method: "POST",
      url: "https://api.qase.io/v1/run/API",
      headers:{
        Token: "176f27f11d53996090b2aa3a8826cf681d4fb2379f2a7e79701c751588b4f51d",
        accept: "application/json",
        "content-type": "application/json"
      },
      body: {
        title: "Test Run: Failed"
      }
    }).then(response => {
        expect(response.status).eq(200)
      })
  })
  

  it('post-request: Set Test Run Result', () => {

    cy.request({
      method: "POST",
      url: "https://api.qase.io/v1/result/API/1",
      headers:{
        Token: "176f27f11d53996090b2aa3a8826cf681d4fb2379f2a7e79701c751588b4f51d",
        accept: "application/json",
        "content-type": "application/json"
      },
      body: {
        case_id: 1,
        defect: true,
        status: "failed"
      }
    }).then(response => {
        expect(response.status).eq(200)
      })
  })




})