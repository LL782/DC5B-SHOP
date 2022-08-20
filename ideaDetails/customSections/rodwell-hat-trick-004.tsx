import Image from "next/image";

export default function CustomContent() {
  return (
    <>
      <p>In the picture below #4 is on top of the framed pile on the right.</p>
      <Image
        src={"/idea-images/rodwell-hat-trick/004-250_Framed.jpg"}
        alt={"Black and white version of the main artwork"}
        width="4032px"
        height="3024px"
        layout="responsive"
      />{" "}
      <p>
        Also frame are #6-10. In the middle, finished and unframed, are #11-25.
        To their left are #26-50. When this photo was taken they had just
        finished getting their first ink lines and still have graphite guides.
        Lastly, you have the blanks for #51-250 stacked on the left.
      </p>
    </>
  );
}
