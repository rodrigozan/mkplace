import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
chai.should();

describe('Produtos - Endpoints', () => {
    describe('Get /products', () => {
        it ('Listagem de produtos', done => {
            chai.request('http://localhost:3000')
            .get('/products')
            .end((err, res) => {
                res.should.have.status(201);
                done();
            });
        });
    });
});

