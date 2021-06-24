/*e necessário instalar a biblioteca para leitura de Svg (expo install react-native-svg) https://docs.expo.io/versions/latest/sdk/svg/ 
 https://github.com/kristerkari/react-native-svg-transformer - ( npm add --dev react-native-svg-transformer)
*/
import RankedSvg from '../assets/ranked.svg';
import DuelSvg from '../assets/duel.svg';
import FunSvg from '../assets/fun.svg';
import TrainingSvg from '../assets/training.svg';

export const categories = [
  { id: '1', title: 'Ranqueada', icon: RankedSvg },
  { id: '2', title: 'Duelo 1x1', icon: DuelSvg },
  { id: '3', title: 'Diversão', icon: FunSvg },
  { id: '4', title: 'Treino', icon: TrainingSvg },
]