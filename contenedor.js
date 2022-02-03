
class ProductContainer {
    constructor(filename) {
        this.countID = 0;
        this.file = filename;
        this.productList = [];
    }

    async getAll() {
        try {
            let allProducts = JSON.stringify(this.productList);
            return allProducts
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }

    async function save(_product) => {
        //Guarda un objeto y lo devuelvo con el id asignado
        try {
            this.countID++;
            product["id"] = this.countID;
            this.productList.push(product);
            await this.write();
            return this.countID;
        } catch (error) {
            console.log('Hubo un error', error);
        }
    }

    async getByID(ID) {
        //Recibe un id que lanza un null si no hay un producto con ese id
        try {
            let productFind = this.productList.filter(elem => elem.id == ID);

            if (productFind.length === 0) {
                return null;
            } else {
                return productFind;
            }
        } catch (error) {
            console.log('Hubo un error', error);
        }
    }

    async deleteByID(ID) {
        //Elimina el producto con el id buscado
        try {
            let deletedProduct = this.productList.filter(elem => elem.id == ID);
            this.productList = this.productList.filter(elem => elem.id !== ID);
            this.write();
            return deletedProduct;
        } catch (error) {
            console.log('Hubo un error', error);
        }
    }

    async deleteAll() {
        //Elimina todos los objetos presentes
        catch (error) {
            console.log('Hubo un error', error);
        }
}
    