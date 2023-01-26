
# Ecomerce Van Como Piña
Hola, soy David!

Queria contarte, que estoy aprendiendo REACT JS, en CoderHouse!

Y esta App es mi primer proyecto en react, formando parte del 
trabajo practico que estamos haciendo en clase.

El proyecto es un Ecomerce creado  con React JS, con fines educativos
e inspirado en la Tienda Online de Van Como Piña.

Posee todas las funcionalidades Front-end necesarias 
para una utilizacion intuitiva y agradable de la App.

Para el diseño se uso la tecnica de Mobile First, para ver que sea
totalmente responsive. 

Tambien posee modo Dark, para procurar un mejor uso durante horarios
nocturnos.

Espero que les guste, y sino, cualquier sugerencia sera muy bien recibida! 

¡GRACIAS TOTALES a todo el equipo de CODERHOUSE, profesores y tutores!

## Links interesantes
- GitHub: https://github.com/DavidCosta92/Ecomerce-React-Coderhouse-VCP.git
- Deploy: https://ecomerce-react-coderhouse-vcp.vercel.app/
- LinkeIn: https://www.linkedin.com/in/david-costa-yafar

## Principales caracteristicas
Base de datos, Firebase.
- Almacenar productos, Titulo, talles, stocks, precio, oferta porcentual, descripcion de producto, ruta de imagen, texto alterativo. 
- Al realizar compra, el stock es modificado segun cantidades y talles elegido, realizado los updates correspodientes.

## Pantallas y componentes pricipales:
- Home y Categorias.
- About Us: Formulario de contacto y slider de imagenes alusivas.
- Resultados de busqueda.
- Checkout.
- Resumen de compra.
- Error: Pagina que se muestra en caso de no encontrar la ruta, incluye formulario de contacto y muestra productos en oferta.
- Detalles de productos.
- Widget (en navbar).
- Footer: Logo de marca, link directo de WhatsApp, Email y Telefono. 

## Productos
- En pantalla principal, muestra productos junto a su titulo, foto, precio y link para ver detalles de productos.
- En productos con oferta, muestra porcentual, precio con y sin descuento.
- Productos sin stock, muestra foto con menor opacidad, leyenda sin stock, y permite ver detalles de producto aun sin stock.
- Los productos pueden ser organizados por precio ascendente, descendente, por categorias y por descuento.
- Se pueden mostrar los productos por categorias, ofertas o todos juntos.

## Detalles de productos
- Esta pantalla muestra precio, precio con descuento, porcentual de descuento, talles y stock de cada talle.
- Slider de fotos de producto
- Antes de poder comprar, exige la seleccion de talle. Por defecto, la cantidad de productos es uno, pero puede agregarse mas.
- No acepta productos duplicados, en dicho caso, se adiccionan unidades.
- Una vez agregado el producto, se permite al acceso al Checkout, o da opcion de ver mas productos.
- Se renderiza toasty mostrado que se agrego el producto al carrito.


## Busqueda
- Se redirecciona automaticamente al ingresar datos en campo de busqueda.
- Por cada producto de se genera un conjunto de KeyWords, las cuales luego son utilizadas para ampliar la busqueda de productos por sininimos o caracteristicas, Ejemplo: Buscar "celeste", mostrara todos los productos celestes.
- La busqueda es dinamica, por lo que al presinoar las teclas va actualizado la busqueda.
- En caso donde no existan productos, se avisa al usuario y ademas renderiza productos en oferta.

## Checkout
- Muestra detalles de productos en carrito, talles, cantidades, precio Un, subtotal.
- Muestra botones para agregar o quitar unidades de cada producto, o para eliminarlo por completo del carrito.
- Renderiza formulario de compra, para obtener datos de compra y solicita medio de pago. Ademas segun el pago elegido se realiza un descuento en el carrito.
- Todas las acciones disparan toasty para mostrar que se ejecuto la tarea.
- La compra del carrito redirige a Resumen de compra, siempre que la misma haya funcionado correctamente. Ademas se encarga de setear todo a cero nuevamente.
- El estado del carrio se guarda en caso de que se cierre el navegador.
- La orden de compra se envia a Firebase para almacenarce, ademas actualiza los stocks correspondiente en cada talle. Orden indica comprador productos y metodo de pago, con su respectivo descuento si correspondiere.

## Resumen de compra
- Muestra mensaje de compra exitosa, y advierte que sera enviado un mail.
- Muestra detalles de productos comprados, cantidades y talles.
- Muestra fecha y hora de compra.
- Indica precio total, descuento a realizar, precio final e Id de compra.

## Widget
- Muestra resumen de productos en carta, con foto, detalles precio y acciones para eliminarlos, o bien, agregar o quitar unidades.
- Muestra la cantidad total de items en carrito y el precio total que representan
- Da opcion de eliminar todos los productos en carrito, o bien pasar a vista de Checkout.

## Librerias
- Material Ui para iconos, navbar, modales y otros componentes esteticos principalmente.
- React Hook Form, para validar formularios y manejar los envios.
- React Router Dom, para manejar las rutas dentro de la aplicacion.
- React Styled Components, para funcionalidad Light / Dark mode
- React Tostify, para notificaciones.
- Firebase, para base de datos


![Van como piña Preview 2](https://user-images.githubusercontent.com/89800442/189241770-1a3e90a8-5e02-489c-8a31-a4c6bb87b671.gif)


