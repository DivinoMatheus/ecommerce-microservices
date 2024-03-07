import { Column, Entity, PrimaryColumn, Unique } from 'typeorm';

@Entity({ name: "accounts" })
export class AccountOrm {
  @PrimaryColumn()
  id: string;

  @Column()
  fullname: string;

  @Column()
  nickname: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}
