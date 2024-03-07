import { Product } from 'src/domain/entities/product';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'orders' })
export class OrderOrm {
  @PrimaryColumn()
  id: string;

  @Column()
  owner: string;
  
  @Column()
  totalPrice: number;

  @Column()
  formattedTotalPrice: string;

  @Column({
    type: 'jsonb',
    array: false,
    default: () => "'[]'",
    nullable: false,
  })
  products: Array<Product>;
}
