import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { FeaturesEntity } from './features.entity';

@Entity({
  name: 'subscription',
})
export class SuscriptionEntity {
  @PrimaryGeneratedColumn('uuid')
  suscriptionId: string;

  @Column()
  plan: string;

  @Column()
  price: number;

  @Column()
  duration: number;

  // TODO: Creo que debe ser una relación uno(suscripción) a muchos(features) -> OneToMany
  // TODO: También creo que acá en SuscriptionEntity, el campo debe ser un array: ej: featureIds: FeaturesEntity[];
  @OneToOne(() => FeaturesEntity, (features) => features.featureId)
  featureId: FeaturesEntity;
}
