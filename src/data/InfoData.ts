import fountainBlock from '@/assets/forbidden-fountain.png'
import fountainPartial from '@/assets/partial-fountain.png'
import lockerroomBlock from '@/assets/forbidden-lockerroom.png'
import lockerroomPartial from '@/assets/partial-lockerroom.png'
import lockerroomRequired from '@/assets/required-lockerroom.png'
import maskRecomended from '@/assets/recommended-mask.png'
import maskRequired from '@/assets/required-mask.png'
import towelRecomended from '@/assets/recommended-towel.png'
import towelRequired from '@/assets/required-towel.png'

export const infoData = [
  {
    title: 'Máscara',
    items: [
      { image: maskRequired, text: 'Obrigatório' },
      { image: maskRecomended, text: 'Recomendado' },
    ],
  },
  {
    title: 'Toalha',
    items: [
      { image: towelRequired, text: 'Obrigatório' },
      { image: towelRecomended, text: 'Recomendado' },
    ],
  },
  {
    title: 'Bebedouro',
    items: [
      { image: fountainBlock, text: 'Proibido' },
      { image: fountainPartial, text: 'Parcial' },
    ],
  },
  {
    title: 'Vestiário',
    items: [
      { image: lockerroomRequired, text: 'Liberado' },
      { image: lockerroomPartial, text: 'Parcial' },
      { image: lockerroomBlock, text: 'Proibido' },
    ],
  },
]

export {
  fountainBlock,
  fountainPartial,
  lockerroomBlock,
  lockerroomPartial,
  lockerroomRequired,
  maskRecomended,
  maskRequired,
  towelRecomended,
  towelRequired,
}
