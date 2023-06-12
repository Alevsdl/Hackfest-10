import ButtonRoute from './Button';

const AllRoutes = () => {
  return (
    <div className="w-[100%] rounded-xl bg-zinc-200 p-2">
      <ButtonRoute
        color="verde"
        border="verde"
        nombre="Ruta 1"
        link="/ruta1"
      ></ButtonRoute>
      <ButtonRoute
        color="naranja"
        border="naranja"
        nombre="Ruta 2"
        link="/ruta1"
      ></ButtonRoute>
      <ButtonRoute color="rosa" border="rosa" nombre="Ruta 3" link="/ruta1"></ButtonRoute>
      <ButtonRoute
        color="morado"
        border="morado"
        nombre="Ruta 4"
        link="/ruta1"
      ></ButtonRoute>
      <ButtonRoute
        color="celeste"
        border="celeste"
        nombre="Ruta 5"
        link="/ruta1"
      ></ButtonRoute>
    </div>
  );
};

export default AllRoutes;
