const expect = require('chai').expect;
const devicesData = require('../devicesData');

describe('Devices Data', () => {
  it('should be an array', () => {
    expect(devicesData).to.be.an('array');
  });

  it('should contain at least one device', () => {
    expect(devicesData.length).to.be.greaterThan(0);
  });

  it('each device should have required properties', () => {
    devicesData.forEach(device => {
      expect(device).to.have.property('deviceName');
      expect(device).to.have.property('shortName');
      expect(device).to.have.property('dimension');
      expect(device).to.have.property('width');
      expect(device).to.have.property('height');
      expect(device).to.have.property('energy');
      expect(device).to.have.property('cost');
      expect(device).to.have.property('releaseDate');
      expect(device).to.have.property('image');
    });
  });

  it('should have valid release year', () => {
    devicesData.forEach(device => {
      if (device.releaseDate) {
        const releaseYear = parseInt(device.releaseDate, 10);
        expect(releaseYear).to.be.at.least(1900);
        expect(releaseYear).to.be.at.most(new Date().getFullYear());
      }
    });
  });

  it('should have valid cost', () => {
    devicesData.forEach(device => {
      expect(device.cost).to.be.a('number');
      expect(device.cost).to.be.greaterThan(0);
    });
  });

  it('should have valid energy level', () => {
    devicesData.forEach(device => {
      expect(device.energy).to.be.a('number');
      expect(device.energy).to.be.at.least(-5);
      expect(device.energy).to.be.at.most(10);
    });
  });

  it('should have valid dimensions', () => {
    devicesData.forEach(device => {
      const dimensions = device.dimension.split(' x ');
      expect(dimensions.length).to.equal(2);
      const width = parseInt(dimensions[0], 10);
      const height = parseInt(dimensions[1], 10);
      expect(width).to.be.a('number');
      expect(height).to.be.a('number');
    });
  });
});
