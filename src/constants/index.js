import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    java,
    python,
    git,
    C,
    sql,
    meta,
    starbucks,
    tesla,
    shopify,
    hangedManGame,
    pothole,
    binaryC,
    vendingMachine,
    ballTrajectory,
    techSite,
    detectiveGame,
    iot,
    github,
    linkedin,
    flask,
    jupyter,
    matlab,
    detection,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "sobre",
      title: "Sobre",
    },
    {
      id: "trabalhos",
      title: "Trabalhos",
    },
    {
      id: "contato",
      title: "Contato",
    },
  ];

  export const contacts = [
    {
      image: github,
      source_link: "https://github.com/Carlosedrm"
    },
    {
      image: linkedin,
      source_link: "https://www.linkedin.com/in/c-mello/"
    },
  ];
  
  const services = [
    {
      title: "Desenvolvedor Python",
      icon: web,
    },
    {
      title: "Desenvolvedor Web",
      icon: mobile,
    },
    {
      title: "Desenvolvedor Backend",
      icon: backend,
    },
    {
      title: "Desenvolvedor OpenCV",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "python",
      icon: python,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "C",
      icon: C,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "flask",
      icon: flask,
    },
    {
      name: "jupyter",
      icon: jupyter,
    },
    {
      name: "matlab",
      icon: matlab
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];

  const projects = [
    {
      name: "Mostrar Trajetória",
      description:
        "Este programa tem como objetivo calcular a trajetória de uma bola com base em um vídeo selecionado. Utilizando técnicas de processamento de imagens digitais, o programa analisa cada quadro do vídeo, aplica transformações morfológicas (como blur, opening and closing e contour) e exibe uma versão binária da imagem, juntamente com uma versão final que mostra a trajetória da bola.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
      ],
      image: ballTrajectory,
      source_code_link: "https://github.com/gprzy/object-tracking",
    },
    {
      name: "Loja de informática",
      description:
        "Foi desenvolvido um site simples para uma loja de informática, permitindo que os usuários se cadastrem ou façam login em suas contas e iniciem uma sessão para realizar compras. As informações relacionadas às compras, produtos no carrinho, disponibilidade de produtos, dados de cadastro do usuário e método de pagamento são armazenadas em um banco de dados.",
      tags: [
        {
          name: "HTML&CSS",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "PHP&SQL",
          color: "pink-text-gradient",
        },
      ],
      image: techSite,
      source_code_link: "https://github.com/Carlosedrm/Computer-Store-Website",
    },
    {
      name: "Jogo de Detetive",
      description:
      "Um jogo de enigmas com uma história simples desenvolvido em Java para a disciplina de Programação Orientada a Objetos. Foi utilizada a biblioteca Swing para a interface gráfica interativa e conceitos de Java aprendidos em aula como classes abstratas, chamadas polimórficas, leitura de arquivos e herança entre classes para a implementação do jogo.",      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
      ],
      image: detectiveGame,
      source_code_link: "https://github.com/Carlosedrm/PJBL_JAVA",
    },
    {
      name: "Estacionamento com IoT",
      description:
        "Um projeto de estacionamento com um website criado usando Flask com conexão a um banco de dados SQL. O sistema utiliza sensores digitais ou físicos para verificar a ocupação das vagas e então manda esses dados para o banco. Os usuários podem verificar as vagas disponíveis e ocupadas, ver o horário de entrada e saída da vaga que desejar e quais sensores a atuadores estão ativos por meio do site.",
      tags: [
        {
          name: "Flask",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "ESP32",
          color: "pink-text-gradient",
        },
      ],
      image: iot,
      source_code_link: "https://github.com/Carlosedrm/PJBL_FLASK",
    },
  ];
  
  const programs = [
    {
      name: "Jogo da Forca em Python",
      description: "Este programa implementa o clássico jogo da forca em Python. O jogo começa com um jogador inserindo uma palavra no console e outros jogadores tentam advinhar. O programa exibe as letras corretas adivinhadas e as já escolhidas para os jogadores.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
      ],
      image: hangedManGame,
      source_code_link: "https://github.com/Carlosedrm/Hanged-Man-Game",
    },
    {
      name: "Vehicle Detection com OpenCV",
      description: "Nesse programa usamos várias técnicas de Image Processing para conseguir encontrar os carros e ver quantos foram detectados. Foi utilizado transformações morfológicas e criado uma linha para conseguir realizar a contagem de quantos veículos foram detectados.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
      ],
      image: detection,
      source_code_link: "https://github.com/Carlosedrm/Vehicle-Detection",
    },
    {
      name: "Identificador de Buracos em Ruas com OpenCV",
      description:
        "Neste programa em Python, é possível identificar a localização de um buraco em uma imagem e marcar o contour do buraco, utilizando operações básicas da biblioteca OpenCV. O programa faz uso de técnicas de processamento de imagem para marcar o local do buraco na imagem.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
      ],
      image: pothole,
      source_code_link: "https://github.com/Carlosedrm/Detect-Holes",
    },
    {
      name: "Conversão de Arquivos e Análise de Dados em C",
      description:
        "Programa em C com em duas partes. A primeira converte um arquivo .txt em binário, permitindo ao usuário escolher o nome do arquivo resultante. A segunda lê o arquivo binário, extrai dados específicos e gera um novo arquivo de texto com os dados.",
      tags: [
        {
          name: "C",
          color: "blue-text-gradient",
        },
      ],
      image: binaryC,
      source_code_link: "https://github.com/Carlosedrm/Projeto-Conversor-e-analise-de-arquivos-C",
    },
    {
      name: "Máquina de Vendas em Python",
      description:
        "Este programa em Python implementa uma máquina de vendas interativa com uma biblioteca para melhor visualização. O usuário pode selecionar um produto, inserir o valor pago e, em seguida, o programa calcula e fornece o troco correto em notas e moedas necessárias.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
      ],
      image: vendingMachine,
      source_code_link: "https://github.com/Carlosedrm/Maquina-de-Vendas",
    },
  ];
  
  export { services, technologies, experiences, testimonials, programs, projects };