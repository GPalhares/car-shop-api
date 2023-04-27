import sinon from 'sinon';
import { Model } from 'mongoose';
import { expect } from 'chai';
import Car from '../../src/Domains/Car';
import CarsService from '../../src/Services/CarsService';

describe('Deveria buscar um carro por id', function () {
  it('Deveria buscar um carro por id com Sucesso', async function () {
    const output: Car = new Car(
      {
        id: '111111111111',
        model: 'testeteste',
        year: 2014,
        color: 'Red',
        status: true,
        buyValue: 45.000,
        doorsQty: 4,
        seatsQty: 5,
      },

    );
    sinon.stub(Model, 'findById').resolves(output);

    const service = new CarsService();
    const result = await service.findCarById('111111111111');

    expect(result).to.be.deep.equal(output);

    sinon.restore();
  });
  it('Deveria buscar um carro por id com Falha', async function () {
    sinon.stub(Model, 'findById').resolves(null);

    const service = new CarsService();
    const result = await service.findCarById('111111111211');

    expect(result).to.be.deep.equal(null);
  });

  it('Deveria criar um carro com Sucesso', async function () {
    const output = (
      {
        id: '11111111111',
        model: 'testeteste',
        year: 2014,
        color: 'Red',
        status: true,
        buyValue: 45.000,
        doorsQty: 4,
        seatsQty: 5,
      }

    );
    sinon.stub(Model, 'create').resolves(output);

    const service = new CarsService();
    const result = await service.createCar(output);

    expect(result).to.be.deep.equal(output);

    sinon.restore();
  });

  it('Deveria listar todas os carros', async function () {
    const output = (
      [
        {
          id: 'car1',
          model: 'teste1',
        },
        {
          id: 'car2',
          model: 'teste2',
        },
        {
          id: 'car3',
          model: 'teste3',
        },
      ]
    );
    sinon.stub(Model, 'find').resolves(output);

    const service = new CarsService();
    const result = await service.listAllCars();

    expect(result).to.be.deep.equal(output);

    sinon.restore();
  });

  it('Deveria editar moto por ID', async function () {
    const output = (
      {
        id: 'moto1',
        model: 'Honda Teste',
      }
    );
    sinon.stub(Model, 'findByIdAndUpdate').resolves(output);

    const service = new CarsService();
    const result = await service.updateCarById(
      'moto1', 
      {
        id: 'moto2',
        model: 'Honda Cb 600f Hornet',
        year: 2014,
        color: 'Red',
        status: true,
        buyValue: 45.000,
        doorsQty: 4,
        seatsQty: 5 },
    );

    expect(result).to.be.deep.equal(output);

    sinon.restore();
  });
});
