
import Social from '@components/Social';
import profileImage from '@assets/images/profile.jpg';

const Bio = () => {
  return (
    <div className="max-width-lg mx-auto p-6 max-h-fit flex flex-col items-center">
      <h1 className="text-3xl md:text-largest  text-center font-bold text-terracotta">Emanoel Lopes</h1>
      <img className="rounded-full mx-auto mt-2 border-4 border-terracotta w-[120px] h-[120px] md:w-[160px] md:h-[160px]" src={profileImage.src} alt="imagem de Emanoel Lopes" />
      <p className="mt-2">Olá! 👋</p>
      <p className="mt-2">Sou <strong>Emanoel Lopes</strong>, Engenheiro de Software Front-End, de São Paulo, Brasil.</p>
      <p className="mt-2">Atualmente trabalho no <a className="font-bold underline underline-offset-1 text-terracotta" href="https://www.linkedin.com/company/luizalabs/" title="Luizalabs">Luizalabs</a>, área de tecnologia e inovação do <a className="font-bold underline underline-offset-1 text-terracotta" href="https://www.magazineluiza.com.br/" title="Magazine Luiza">Magazine Luiza</a>.</p>
      <p className="mt-2">Apreciador de café, tutor de 5 gatos, corredor amador nas horas livres e às vezes eu escrevo algumas coisas.</p>
      <Social />
    </div>
  );
};

export default Bio;
