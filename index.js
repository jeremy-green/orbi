const { Orbi, floorMap } = require('./orbi')();

(async () => {
  [
    {
      id: 'iPhone',
      name: 'Me',
    },
    {
      id: 'iPhone2',
      name: 'Me [Work]',
    },
    {
      id: 'Android',
      name: 'Not Me',
    },
  ].forEach(({ id, name }) => {
    const device = new Orbi(id);
    device.on('routerchange', e => {
      console.log(`${name} (${id}) is ${floorMap[e]}`);
    });
  });
})();
