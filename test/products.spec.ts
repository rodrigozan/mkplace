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