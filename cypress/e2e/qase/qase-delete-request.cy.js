describe('API QASE Tests', () => {

  it('delete-request: Delete Project by Code', () => {

    cy.request({
      method: "DELETE",
      url: "https://api.qase.io/v1/project/API",
      headers:{
        Token: "176f27f11d53996090b2aa3a8826cf681d4fb2379f2a7e79701c751588b4f51d"
      }
    }).then(response => {
      expect(response.status).eq(200)
      expect(response.body.status).eq(true)
    })

  })




})