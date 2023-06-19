import { HiArrowTopRightOnSquare } from "react-icons/hi2"
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import gow from '../assets/preview-gow.jpg';
import waiter from '../assets/waiter-app.png';
import tfc from '../assets/tfc.png';
import quiz from '../assets/preview-quiz.png';
import sales from '../assets/preview-sn.png';
import arpa from '../assets/arpa.png';
import stranger from '../assets/preview-st.png';
import ghibli from '../assets/ghibli.png'
import sw from '../assets/sw.png';
import trivia from '../assets/trivia.png';
import wallet from '../assets/wallet.png';
import trunfo from '../assets/trunfo.png';
import sc from '../assets/sc.png';
import blogs from '../assets/blogs.png';
import carshop from '../assets/carshop.png';
import client from '../assets/clients.png';
import store from '../assets/store.png';
import talker from '../assets/talker.png';
import pixel from '../assets/pixel.png';
import smith from '../assets/trybesmith.png'
import { useState } from "react";

const Projects = () => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);
  const projects = [
    {
      title: "God Of War",
      description: "Interface do jogo God of War Ragnarök na loja da Playstation.",
      image: gow,
      link: "https://github.com/Rodrigo-Monteiro-Lima/God-of-War",
      colSpan: "col-span-1",
    },
    {
      title: "Waiter App",
      description: "WaiterApp é um aplicativo composto por uma área de administração de lanches acessada via tablet por garçons e administradores de um estabelecimento e uma área de cardápio de alimentos direcionada aos clientes do estabelecimento podendo ser acessada por smartphones.",
      image: waiter,
      link: "https://github.com/Rodrigo-Monteiro-Lima/WaiterApp",
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      title: "TFC",
      description: "Gerenciamento de um campeonado de futebol",
      image: tfc,
      link: "https://github.com/Rodrigo-Monteiro-Lima/soccer-league-api",
      colSpan: "col-span-1",
    },
    {
      title: "Quiz",
      description: "Quiz de Programação é um projeto que consiste em um jogo de perguntas e respostas sobre HTML, CSS e Javascript",
      image: quiz,
      link: "https://github.com/Rodrigo-Monteiro-Lima/quiz-react",
      colSpan: "col-span-1",
    },
    {
      title: "Sales Notification",
      description: "Gerenciamento e filtragem as vendas feitas pelos funcionários, tendo a possibilidade de enviar notificações via SMS com o nome, data e o valor vendido para um telefone.",
      image: sales,
      link: "https://github.com/Rodrigo-Monteiro-Lima/Sales-Notification",
      colSpan: "col-span-1",
    },
    {
      title: "Stranger Things",
      description: "É um projeto feito com base na série Stranger Things da Netflix, podendo realizar o cadastro para um grupo da série.",
      image: stranger,
      link: "https://github.com/Rodrigo-Monteiro-Lima/Strange-Things",
      colSpan: "col-span-1",
    },
    {
      title: "ARPAnet",
      description: "Sistema de gerenciamento para a Alternativa Reciclagem de Paulo Afonso",
      image: arpa,
      link: "https://github.com/DanielMhl/ARPAnet",
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      title: "Planet Search",
      description: "Tabela com filtros dos planetas do universo de Star Wars.",
      image: sw,
      link: "https://github.com/Rodrigo-Monteiro-Lima/Starwars-Planets-Search",
      colSpan: "col-span-1",
    },
    {
      title: "Ghibli Movies",
      description: "Interface de um site de filmes do Studio Ghibli. Onde pode ler a sinopse e adicionar aos favoritos.",
      image: ghibli,
      link: "https://github.com/Rodrigo-Monteiro-Lima/Ghibli-Movies",
      colSpan: "col-span-1",
    },
    {
      title: "Trivia",
      description: "Jogo de perguntas e respostas sobre conhecimentos gerais.",
      image: trivia,
      link: "https://github.com/Rodrigo-Monteiro-Lima/Trivia",
      colSpan: "col-span-1",
    },
    {
      title: "Finance Exchange",
      description: "Gerenciamento de gastos em diversas moedas e suas conversões para Real.",
      image: wallet,
      link: "https://github.com/Rodrigo-Monteiro-Lima/Finance-Exchange",
      colSpan: "col-span-1",
    },
    {
      title: "Shopping Cart",
      description: "Loja virtual que consume a API do Mercado Livre.",
      image: sc,
      link: "https://github.com/Rodrigo-Monteiro-Lima/Shopping_Cart",
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      title: "Tryunfo",
      description: "Jogo de cartas baseado no jogo de cartas Trunfo.",
      image: trunfo,
      link: "https://github.com/Rodrigo-Monteiro-Lima/Tryunfo",
      colSpan: "col-span-1",
    },
    {
      title: "Blogs API",
      description: "Api para gerenciamento de postagem de blogs, podendo criar, deletar, atualizar e listar os posts.",
      image: blogs,
      link: "https://github.com/Rodrigo-Monteiro-Lima/blogs-api",
      colSpan: "col-span-1",
    },
    {
      title: "Blacksmith API",
      description: "Api para gerenciamento de produtos de uma loja de itens medievais",
      image: smith,
      link: "https://github.com/Rodrigo-Monteiro-Lima/blacksmith-api",
      colSpan: "col-span-1",
    },

    {
      title: "Store API",
      description: "Api para gerenciamento do cadastro de produtos e das vendas.",
      image: store,
      link: "https://github.com/Rodrigo-Monteiro-Lima/store-api",
      colSpan: "col-span-1",
    },
    {
      title: "Pixel Arts",
      description: "Criação de pixel arts, podendo escolher a cor e o tamanho do quadro.",
      image: pixel,
      link: "https://github.com/Rodrigo-Monteiro-Lima/pixels_art",
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      title: "Lecture API",
      description: "Api para gerenciamento de cadastro de palestras.",
      image: talker,
      link: "https://github.com/Rodrigo-Monteiro-Lima/lecture-api",
      colSpan: "col-span-1",
    },
    {
      title: "Client API",
      description: "Api para gerenciamento de cleintes de uma loja.",
      image: client,
      link: "https://github.com/Rodrigo-Monteiro-Lima/Clients-API",
      colSpan: "col-span-1",
    },
    {
      title: "Car Shop API",
      description: "Api para gerenciamento de carros e motos de uma loja.",
      image: carshop,
      link: "https://github.com/Rodrigo-Monteiro-Lima/car-shop",
      colSpan: "col-span-1",
    },
  ]
  const handleNext = () => {
    if (end < projects.length) {
      setStart(start + 5);
      setEnd(end + 5);
    }
  }
  const handlePrev = () => {
    if (start > 0) {
      setStart(start - 5);
      setEnd(end - 5);
    }
  }
  return (
    <>
      <section className="rounded-tl-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-tl-[180px]">
        <div className="container mx-auto max-w-4xl p-4 py-12">
          <div className="relative p-4 text-center">
            <h2 className="relative z-50 mb-2 text-white">
              <span className="mr-2 font-headline text-3xl font-semibold">
                Projetos &
              </span>
              <span className="font-handwriting text-4xl">Portfólio</span>
            </h2>
            <p className="relative text-sm text-gray-400">
              Alguns dos projetos pessoais e que já realizei ao longo da minha
              trajetória como programador.
            </p>
            <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 relative">
            <button
                className={`absolute left-[-50px] top-1/2 transform -translate-y-1/2 text-4xl text-gray-400 hover:text-white ${start !== 0 && "cursor-pointer"} transition-colors duration-200 focus:outline-none ${start === 0 ? 'opacity-0' : 'opacity-100'}`}
                onClick={handlePrev}
                disabled={start === 0}
            >
              <AiOutlineArrowLeft 
              />
            </button>

            {projects.slice(start, end).map((project, index) => (
              <div
                key={index}
                className={`group relative h-52 cursor-default rounded-lg ${project.colSpan} bg-cover bg-center`}
                style={{ 
                  backgroundImage: `url('${project.image}')`,
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg bg-blue-600 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <h4 className="font-headline text-lg font-semibold">
                    {project.title}
                  </h4>
                  <p className=" mb-4 text-sm text-center">{project.description}</p>
                  <a href={project.link} target="_blank">
                    <HiArrowTopRightOnSquare className="h-6 w-6" />
                  </a>
                </div>
              </div>
            ))}
            <button
              className={`absolute right-[-50px] top-1/2 transform -translate-y-1/2 text-4xl text-gray-400 hover:text-white ${ end === projects.length && "cursor-pointer"} transition-colors duration-200 focus:outline-none ${end === projects.length ? 'opacity-0' : 'opacity-100'}`}
              onClick={handleNext}
              disabled={end === projects.length}
            >
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </section>
      {/* <div className="absolute right-0 -mt-[6px] h-3 w-48 rounded-l-full bg-gradient-to-r from-gray-700 to-gray-600 md:w-96" /> */}
    </>
  )
};

export default Projects;