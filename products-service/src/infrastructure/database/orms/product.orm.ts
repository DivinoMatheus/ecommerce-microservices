import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: "products" })
export class ProductOrm {

  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  formattedPrice: string;
}
