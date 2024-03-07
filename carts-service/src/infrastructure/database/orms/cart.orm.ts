import { CartItem } from 'src/domain/entities/cart-item';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: "carts" })
export class CartOrm {

  @PrimaryColumn()
  id: string

  @Column({ unique: true })
  owner: string

  @Column({ type: 'jsonb', array: false, default: () => "'[]'", nullable: false })
  items: Array<CartItem>
}
