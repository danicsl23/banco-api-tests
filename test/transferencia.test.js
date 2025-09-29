const request = require('supertest');
const { expect } = require('chai')
require('dotenv').config()
const { obterToken } = require('../helpers/autenticacao')

describe('Transferencias', () => {
    describe('POST /transferencias ', () => {
        let token
        
        beforeEach(async () => {
            token = await obterToken('julio.lima','123456')
        })
        
        it('Deve retornar sucesso com 201 quando o valor da transferência for igual ou acima de 10', async () => {          
            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`) //'Bearer' + token é o mesmo que o comando anterior
                .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 11,
                    token: ""
                })
                expect(resposta.status).to.equal(201);

                console.log(resposta.body)
        })

        it('Deve retornar falha com 422 quando o valor da transferência for abaixo de 10', async () => {
            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`) //'Bearer' + token é o mesmo que o comando anterior
                .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 7,
                    token: ""
                })
                expect(resposta.status).to.equal(422);

            })
                    
    })

})