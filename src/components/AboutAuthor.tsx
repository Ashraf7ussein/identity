import author from "../assets/author.png";

const AboutAuthor = () => {
  return (
    <div
      id="about"
      className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 py-12 items-start"
    >
      {/* Heading Column */}
      <div className="md:col-span-3">
        <h2 className="borel-regular font-semibold text-3xl text-center mt-12 mb-4">
          From the Author
        </h2>
      </div>

      {/* Image Column */}
      <div className="flex justify-center">
        <img src={author} alt="Author" className="w-2xl object-cover" />
      </div>

      {/* English Text Column (spans 2 columns on medium+) */}
      <div className="md:col-span-2 text-gray-800 leading-relaxed text-base space-y-4">
        <p>
          Our first book was about Jordan, followed by Egypt, and now I'm going
          back to my roots to introduce an exciting addition to the Identity
          Colouring Book series. I'm proud to see our book line grow and even
          prouder to have Palestine as our latest theme in the series.
        </p>
        <p>
          I'm half Palestinian from my father's side of the family, and so it
          makes me really happy to be able to share with you a taste of what I
          know about my beautiful country. I have yet to visit Palestine and its
          diverse cities, including my hometown Hebron, but I fell in love with
          my homeland, despite the distance, because I grew up listening to
          stories about its rich culture, history, traditions and beauty. I'm
          certain that you, too, will fall in love with it.
        </p>
        <p>
          Learning about a country through colouring is exciting! And I would
          like nothing more than for you to engage with these special
          illustrations and have fun, all the while learning about Palestine's
          fascinating past and present.
        </p>
        <p>
          I added a beautiful twist to the Palestine edition; I commissioned a
          group of artists to work on the book instead of just one illustrator.
          The Arab artists' illustrations reflect a deep love, nostalgia and
          admiration for their country. Let your colours bring hope to this holy
          land, and may your hopes bring freedom back to Palestine.
        </p>
      </div>
    </div>
  );
};

export default AboutAuthor;
