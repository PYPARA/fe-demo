const rootModules = import.meta.glob('../../packages/**/index.vue');
const files = Object.keys(rootModules);

console.log(files);
const routes = [];
files.forEach((key) => {
  const name = key.match(/packages\/(.*)\/index.vue/)[1];
  const path = `/${name}`;
  const component = rootModules[key];
  routes.push({
    name,
    path,
    component,
  });
});

console.log(routes);

export default routes;
