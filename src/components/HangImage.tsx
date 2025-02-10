import image0 from "../assets/0.png";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";
import image5 from "../assets/5.png";
import image6 from "../assets/6.png";
import image7 from "../assets/7.png";
import image8 from "../assets/8.png";
import image9 from "../assets/9.png";

const images: string[] = [
  image0,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
];

interface Props {
  imageNumber: number;
}

// Las propertis se reciben en los argumentos de la funcion que se conocen como props y su tipo de dato props:Props
// export function HangImage(props: Props) {
// usamos una tecnica llamada desestructuracion {imageNumber}: Props para extraer que atributo o property se quiere extraer de los argumentos o properties que nos estan enviando
export function HangImage({imageNumber}: Props) {
  // console.log(props.imageNumber);//extrae el numero o posicion de la imagen

  // Una validacion para que cuando el intento sea mayor a 9 , 10,11 ect no nos salte un error
  // con esto nos aseguramos que componente siempre muestre una imagen correcta
  if (imageNumber>=9) {
    imageNumber = 9;
  }

  return(
    // <h1>Hola Mundo!!</h1>
    <img
      // src={image0}
      // src={images[4]}
      // src={images[props.imageNumber]}
      src={images[imageNumber]}
      alt="Hang image"
      style={{width:250}}
    />
  );//jsx elemen
}