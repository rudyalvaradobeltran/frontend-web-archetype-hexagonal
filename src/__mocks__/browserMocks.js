// Cualquier storage funcionar√° como mock
Storage.prototype.setItem = jest.fn();
Storage.prototype.getItem = jest.fn();
Storage.prototype.clear = jest.fn();
