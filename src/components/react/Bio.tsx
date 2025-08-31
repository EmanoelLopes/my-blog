import Social from '@components/react/Social';
import profileImage from '@assets/images/profile.jpg';

const Bio = () => {
  const paragraphs = [
    <p key={1} className="mt-2">Olá! 👋</p>,
    <p key={2} className="mt-2">Sou <strong>Emanoel Lopes</strong>, Engenheiro de Software Front-End, de São Paulo, Brasil.</p>,
    <p key={3} className="mt-2">Atualmente trabalho no <a className="font-bold underline underline-offset-1 text-terracotta dark:text-red-300" href="https://www.linkedin.com/company/luizalabs/" title="Luizalabs" target="_blank" rel="noreferrer noopener">Luizalabs</a>, área de tecnologia e inovação do <a className="font-bold underline underline-offset-1 text-terracotta dark:text-red-300" href="https://www.magazineluiza.com.br/" title="Magazine Luiza" target="_blank" rel="noreferrer noopener">Magazine Luiza</a>.</p>,
    <p key={4} className="mt-2">Apreciador de café, tutor de 5 gatos, corredor amador nas horas livres e às vezes eu <a className="underline underline-offset-1 text-terracotta dark:text-red-300" href="/blog" title="blog">escrevo sobre algumas coisas relacionadas a desenvolvimento e tecnologia</a>.</p>,
  ];

  return (
    <section className="w-full max-w-[764px] mx-auto p-6 max-h-fit flex flex-col items-center text-center">
      <img className="rounded-full mx-auto mt-2 border-4 border-terracotta dark:border-red-300 w-[120px] h-[120px] md:w-[160px] md:h-[160px]" src={profileImage.src} alt="imagem de Emanoel Lopes" />
      {paragraphs}
      <Social />
    </section>
  );
};

export default Bio;
