export const portfolioData = [
  {
    id: 1,
    name: 'CV react',
    languages: ['javascript','react', 'css'],
    languagesIcons: ['fab fa-js','fa fa-react', 'fab fa-css3-alt'],
    source: 'https://github.com/JustVNRR/resume.git',
    info: 'Le présent cv.',
    picture: './resume/media/react-cv.jpg'
  },
  {
    id: 2,
    name: 'Echange de livres',
    languages: ['javascript','c#','css'],
    languagesIcons: ['fab fa-js','fa fa-csharp','fab fa-css3-alt'],
    source: 'https://github.com/JustVNRR/ReBook.git',
    youtube: 'https://youtu.be/eYuOsBM1LTs',
    info: 'Application d\'échange de livres basée sur ASP MVC Net 6. Utilisation d\'Ajax et implémentation d\'un système de notifications basé sur SignalR. SGBD SQL Server en code first avec ORM Entity Framework et Identity pour la gestion des utilisateurs ',
    picture: './media/rebook.jpg'
  },
  {
    id: 3,
    name: 'Shop react',
    languages: ['javascript','css','react'],
    languagesIcons: ['fab fa-js','fab fa-css3-alt','fa fa-react'],
    source: 'https://github.com/JustVNRR/ReactReduxShoppingCart.git',
    youtube: 'https://youtu.be/cwq_J-V61Vw',
    info: 'Petite Application d\'Ecommerce basée sur React. Gestions des utilisateurs et des produits. Ajouts de produits au panier. Infinite Scroll...',
    picture: './media/react-shop.jpg'
  },
  {
    id: 4,
    name: 'Node.js API',
    languages: ['javascript','node'],
    languagesIcons: ['fab fa-js', 'fab fa-node-js'],
    source: 'https://github.com/JustVNRR/NodeExpressSimpleAPI.git',
    info: 'API utilisée par le front \'Shop React\'. Autorise la gestion des utilisteurs et de leurs droits, ainsi que la gestion de produits. Les données sont stockées sur SQLite.',
    picture: './media/node-api.jpg'
  },
  {
    id: 5,
    name: 'In the mood for gold',
    languages: ['javascript','css', 'php'],
    languagesIcons: ['fab fa-js','fab fa-css3-alt', 'fa fa-php'],
    url: 'https://inthemoodforgold.com',
    info: 'Objet Webique non identifié à base d\'un Wordpress sauce Ajax.',
    picture: './media/itmfg.jpg'
  },
  {
    id: 6,
    name: 'Calculatrice WPF',
    languages: ['c#'],
    languagesIcons: ['fa fa-csharp'],
    source: 'https://github.com/JustVNRR/calculatrice-wpf.git',
    info: 'Calculatrice WPF sous .Net 6. Les expressions à calculer sont interprétées via des expressions régulières.',
    picture: './media/calculatrice-wpf.jpg'
  },
  {
    id: 7,
    name: 'Bibliothèque de convolution',
    languages: ['c'],
    languagesIcons: ['fa fa-c'],
    source: 'https://github.com/JustVNRR/convolution_plugin.git',
    info: 'Module de convolution de signaux audios par des réponses impulsionnelles préalablement obtenues sur base de simulations d\'acoustique des salles.',
    picture: './media/auralizator.jpg'
  },
]