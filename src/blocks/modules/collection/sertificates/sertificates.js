import { createSertificatesBlock } from "../information/information";
import sectionHandler from "../../../../js/utils/sectionHandler";

const sertificatesContainer = document.querySelector(
  ".main__container .sertificates__container"
);
const sertificatesSectionHandlerButton =
  document.querySelector(".main__container .sertificates__handler") || null;

let isSertificatesSectionActive = false;

export function sertificatesSection(data) {
  const {
    information: { sertificates },
  } = data;

  createSertificatesBlock(sertificatesContainer, sertificates);

  if (sertificatesSectionHandlerButton) {
    sertificatesSectionHandlerButton.onclick = () => {
      isSertificatesSectionActive = sectionHandler(
        isSertificatesSectionActive,
        sertificatesContainer,
        0,
        sertificatesSectionHandlerButton,
        "sertificates__handler--active"
      );
    };
  }
}
