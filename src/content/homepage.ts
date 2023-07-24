export type HomePageBoxType = {
  title: string;
  content: string;
  reference: string;
};
const pages: HomePageBoxType[] = [
  {
    title: "Brand Strategy",
    content:
      "We help businesses define their unique brand message and branding positioning.",
    reference: "About Strategy",
  },
  {
    title: "Visual Identity",
    content:
      "We create visual elements such as logos, packaging, and marketing materials for your brand.",
    reference: "About Identity",
  },
  {
    title: "Digital Marketing",
    content:
      "We help businesses to promote their brand online and create engaging digital experiences.",
    reference: "About Marketing",
  },
  {
    title: "Brand Management",
    content:
      "We help businesses to implement their brand across all touchpoints and ensure consistency.",
    reference: "About Management",
  },
];
export default pages;
