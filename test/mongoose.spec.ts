//importando o modelo de usuário
import Product from '../src/models/products.model';
import assert from 'assert';

//Função que testa se é possível inserir um novo usuário
describe('Criando documentos no MongoDB', () => {
    it('Criando um novo usuário', (done) => {
        // Criando um novo usuário
        const newProduct = new Product({
            nome: 'March',
            marca: 'Nissan',
            vendedor: 'Roger',
            faixaDePreco: 40.00
        });

        // Salvando o usuário
        newProduct.save() 
            .then(() => {
                assert(!newProduct.isNew);
                done();
            });
        done();
    });
});

let product: any;

// Criando um novo usuário
product = new Product({
    nome: 'March',
    marca: 'Nissan',
    vendedor: 'Roger',
    faixaDePreco: 40.00
});

// Salvando o usuário
product.save()

// Testando a busca por usuário
describe('Buscando usuário', () => {
    it('Busca de um usuário pelo nome', (done) => {
        Product.findOne({ name: 'March' })
            .then((prod: any) => {
                assert(prod.name === 'March');
                done();
            });
            done();
    });
});

// Testando o update de um usuário
describe('Atualizando usuário', () => {
    // Função Helper
    function assertHelper(statement: any, done: any) {
        statement
         .then(() => Product.find({}))
         .then((products: any) => {
          assert(products.length === 1);
          assert(products[0].name === 'March');
          done();
        });
      }

    it('Buscando e atualizando um usuário pelo nome', (done) => {
        product.set('nome', 'Etios')
        assertHelper(product.save(), done);
        done();
    });
});

// Testando a remoção de um usuário
describe('Removendo usuário', () => {
    it('Buscando e removendo um usuário pelo nome', (done) => {
        Product.remove()
        .then(() => Product.find({ name: 'Etios' }))
            .then((product: any) => {
                assert(product.name === null);
                done();
            });
            done();
    });
});


