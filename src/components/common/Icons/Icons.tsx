import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faXmark, faTrash, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type IconName = "faCartShopping" | "faXmark" | "faTrash" | "faMinus" | "faPlus";

type IconProps = {
  icon: IconName;
  color: string;
  size: number;
};

const iconMapping: Record<IconName, IconDefinition> = {
  faCartShopping: faCartShopping,
  faXmark: faXmark,
  faTrash: faTrash,
  faMinus: faMinus,
  faPlus: faPlus,
};

export default function Icons({ icon, color, size }: IconProps) {
  return <FontAwesomeIcon icon={iconMapping[icon]} style={{ fontSize: size, color: color, pointerEvents: "none" }} />;
}
