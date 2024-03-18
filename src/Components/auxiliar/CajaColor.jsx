import { useEffect, useState } from "react";

const CajaColor = () => {
  const [colorFondo, setColorFondo] = useState("");
  const [index, setIndex] = useState(0);

  const colores = [
    "#FF007F",
    "#39FF14",
    "#FFFF00",
    "#00FFFF",
    "#FFA500",
    "#800080",
    "#FF4500",
    "#BFFF00",
    "#FF6EC7",
    "#6495ED",
  ];

  useEffect(() =>{
    const timerId = setTimeout(() =>{
        setColorFondo(colores[index]);
        setIndex((prevIndex) => (prevIndex + 1) % colores.length);
    }, 3000)

    return () => clearTimeout(timerId);
  }, [colorFondo])

  return (
    <div
      className="cajaColor border rounded-circle"
      style={{ background: colorFondo }}
    ></div>
  );
};

export default CajaColor;
