import { useEffect, useState } from "react";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
      name,
      bio,
      "authorImage": image.asset->url
    }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <h1> Loading...</h1>;

  return (
    <main className="bg-gradient-to-r from-gray-800 via-yellow-500 to-gray-800">
      <div className="relative">
        <div className=":pt-32 sm:pt-10 lg:pb-24 md:pb-32 sm:pb-10 container mx-auto">
          <div className="container">
            <section className="bg-gray-800 rounded-lg shadow-2xl lg:flex p-20 pt-10">
              <img
                src={urlFor(author.authorImage).url()}
                className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8 mb-8"
                alt={author.name}
              />
              <div className="flex flex-col justify-center">
                <h1 className="cursive text-3xl md:text-6xl text-yellow-200 mb-16">
                  À propos de moi 👋.
                </h1>
                <div className="prose lg:prose-xl text-white text-lg md:text-xl">
                  <b>
                    <BlockContent
                      blocks={author.bio}
                      projectId="ronsbu7w"
                      dataset="production"
                    />
                  </b>
                  <p className="mt-8">
                    Après avoir effectué une formation de 6 mois avec Alyra,
                    l’école blockchain, j’aspire à trouver mon premier emploi en
                    tant que <b>Développeur Web</b>.
                  </p>
                </div>
              </div>
            </section>
          </div>
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-center bg-gray-800 flex flex-col rounded-lg shadow-2xl lg:flex mt-5 p-20">
              <ul className="text-white">
                <h1 className="cursive text-3xl md:text-6xl text-yellow-200 mb-4">
                  Hard Skill
                </h1>
                <li className="pb-3 text-lg md:text-xl">ReactJS / Chakra UI</li>
                <li className="pb-3 text-lg md:text-xl">NodeJS / Express</li>
                <li className="pb-3 text-lg md:text-xl">JavaScript</li>
                <li className="pb-3 text-lg md:text-xl">PostgreSQL</li>
                <li className="pb-3 text-lg md:text-xl">Ethereum / Solidity</li>
                <li className="pb-3 text-lg md:text-xl">CSS3 / Bootstrap5</li>
                <li>HTML5</li>
              </ul>
            </div>

            <div>
              <div className="text-center bg-gray-800 flex flex-col rounded-lg shadow-2xl lg:flex mt-5 p-20">
                <ul className="text-white text-lg md:text-xl">
                  <h1 className="cursive text-3xl md:text-6xl text-yellow-200 mb-4">
                    Soft Skill
                  </h1>
                  <li className="pb-3 text-lg md:text-xl">Travail d`équipe</li>
                  <li className="pb-3 text-lg md:text-xl">Méthode agile</li>
                  <li className="pb-3 text-lg md:text-xl">
                    Capacité à apprendre
                  </li>
                  <li className="pb-3 text-lg md:text-xl">Full remote</li>
                  <li className="pb-3 text-lg md:text-xl">Problem solving</li>
                  <li className="pb-3 text-lg md:text-xl">Contact client</li>
                  <li>HTML5</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
