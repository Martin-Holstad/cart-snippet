import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faXmark, faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

export default function Icons({ icon, color, size }) {
  const icons = {
    faCartShopping: faCartShopping,
    faXmark: faXmark,
    faTrash: faTrash,
    faMinus: faMinus,
    faPlus: faPlus,
  };

  return <FontAwesomeIcon icon={icons[icon]} style={{ fontSize: size, color: color, pointerEvents: "none" }} />;
}
