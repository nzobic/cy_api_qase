import petBody from "../fixtures/petBody.json"
import endpoints from "../fixtures/endpoints.json"
//const url = cypress.env("url");
import petBodyData from "../fixtures/petBodyData.json"
import petBodyData2 from "../fixtures/petBodyData-2.json"

describe('API Petstore Tests', () => {

  it('post-request: Create Pet: Luna, dog', () => {

    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/pet",
      headers:{
        accept: "application/json",
        "content-type": "application/json"
      },
      body: {
        id: 1,
        category: {
          id: 0,
          name: "dogs"
        },
        name: "Luna",
        photoUrls: [
          "string"
        ],
        tags: [
          {
            id: 0,
            name: "string"
          }
        ],
        status: "available"
      }
    }).then(response => {
        expect(response.status).eq(200)
        expect(response.body.id).eq(1)
        expect(response.body.category.name).eq("dogs")
        expect(response.body.name).eq("Luna")
      })
  })


  it('post-request: Create Pet: Max, cat', () => {

    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/pet",
      headers:{
        accept: "application/json",
        "content-type": "application/json"
      },
      body: {
        id: 2,
        category: {
          id: 0,
          name: "cats"
        },
        name: "Max",
        photoUrls: [
          "string"
        ],
        tags: [
          {
            id: 0,
            name: "string"
          }
        ],
        status: "available"
      }
    }).then(response => {
        expect(response.status).eq(200)
        expect(response.body.id).eq(2)
        expect(response.body.category.name).eq("cats")
        expect(response.body.name).eq("Max")
      })
  })


  xit('post-request: Create Pet: Empty name', () => {

    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/pet",
      headers:{
        accept: "application/json",
        "content-type": "application/json"
      },
      body: {
        id: 3,
        category: {
          id: 0,
          name: "cats"
        },
        name: "",
        photoUrls: [
          "string"
        ],
        tags: [
          {
            id: 0,
            name: "string"
          }
        ],
        status: "available"
      }
    }).then(response => {
        cy.log(JSON.stringify(response.body))
        expect(response.status).eq(400)
      })
  }) //False Failure


  it('post-request: Create Pet: Milly, bird', () => {

        petBody.id = 123;

        cy.postRequest(
          endpoints.pet.postPet,
          petBody
        ).then(response => {
            expect(response.status).eq(200)
            expect(response.body.id).eq(petBody.id)
            expect(response.body.category.name).eq("birds")
            expect(response.body.name).eq("Milly")
          })
  })


  it('post-request: Create Pets with different IDs: array of bodies', () => {

        petBodyData.forEach((petData) => {

          cy.postRequest(
            endpoints.pet.postPet,
            petData
          ).then(response => {
              expect(response.status).eq(200)
              expect(response.body.id).eq(petData.id)
              expect(response.body.category.name).eq(petData.category.name)
              expect(response.body.name).eq(petData.name)
            })
    })


  })


  Object.entries(petBodyData2).forEach(([key, value]) => {

    it(key + ' post-request: Create Pets with different IDs: objects', () => {

      cy.postRequest(
        endpoints.pet.postPet,
        value
      ).then(response => {
          expect(response.status).eq(200)
          expect(response.body.id).eq(value.id)
          expect(response.body.category.name).eq(value.category.name)
          expect(response.body.name).eq(value.name)
        })
    })
  })







  })