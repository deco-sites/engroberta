import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Service {
  icon?: ImageWidget;
  name: string;
}

interface Props {
  backgroundImage?: ImageWidget;
  title?: string;
  subtitle?: string;
  tagline?: string;

  services: Service[];
}

export default function LawyerHero({
  backgroundImage =
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/6fe9404a-f69c-472a-b521-78f6c1f87326",
  title = "Expert Legal Services",
  subtitle = "Experienced Attorneys Ready to Help",
  tagline =
    "We provide comprehensive legal services for individuals and businesses.",
  services = [{
    icon:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
    name: "Manutenção",
  }, {
    icon:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
    name: "Projetos: estrutural, hidraulico, ARTs",
  }, {
    icon:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
    name: "Adequação",
  }],
}: Props) {
  return (
    <>
      <div class="relative flex justify-center items-center">
        {/* desktop image */}
        <Image
          class="hidden sm:block w-full aspect-video"
          src={backgroundImage}
          width={1280}
          height={1024}
          loading="eager"
          preload
        />
        {/* mobile image */}
        <Image
          class="sm:hidden w-full h-full object-cover"
          src={backgroundImage}
          width={360}
          height={560}
          loading="eager"
          preload
        />

        <div class="absolute hero-content text-center text-neutral-content w-full flex items-center">
          <div class="max-w-lg">
            <h1 class="mb-5 text-5xl font-bold">{title}</h1>
            <p class="mb-5 text-lg">{subtitle}</p>
            <p class="mb-8">{tagline}</p>
          </div>
        </div>
      </div>

      <div class="p-4 bg-white">
        <div class="p-2 grid grid-cols-1 gap-4 sm:grid-cols-3 bg-[#f2ece6] shadow-2xl">
          {services.map(({ icon, name }) => (
            <div class="flex justify-center items-center h-40 gap-4 even:bg-[#baa48d] even:rounded-tr-badge even:rounded-bl-badge">
              <div class="flex justify-end shrink-0 flex-grow">
                <div class="avatar mb-4">
                  <div class="w-24 rounded-full">
                    <img src={icon} />
                  </div>
                </div>
              </div>
              <div class="w-1/2">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
