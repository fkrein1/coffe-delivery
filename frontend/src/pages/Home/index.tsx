import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import heroImage from '../../assets/hero-coffee-image.svg';
import { CoffeeShelf } from '../../components/CoffeeShelf';
import {
  BenefitsContainer,
  BenefitsList,
  CoffeeIcon,
  HeroContainer,
  HeroImage,
  HomeContainer,
  PackageIcon,
  ShopIcon,
  TimeIcon,
} from './styles';

export function Home() {
  return (
    <HomeContainer>
      <HeroContainer>
        <BenefitsContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <BenefitsList>
            <ShopIcon>
              <div>
                <ShoppingCart weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </ShopIcon>

            <PackageIcon>
              <div>
                <Package weight="fill" />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </PackageIcon>

            <TimeIcon>
              <div>
                <Timer weight="fill" />
              </div>
              <span>Entrega rápida e rastreada</span>
            </TimeIcon>

            <CoffeeIcon>
              <div>
                <Coffee weight="fill" />
              </div>
              <span>O café chega fresquinho até você</span>
            </CoffeeIcon>
          </BenefitsList>
        </BenefitsContainer>

        <HeroImage>
          <img src={heroImage} />
        </HeroImage>
      </HeroContainer>
      <CoffeeShelf />
    </HomeContainer>
  );
}
