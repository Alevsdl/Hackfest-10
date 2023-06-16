import ButtonRoute from './Button';

const AllRoutes = () => {
    return (
        <div className="w-[100%] rounded-xl bg-zinc-200 p-2">
            <ButtonRoute
                color="verde"
                border="verde"
                nombre="Ruta 20"
                link="/ruta1"
            ></ButtonRoute>
            <ButtonRoute
                color="naranja"
                border="naranja"
                nombre="Ruta Concepción"
                link="/rutaconcepcion"
            ></ButtonRoute>
            <ButtonRoute
                color="morado"
                border="morado"
                nombre="Ruta 19"
                link="/ruta19"
            ></ButtonRoute>
            <ButtonRoute
                color="celeste"
                border="celeste"
                nombre="Ruta 11"
                link="/ruta11"
            ></ButtonRoute>
            <ButtonRoute
                color="verde"
                border="verde"
                nombre="Ruta 18"
                link="/ruta18"
            ></ButtonRoute>
            <ButtonRoute
                color="naranja"
                border="naranja"
                nombre="Ruta A1"
                link="/rutaA1"
            ></ButtonRoute>
            <ButtonRoute
                color="verde"
                border="verde"
                nombre="Ruta Santa Fe"
                link="/rutasantafe"
            ></ButtonRoute>
            <ButtonRoute
                color="morado"
                border="morado"
                nombre="Ruta Servibus"
                link="/rutaservibus"
            ></ButtonRoute>
            <ButtonRoute
                color="celeste"
                border="celeste"
                nombre="Ruta Trigales"
                link="/rutaTrigales"
            ></ButtonRoute>
            <ButtonRoute
                color="naranja"
                border="naranja"
                nombre="Ruta Vista Bella"
                link="/rutaVistaBella"
            ></ButtonRoute>
        </div>
    );
};

export default AllRoutes;
