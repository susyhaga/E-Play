import ProductsList from '../../components/ProductsList'
import Game from '../../models/Games'

import resident from '../../assets/resident.png'
import diablo from '../../assets/diablo.png'
import starWars from '../../assets/star_wars.png'
import zelda from '../../assets/zelda.png'

//Game = models usado no ProductsList
const promocoes: Game[] = [
  {
    id: 1,
    title: 'Resident Evil 4 - Remake',
    category: 'Ação',
    system: 'Windows',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    infos: ['R$199,90', '-10 %'],
    image: resident
  },
  {
    id: 2,
    title: 'Resident Evil 4 - Remake',
    category: 'Ação',
    system: 'Windows',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    infos: ['R$250,00 ', '-5%'],
    image: resident
  },
  {
    id: 3,
    title: 'Resident Evil 4 - Remake',
    category: 'Ação',
    system: 'PS5',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    infos: ['R$299,90', '-10%'],
    image: resident
  },
  {
    id: 4,
    title: 'Resident Evil 4 - Remake',
    category: 'Ação',
    system: 'PS5',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    infos: ['R$300,00', '-8%'],
    image: resident
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    title: 'Diablo 4',
    category: 'RPG',
    system: 'Windows',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    title: 'Zelda',
    category: 'RPG',
    system: 'Windows',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    infos: ['17/05'],
    image: zelda
  },
  {
    id: 7,
    title: 'Star Wars',
    category: 'RPG',
    system: 'Windows',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    infos: ['17/05'],
    image: starWars
  },
  {
    id: 8,
    title: 'Resident Evil 5',
    category: 'RPG',
    system: 'Windows',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    infos: ['17/05'],
    image: resident
  }
]
const Home = () => (
  <>
    <ProductsList games={promocoes} title="RPG" background="gray" />
    <ProductsList games={emBreve} title="Ação" background="black" />
    <ProductsList games={promocoes} title="Aventura" background="gray" />
    <ProductsList games={emBreve} title="FPS" background="black" />
  </>
)
export default Home
