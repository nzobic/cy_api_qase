describe('API QASE Tests', () => {

  it('get-request: Get All Projects', () => {

    cy.request({
      method: "GET",
      url: "https://api.qase.io/v1/project",
      headers:{
        Token: "176f27f11d53996090b2aa3a8826cf681d4fb2379f2a7e79701c751588b4f51d"
      }
    }).then(response => {
      expect(response.status).eq(200)
      expect(response.body.status).eq(true)
      // expect(response.body.result.total).eq(5)
      expect(response.body.result.entities[0].title).eq("Demo Project")
      expect(response.body.result.entities[0].code).eq("DEMO")
      expect(response.body.result.entities[0].counts.cases).eq(10)
      expect(response.body.result.entities[0].counts.defects.total).eq(1)

    })

  })




})