import { getTechLogos } from "@/lib/utils";
import Image from "next/image";
import { cn } from "@/lib/utils";
/*La fonction cn est utilisée pour gérer de manière élégante et propre les classes CSS dynamiques, en combinant les avantages de clsx pour la gestion conditionnelle des classes et de twMerge pour résoudre les conflits de classes dans Tailwind CSS. Cela rend le code plus lisible, réduit la duplication et évite les erreurs liées aux conflits de classes.*/
const DisplayTechIcons = async ({ techStack }: TechIconProps) => {
  const techIcons = await getTechLogos(techStack);
  return (
    <div className="flex flex-row">
      {techIcons.slice(0, 3).map(({ tech, url }, index) => (
        <div
          key={tech}
          className={cn(
            "relative group bg-dark-300 rounded-full p-2 flex-center",
            index >= 1 && "-ml-3"
          )}
        >
          <span className="tech-tooltip">{tech}</span>
          <Image
            src={url}
            alt={tech}
            width={100}
            height={100}
            className="size-5"
          />
        </div>
      ))}
    </div>
  );
};
export default DisplayTechIcons;
