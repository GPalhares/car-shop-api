import sinon from 'sinon';
import { Model } from 'mongoose';
import { expect } from 'chai';
import Motorcycle from '../../src/Domains/Motorcycle';
import MotorcyclesService from '../../src/Services/MotorcyclesService';

describe('Deveria buscar uma moto por id', function () {
  it('Deveria buscar uma moto por id com Sucesso', async function () {
    const output: Motorcycle = new Motorcycle(
      {
        id: '111111111111',
        model: 'Honda Cb 600f Horne',
        year: 2014,
        color: 'Red',
        status: true,
        buyValue: 45.000,
        category: 'Street',
        engineCapacity: 600,
      },

    );
    sinon.stub(Model, 'findById').resolves(output);

    const service = new MotorcyclesService();
    const result = await service.findMotorcycleById('111111111111');

    expect(result).to.be.deep.equal(output);

    sinon.restore();
  });
  it('Deveria buscar uma moto por id com Falha', async function () {
    sinon.stub(Model, 'findById').resolves(null);

    const service = new MotorcyclesService();
    const result = await service.findMotorcycleById('111111111211');

    expect(result).to.be.deep.equal(null);
  });

  it('Deveria criar uma moto com Sucesso', async function () {
    const output = (
      {
        id: '11111111111',
        model: 'Honda Cb 600f Hornet',
        year: 2014,
        color: 'Red',
        status: true,
        buyValue: 45.000,
        category: 'Street',
        engineCapacity: 600,
      }

    );
    sinon.stub(Model, 'create').resolves(output);

    const service = new MotorcyclesService();
    const result = await service.createMotorcycle(output);

    expect(result).to.be.deep.equal(output);

    sinon.restore();
  });

  it('Deveria listar todas as motos', async function () {
    const output = (
      [
        {
          id: 'moto1',
          model: 'Honda Cb 400f Hornet',
        },
        {
          id: 'moto2',
          model: 'Honda Cb 500f Hornet',
        },
        {
          id: 'moto3',
          model: 'Honda Cb 300f Hornet',
        },
      ]
    );
    sinon.stub(Model, 'find').resolves(output);

    const service = new MotorcyclesService();
    const result = await service.listAllMotorcycle();

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

    const service = new MotorcyclesService();
    const result = await service.updateMotorcycleById(
      'moto1', 
      {
        id: 'moto2',
        model: 'Honda Cb 600f Hornet',
        year: 2014,
        color: 'Red',
        status: true,
        buyValue: 45.000,
        category: 'Street',
        engineCapacity: 600 },
    );

    expect(result).to.be.deep.equal(output);

    sinon.restore();
  });
});
